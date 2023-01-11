import { Injectable } from '@angular/core';
import * as MessagesActions from './messages.actions';
import { Store } from '@ngrx/store';
import { MessagesSelector } from '.';
import { UserInterface } from 'src/app/components/user.interface';

@Injectable({
  providedIn: 'root',
})
export class MessagesFacadeService {
  public messages$ = this.store.select(MessagesSelector.selectUserData);
  public messagesSendingState$ = this.store.select(
    MessagesSelector.selectMessagesSendingState
  );
  public dataLoadingState$ = this.store.select(
    MessagesSelector.selectDataLoadingState
  );
  constructor(private store: Store) {}
  sendUserData(data: UserInterface) {
    this.store.dispatch(MessagesActions.sendData({ data }));
  }
  getUserData() {
    this.store.dispatch(MessagesActions.getUserData());
  }
}
