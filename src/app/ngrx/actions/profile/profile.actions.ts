import { IProfile } from './../../../shared/interfaces/profile.interface';
import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store';


export const ProfileActions = {
  PROFILE_LOAD_REQUEST_ACTION:"[MainApp - Page] Profile Load Request",
  PROFILE_LOAD_SUCCESS_ACTION:"[Api - Heroku] Profile Load Success",
  PROFILE_LOAD_ERROR_ACTION:"[Api - Heroku] Profile Load Error"
}

export const profileLoadRequestAction = createAction(
  ProfileActions.PROFILE_LOAD_REQUEST_ACTION,
  props<{idUser:number}>()
)
export const profileLoadSuccessAction = createAction(
  ProfileActions.PROFILE_LOAD_SUCCESS_ACTION,
  props<{profile:IProfile}>()
)

export const profileLoadErrorAction = createAction(
  ProfileActions.PROFILE_LOAD_ERROR_ACTION
)
