import { profileReducer } from './reducers/profile/profile.reducer';
import { IProfileState } from './../shared/interfaces/profile/profile-state.interface';
import { userAuthReducer } from './reducers/auth/user-auth.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { IUserAuthState } from './../shared/interfaces/auth/user-auth-state.interface';
import { IConvocationState } from '../shared/interfaces/convocation/convocation-state.interface';
import { convocationReducer } from './reducers/convocation/convocation.reducer';
export interface IAppState{
  userAuth:IUserAuthState,
  profile:IProfileState,
  convocation:IConvocationState,
}


export const ROOT_REDUCERS: ActionReducerMap<IAppState> = { //TODO: FIXME:
  userAuth:userAuthReducer,
  profile:profileReducer,
  convocation:convocationReducer
}
