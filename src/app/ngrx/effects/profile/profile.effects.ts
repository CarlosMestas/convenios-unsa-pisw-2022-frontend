import { AuthService } from './../../../core/services/auth/auth.service';
import { catchError, EMPTY, of } from 'rxjs';
import { profileLoadRequestAction, ProfileActions, profileLoadSuccessAction } from './../../actions/profile/profile.actions';
import { map } from 'rxjs';
import { mergeMap } from 'rxjs';
import { ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { ProfileService } from './../../../core/services/profile/profile.service';
import { Actions } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { userDataSuccessAction } from '../../actions/auth/user-auth.actions';

@Injectable()
export class ProfileEffect{
  constructor(
    private actions$:Actions,
    private profileService:ProfileService,//:TODO: we'll continue using our auth service
    ){
  }

  profileLoadRequestEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(profileLoadRequestAction), //TODO: Action who Excecuted this change
    mergeMap((action)=>this.profileService.fetchProfile(action.idUser)//TODO: return a user login confirmation
    .pipe(
      map(resp => ({
        type:ProfileActions.PROFILE_LOAD_SUCCESS_ACTION,
        profile:resp.data
      }
      )),
      catchError(()=>EMPTY)
    ))
  ))

  userDataSuccessEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(userDataSuccessAction),
    mergeMap((action)=>this.profileService.fetchProfile(action.user.id)//TODO: return a user login confirmation
    .pipe(
      map(resp =>  (
          {
            type:ProfileActions.PROFILE_LOAD_SUCCESS_ACTION,
            profile:resp.data
          }
        )
      ),
      catchError(()=>EMPTY)
    ))
  )
  )

  profileLoadSuccessEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(profileLoadSuccessAction),
    mergeMap((action)=>{
      if(action.profile.profile_created == 0)
        return of({type:ProfileActions.DIALOG_PROFILE_NOT_CONFIGURED_ACTION})
      else
        return of({type:ProfileActions.PROFILE_NONE_ACTION})
    })
  ))


}
