import { IUserAuthState } from './../../../shared/interfaces/auth/user-auth-state.interface';
import { createSelector } from '@ngrx/store';
import { IAppState } from './../../app.state';

//getting UserAuth state
export const userAuthStateSelector = (state:IAppState) => state.userAuth;


export const userEmailStateSelector = createSelector( //TODO: this is a selector to get email value of
  userAuthStateSelector,
  (userAuthState:IUserAuthState) => userAuthState.email
)

export const userRegisterRequestedStateSelector = createSelector(
  userAuthStateSelector,
  (userAuthState:IUserAuthState) => userAuthState.working
)

export const userAuthUserStateSelector = createSelector(
    userAuthStateSelector,
   (userAuthState:IUserAuthState) =>userAuthState.user
)
