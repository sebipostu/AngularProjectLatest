import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormComponent } from '../form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MessagesStoreModule } from 'src/app/store/messages/messages-store.module';
import { MessagesEffects } from 'src/app/store/messages/messages.effects';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { FlipToSquareSpinnerComponent } from '../flip-to-square-spinner/flip-to-square-spinner.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MessageTrimPipe } from './message-trim.pipe';
import { MatSortModule } from '@angular/material/sort';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
@NgModule({
  declarations: [
    MessagesComponent,
    FormComponent,
    FlipToSquareSpinnerComponent,
    MessageTrimPipe,
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MessagesStoreModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse' }),
  ],
  providers: [MessagesEffects],
  exports: [MessagesComponent],
})
export class MessagesModule {}
