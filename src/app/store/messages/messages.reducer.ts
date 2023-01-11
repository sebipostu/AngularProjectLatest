import { createReducer, on } from '@ngrx/store';
import { initialState, State } from './messages.state';
import * as MessagesActions from './messages.actions';
import { MessageSendingStateEnum } from './enums/messageSendingState.enum';
import { DataLoadingStateEnum } from './enums/data-loading.enum';
export const messagesReducerFn = createReducer(
  initialState,
  on(MessagesActions.sendData, (state): State => {
    return {
      ...state,
      messageSendingState: MessageSendingStateEnum.Sending,
    };
  }),
  on(MessagesActions.sendDataSuccess, (state): State => {
    return {
      ...state,
      messageSendingState: MessageSendingStateEnum.Sent,
    };
  }),
  on(MessagesActions.sendDataFailure, (state): State => {
    return {
      ...state,
      messageSendingState: MessageSendingStateEnum.Error,
    };
  }),
  on(MessagesActions.getUserData, (state): State => {
    return {
      ...state,
      dataLoadingState: DataLoadingStateEnum.Loading,
    };
  }),
  on(MessagesActions.getUserDataFailure, (state): State => {
    return {
      ...state,
      dataLoadingState: DataLoadingStateEnum.Loaded,
    };
  }),
  on(MessagesActions.getUserDataSuccess, (state, { userData }): State => {
    return {
      ...state,
      userData: userData,
      dataLoadingState: DataLoadingStateEnum.Loaded,
    };
  })
);
