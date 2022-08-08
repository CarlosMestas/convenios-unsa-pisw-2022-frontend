import { on } from '@ngrx/store';
import { dialogProfileNotConfiguredAction, profileLoadRequestAction, profileLoadSuccessAction, dialogProfileNotConfiguredDismissAction, profileNoneAction } from './../../actions/profile/profile.actions';
import { ProfileInitialState } from './../../initial-states/profile/profile.initial-state';
import { createReducer } from '@ngrx/store';
export const profileReducer = createReducer(
  ProfileInitialState,
  on(profileLoadRequestAction,(state,params) =>{
    return {...state,idUser:params.idUser, working:true }
  }),
  on(profileLoadSuccessAction,(state,params) =>{
    return {...state,profile:params.profile, working:false}
  }),
  on(dialogProfileNotConfiguredAction,(state)=>{
    return {...state,dialogProfileNotConfigured:true}
  }),
  on(dialogProfileNotConfiguredDismissAction,(state)=>{
    return {...state,dialogProfileNotConfigured:false}
  }),
  on(profileNoneAction,(state)=>{
    return {...state}
  })
)
