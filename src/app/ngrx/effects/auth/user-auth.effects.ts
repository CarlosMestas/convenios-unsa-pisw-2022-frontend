import { userLoadRequestAction, userLogoutRequestAction, userSignInRequestAction, userRegisterSuccessAction, userSignInSuccessAction, userLoadSuccessAction } from './../../actions/auth/user-auth.actions';
import { UserAuthActions } from '../../actions/auth/user-auth.actions';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { userRegisterRequestAction } from 'src/app/ngrx/actions/auth/user-auth.actions';
import { map } from 'rxjs';
import { AuthService } from './../../../core/services/auth/auth.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap } from 'rxjs';

@Injectable()
export class UserAuthEffect{



  constructor(
    private actions$:Actions,
    private authService:AuthService//:TODO: we'll continue using our auth service
    ){
  }

  userAuthRegisterRequestEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(userRegisterRequestAction), //TODO: Action who Excecuted this change
    mergeMap((action)=>this.authService.userSignIn(action.email)//TODO: return a user login confirmation
    .pipe(
      map(resp => ({
        type:UserAuthActions.USER_REGISTER_SUCCESS_ACTION,
        user:resp.data
      }
      )),
      catchError(()=>EMPTY)
    ))
  ))

  userAuthSignInRequestEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(userSignInRequestAction), //TODO: Action who Excecuted this change
    mergeMap((action)=>this.authService.userSignIn(action.email)//TODO: return a user login confirmation
    .pipe(
      map(resp => ({
        type:UserAuthActions.USER_SIGNIN_SUCCESS_ACTION,
        user:resp.data
      }
      )),
      catchError(()=>EMPTY)
    ))
  ))



  userAuthLoadRequestEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(userLoadRequestAction), //TODO: Action who Excecuted this change
    mergeMap(()=>this.authService.loadUser()//TODO: return a user from load and fetch confirmation
    .pipe(
      map(resp => {
        console.log("loading error state",resp.error)
        if(!resp.error)
          return {
            type:UserAuthActions.USER_LOAD_SUCCESS_ACTION,
            user:resp.data
          }
        else
          return {
            type:UserAuthActions.USER_LOAD_ERROR_ACTION
          }
      }),
      catchError(()=>EMPTY)
    ))
  ))

  userAuthLogoutRequestEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(userLogoutRequestAction),
    mergeMap(()=>this.authService.userLogout()
    .pipe(
      map(resp =>({
        type:UserAuthActions.USER_LOGOUT_SUCCESS_ACTION
      })),
      catchError(()=>EMPTY)
    ))
  ))

  userAuthRegisterSuccessEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(userRegisterSuccessAction),
    mergeMap((action)=> of({
      type:UserAuthActions.USER_DATA_SUCCESS_ACTION,
      user:action.user
    })
    )
  ))
  userAuthSignInSuccessEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(userSignInSuccessAction),
    mergeMap((action)=> of({
      type:UserAuthActions.USER_DATA_SUCCESS_ACTION,
      user:action.user
    })
    )
  ))


  userAuthLoadSuccessEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(userLoadSuccessAction),
    mergeMap((resp)=> of({
      type:UserAuthActions.USER_DATA_SUCCESS_ACTION,
      user:resp.user
    })
    )
  ))

}
