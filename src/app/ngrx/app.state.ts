import { profileReducer } from './reducers/profile/profile.reducer';
import { IProfileState } from './../shared/interfaces/profile/profile-state.interface';
import { userAuthReducer } from './reducers/auth/user-auth.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { IUserAuthState } from './../shared/interfaces/auth/user-auth-state.interface';
import {IAdminAuthState} from "../shared/interfaces/admin/admin-auth-state.interface";
import {adminAuthReducer} from "./reducers/admin/admin-auth.reducers";
import { IConvocationState } from '../shared/interfaces/convocation/convocation-state.interface';
import { convocationReducer } from './reducers/convocation/convocation.reducer';
export interface IAppState{
  userAuth:IUserAuthState,
  adminAuth:IAdminAuthState,
  convocation:IConvocationState,
  profile:IProfileState
}


export const ROOT_REDUCERS: ActionReducerMap<IAppState> = { //TODO: FIXME:
  userAuth:userAuthReducer,
  adminAuth:adminAuthReducer,
  profile:profileReducer,
  convocation:convocationReducer
}
