import { createAction, props } from '@ngrx/store';
import { IDialogNotification } from 'src/app/shared/interfaces/notification.interface';
export const DialogNotificationActions = {
    SHOW_NOTIFICATION_ACTION:"[MainApp - Component] Show Dialog Notification ",
    DISMISS_NOTIFICATION_ACTION:"[API - Heroku] Dismiss Dialog Notification",
  }

  export const showNotificationAction = createAction(
    DialogNotificationActions.SHOW_NOTIFICATION_ACTION,
    props<IDialogNotification>()
  )

  export const dismissNotificationAction = createAction(
    DialogNotificationActions.DISMISS_NOTIFICATION_ACTION
  )
