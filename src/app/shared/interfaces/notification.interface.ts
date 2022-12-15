export interface IDialogNotificationState{
    working:boolean,
    notification:IDialogNotification
}

export interface IDialogNotification{
    message:string,
    detail:string
}
