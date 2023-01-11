import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';
import { MessagesActions } from '.';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';

@Injectable()
export class MessagesEffects {
  constructor(
    private actions$: Actions,
    private afs: AngularFirestore,
    private snackbar: MatSnackBar,
    private store: Store
  ) {}

  sendData$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(MessagesActions.sendData),
        map((action) => {
          return this.afs
            .collection('messages')
            .doc()
            .set(action.data)
            .then(() => {
              this.snackbar.open('Message has been sent')._dismissAfter(5000);
              this.store.dispatch(MessagesActions.sendDataSuccess());
            })
            .catch((err: HttpErrorResponse) => {
              this.snackbar
                .open('An error has occured while sending your message')
                ._dismissAfter(5000);
              this.store.dispatch(MessagesActions.sendDataFailure(err));
            });
        })
      );
    },
    { dispatch: false }
  );
  getMessages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MessagesActions.getUserData),
      exhaustMap(() => {
        const messagesCollection = this.afs.collection('messages');
        const messages = messagesCollection.valueChanges();
        return messages.pipe(
          map((data) => {
            return MessagesActions.getUserDataSuccess({ userData: data });
          }),
          catchError((err) => of(MessagesActions.getUserDataFailure(err)))
        );
      })
    );
  });
}
