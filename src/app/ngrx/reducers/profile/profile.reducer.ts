import { on } from '@ngrx/store';
import { profileLoadRequestAction, profileLoadSuccessAction } from './../../actions/profile/profile.actions';
import { ProfileInitialState } from './../../initial-states/profile/profile.initial-state';
import { createReducer } from '@ngrx/store';
export const profileReducer = createReducer(
  ProfileInitialState,
  on(profileLoadRequestAction,(state,params) =>{
    return {...state,idUser:params.idUser, working:true }
  }),
  on(profileLoadSuccessAction,(state,params) =>{
    return {...state,profile:params.profile, working:false}
  })
)
