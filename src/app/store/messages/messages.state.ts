import { UserInterface } from 'src/app/components/user.interface';
import { DataLoadingStateEnum } from './enums/data-loading.enum';
import { MessageSendingStateEnum } from './enums/messageSendingState.enum';

export interface State {
  userData: UserInterface[] | any[];
  messageSendingState: MessageSendingStateEnum;
  dataLoadingState: DataLoadingStateEnum;
}

export const initialState: State = {
  userData: [],
  messageSendingState: MessageSendingStateEnum.Initial,
  dataLoadingState: DataLoadingStateEnum.Initial,
};
