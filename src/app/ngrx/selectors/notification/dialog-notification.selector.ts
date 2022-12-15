import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/ngrx/app.state';
import {
  IDialogNotification,
  IDialogNotificationState,
} from 'src/app/shared/interfaces/notification.interface';
export const dialogNotificationStateSelector = (state: IAppState) =>
  state.dialogNotification;

export const isDialogNotificationShowedStateSelector = createSelector(
  dialogNotificationStateSelector,
  (dialogNotificationState: IDialogNotificationState) => dialogNotificationState.working
);

export const dialogNotificationDataStateSelector = createSelector(
  dialogNotificationStateSelector,
  (dialogNotificationState: IDialogNotificationState) => dialogNotificationState.notification
);
