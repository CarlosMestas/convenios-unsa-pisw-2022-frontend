import {IAdmin } from '../../../shared/interfaces/admin.interface';
import { createAction, props } from "@ngrx/store";

export const AdminAuthActions = {
  ADMIN_REGISTER_SUCCESS_ACTION:"[API - Heroku] Admin Register Success",
  ADMIN_LOAD_SUCCESS_ACTION:"[API - Heroku] Admin Load Success",
  ADMIN_LOAD_ERROR_ACTION:"[API - Heroku] Admin Load Error",
  ADMIN_LOGOUT_SUCCESS_ACTION:"[API - Heroku] Admin Logout Success",
  ADMIN_SIGNIN_SUCCESS_ACTION:"[API - Heroku] Admin SignIn Success",
  ADMIN_SIGNIN_ERROR_ACTION:"[API - Heroku] Admin SignIn Error",
  ADMIN_DATA_SUCCESS_ACTION:"[API - Heroku] Admin Data Success"
}

export const adminRegisterSuccessAction = createAction(
  AdminAuthActions.ADMIN_REGISTER_SUCCESS_ACTION,
  props<{admin:IAdmin}>()
)

export const adminSignInSuccessAction = createAction(
  AdminAuthActions.ADMIN_SIGNIN_SUCCESS_ACTION,
  props<{admin:IAdmin}>()
)
export const adminSignInErrorAction = createAction(
  AdminAuthActions.ADMIN_SIGNIN_ERROR_ACTION
)

export const adminLoadSuccessAction = createAction(
  AdminAuthActions.ADMIN_LOAD_SUCCESS_ACTION,
  props<{admin:IAdmin}>()
)

export const adminLoadErrorAction = createAction(
  AdminAuthActions.ADMIN_LOAD_ERROR_ACTION
)

export const adminLogoutSuccessAction = createAction(
  AdminAuthActions.ADMIN_LOGOUT_SUCCESS_ACTION
)

export const adminDataSuccessAction = createAction(
  AdminAuthActions.ADMIN_DATA_SUCCESS_ACTION,
  props<{admin:IAdmin}>()
)

