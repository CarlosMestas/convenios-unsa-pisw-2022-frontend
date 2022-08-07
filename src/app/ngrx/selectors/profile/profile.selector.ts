import { IProfileState } from './../../../shared/interfaces/profile/profile-state.interface';
import { createSelector } from '@ngrx/store';
import { IAppState } from './../../app.state';
//getting UserAuth state
export const profileStateSelector = (state:IAppState) => state.profile;


export const profileProfileStateSelector = createSelector( //TODO: this is a selector to get email value of
profileStateSelector,
  (profileState:IProfileState) => profileState.profile
)

export const profileImageStateSelector = createSelector(
  profileStateSelector,
  (profileState:IProfileState) => profileState.profile?.image
)

export const profileTypeDescription = createSelector(
  profileStateSelector,
  (profileState:IProfileState) => profileState.profile?.type.description
)
