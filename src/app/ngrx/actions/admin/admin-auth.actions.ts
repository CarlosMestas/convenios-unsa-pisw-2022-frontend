import {IAdmin } from '../../../shared/interfaces/admin.interface';
import { createAction, props } from "@ngrx/store";
import {IUser} from "../../../shared/interfaces/user.interface";
import {UserAuthActions} from "../auth/user-auth.actions";


export const AdminAuthActions = {
  ADMIN_LOAD_REQUEST_ACTION:"[MainApp - Component] Admin Load Request",
  ADMIN_LOAD_SUCCESS_ACTION:"[API - Heroku] Admin Load Success",
  ADMIN_LOAD_ERROR_ACTION:"[API - Heroku] Admin Load Error",
  ADMIN_LOGOUT_REQUEST_ACTION:"[Sidebar - Component] Admin Logout Request",
  ADMIN_LOGOUT_SUCCESS_ACTION:"[API - Heroku] Admin Logout Success",
  ADMIN_SIGNIN_REQUEST_ACTION:"[SignIn - Page] Admin SignIn Request",
  ADMIN_SIGNIN_SUCCESS_ACTION:"[API - Heroku] Admin SignIn Success",
  ADMIN_SIGNIN_ERROR_ACTION:"[API - Heroku] Admin SignIn Error",
  ADMIN_DATA_SUCCESS_ACTION:"[API - Heroku] Admin Data Success"
}

export const adminLoadRequestAction = createAction(
  AdminAuthActions.ADMIN_LOAD_REQUEST_ACTION
)

export const adminLoadSuccessAction = createAction(
  AdminAuthActions.ADMIN_LOAD_SUCCESS_ACTION,
  props<{admin:IAdmin}>()
)

export const adminLoadErrorAction = createAction(
  AdminAuthActions.ADMIN_LOAD_ERROR_ACTION
)
export const adminLogoutRequestAction = createAction(
  AdminAuthActions.ADMIN_LOGOUT_REQUEST_ACTION
)

export const adminLogoutSuccessAction = createAction(
  AdminAuthActions.ADMIN_LOGOUT_SUCCESS_ACTION
)

export const adminSignInRequestAction = createAction(
  AdminAuthActions.ADMIN_SIGNIN_REQUEST_ACTION,
  props<IAdmin>()
)

export const adminSignInSuccessAction = createAction(
  AdminAuthActions.ADMIN_SIGNIN_SUCCESS_ACTION,
  props<{admin:IAdmin}>()
)
export const adminSignInErrorAction = createAction(
  AdminAuthActions.ADMIN_SIGNIN_ERROR_ACTION
)

export const adminDataSuccessAction = createAction(
  AdminAuthActions.ADMIN_DATA_SUCCESS_ACTION,
  props<{admin:IAdmin}>()
)

