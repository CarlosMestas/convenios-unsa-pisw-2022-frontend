import { IDialogNotificationState } from "src/app/shared/interfaces/notification.interface";

export const DialogNotificationInitialState:IDialogNotificationState = {
  working: false,
  notification: {
    message:"",
    detail:""
  }
}
