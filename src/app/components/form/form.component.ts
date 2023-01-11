import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MessageSendingStateEnum } from 'src/app/store/messages/enums/messageSendingState.enum';
import { MessagesFacadeService } from 'src/app/store/messages/messages-facade.service';
import { UserInterface } from '../user.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  public messageSendingStateEnum = MessageSendingStateEnum;
  public messageSendingState$ = this.messagesFacade.messagesSendingState$;
  constructor(
    private fb: FormBuilder,
    private messagesFacade: MessagesFacadeService,
    private dialog: MatDialog
  ) {}
  public messagesForm = this.fb.group({
    name: [''],
    message: [''],
  });
  sendMessage() {
    const data: UserInterface = {
      id: this.generateUUID(),
      name: this.messagesForm.get('name')?.value,
      message: this.messagesForm.get('message')?.value,
      date: new Date().toString(),
    };
    if (data) {
      this.messagesFacade.sendUserData(data);
      this.messagesForm.setValue({ name: '', message: '' });
      this.dialog.closeAll();
    }
  }
  public generateUUID() {
    // Public Domain/MIT source: https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
    var d = new Date().getTime();
    var d2 =
      (typeof performance !== 'undefined' &&
        performance.now &&
        performance.now() * 1000) ||
      0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = Math.random() * 16;
        if (d > 0) {
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else {
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
  }
}
