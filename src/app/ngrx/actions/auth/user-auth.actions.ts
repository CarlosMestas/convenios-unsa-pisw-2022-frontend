import { IUser } from '../../../shared/interfaces/user.interface';
import { IUserDataLogin, IUserDataRegister } from '../../../shared/interfaces/auth/user-auth-types';
import { createAction, props } from "@ngrx/store";

export const UserAuthActions = {
  USER_REGISTER_REQUEST_ACTION:"[Register - Page] User Register Request",
  USER_REGISTER_SUCCESS_ACTION:"[API - Heroku] User Register Success",
  USER_LOAD_REQUEST_ACTION:"[MainApp - Component] User Load Request",
  USER_LOAD_SUCCESS_ACTION:"[API - Heroku] User Load Success",
  USER_LOAD_ERROR_ACTION:"[API - Heroku] User Load Error",
  USER_LOGOUT_REQUEST_ACTION:"[Sidebar - Component] User Logout Request",
  USER_LOGOUT_SUCCESS_ACTION:"[API - Heroku] User Logout Success",
  USER_SIGNIN_REQUEST_ACTION:"[SignIn - Page] User SignIn Request",
  USER_SIGNIN_SUCCESS_ACTION:"[API - Heroku] User SignIn Success",
  USER_SIGNIN_ERROR_ACTION:"[API - Heroku] User SignIn Error",
  USER_DATA_SUCCESS_ACTION:"[API - Heroku] User Data Success",
  DIALOG_USER_REGISTER_WRONG_EMAIL_ACTION:"[Register Component] Dialog User Register Wrong Email",
  DIALOG_USER_REGISTER_WRONG_EMAIL_DISMISS_ACTION:"[Register Component] Dialog User Register Wrong Email Dismiss"
}



export const userRegisterRequestAction = createAction(
  UserAuthActions.USER_REGISTER_REQUEST_ACTION,
  props<IUserDataRegister>()
)

export const userRegisterSuccessAction = createAction(
  UserAuthActions.USER_REGISTER_SUCCESS_ACTION,
  props<{user:IUser}>()
)

export const userSignInRequestAction = createAction(
  UserAuthActions.USER_SIGNIN_REQUEST_ACTION,
  props<IUserDataLogin>()
)
export const userSignInSuccessAction = createAction(
  UserAuthActions.USER_SIGNIN_SUCCESS_ACTION,
  props<{user:IUser}>()
)
export const userSignInErrorAction = createAction(
  UserAuthActions.USER_SIGNIN_ERROR_ACTION
)

export const userLoadRequestAction = createAction(
  UserAuthActions.USER_LOAD_REQUEST_ACTION
)

export const userLoadSuccessAction = createAction(
  UserAuthActions.USER_LOAD_SUCCESS_ACTION,
  props<{user:IUser}>()
)

export const userLoadErrorAction = createAction(
  UserAuthActions.USER_LOAD_ERROR_ACTION
)

export const userLogoutRequestAction = createAction(
  UserAuthActions.USER_LOGOUT_REQUEST_ACTION
)

export const userLogoutSuccessAction = createAction(
  UserAuthActions.USER_LOGOUT_SUCCESS_ACTION
)

export const userDataSuccessAction = createAction(
  UserAuthActions.USER_DATA_SUCCESS_ACTION,
  props<{user:IUser}>()
)

export const dialogUserRegisterWrongEmailAction = createAction(
  UserAuthActions.DIALOG_USER_REGISTER_WRONG_EMAIL_ACTION
)

export const dialogUserRegisterWrongEmailDismissAction = createAction(
  UserAuthActions.DIALOG_USER_REGISTER_WRONG_EMAIL_DISMISS_ACTION
)
