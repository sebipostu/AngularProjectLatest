import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { UserInterface } from 'src/app/components/user.interface';
export const sendData = createAction(
  '[Messages] Send Data',
  props<{ data: UserInterface }>()
);
export const sendDataSuccess = createAction('[Messages] Send Data Success');
export const sendDataFailure = createAction(
  '[Messages] Send Data Failure',
  props<{ error: HttpErrorResponse }>()
);
export const getUserData = createAction('[Messages] Get User Data');
export const getUserDataSuccess = createAction(
  '[Messages] Get User Data Success',
  props<{ userData: any[] | unknown[] }>()
);
export const getUserDataFailure = createAction(
  '[Messages] Get User Data Failure',
  props<{ error: HttpErrorResponse }>()
);
