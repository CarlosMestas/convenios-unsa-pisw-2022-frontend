import { IAdminAuthState } from './../../../shared/interfaces/admin/admin-auth-state.interface';
import { createSelector } from '@ngrx/store';
import { IAppState } from './../../app.state';
import {IUserAuthState} from "../../../shared/interfaces/auth/user-auth-state.interface";
import {userAuthStateSelector} from "../auth/user-auth.selector";

//getting UserAuth state
export const adminAuthStateSelector = (state:IAppState) => state.adminAuth;


export const adminEmailStateSelector = createSelector( //TODO: this is a selector to get email value of
  adminAuthStateSelector,
  (adminAuthState:IAdminAuthState) => adminAuthState.email
)

export const adminAuthAdminStateSelector = createSelector(
  adminAuthStateSelector,
   (adminAuthState:IAdminAuthState) =>adminAuthState.admin
)


