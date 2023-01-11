import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MessagesState } from '.';
import { Features } from './enums/features.enum';

export const selectFeatureMessagesState =
  createFeatureSelector<MessagesState.State>(Features.Messages);
export const selectUserData = createSelector(
  selectFeatureMessagesState,
  (state) => state.userData
);
export const selectMessagesSendingState = createSelector(
  selectFeatureMessagesState,
  (state) => state.messageSendingState
);
export const selectDataLoadingState = createSelector(
  selectFeatureMessagesState,
  (state) => state.dataLoadingState
);
