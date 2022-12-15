import { on } from '@ngrx/store';
import { createReducer } from '@ngrx/store';
import { dismissNotificationAction, showNotificationAction } from '../../actions/notifications/dialog-notifications.actions';
import { DialogNotificationInitialState } from '../../initial-states/notification/dialog-notification.initial-state';
export const dialogNofiticationReducer = createReducer(
    DialogNotificationInitialState,
    on(showNotificationAction,(state,params) =>{
      return {...state,notification:params, working:true }
    }),
    on(dismissNotificationAction,(state) =>{
      return {...state,notification:{message:'',detail:''}, working:false}
    })
  )
