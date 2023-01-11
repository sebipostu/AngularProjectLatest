import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Features } from './enums/features.enum';
import { MessagesFacadeService } from './messages-facade.service';
import { MessagesEffects } from './messages.effects';
import { messagesReducerFn } from './messages.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(Features.Messages, messagesReducerFn),
    EffectsModule.forFeature([MessagesEffects]),
    AngularFireModule,
    AngularFirestoreModule,
  ],
  providers: [MessagesFacadeService, MessagesEffects],
})
export class MessagesStoreModule {}
