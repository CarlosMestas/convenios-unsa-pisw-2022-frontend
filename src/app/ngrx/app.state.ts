import { profileReducer } from './reducers/profile/profile.reducer';
import { IProfileState } from './../shared/interfaces/profile/profile-state.interface';
import { userAuthReducer } from './reducers/auth/user-auth.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { IUserAuthState } from './../shared/interfaces/auth/user-auth-state.interface';
export interface IAppState{
  userAuth:IUserAuthState,
  profile:IProfileState
}


export const ROOT_REDUCERS: ActionReducerMap<IAppState> = {
  userAuth:userAuthReducer,
  profile:profileReducer
}
