import {
  UserAuthActions, userLoadSuccessAction,
  userRegisterSuccessAction,
  userSignInSuccessAction
} from '../../actions/auth/user-auth.actions';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { map } from 'rxjs';
import { AuthService } from './../../../core/services/auth/auth.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap } from 'rxjs';
import {
  AdminAuthActions, adminLoadSuccessAction,
  adminRegisterSuccessAction,
  adminSignInSuccessAction
} from "../../actions/admin/admin-auth.actions";

@Injectable()
export class AdminAuthEffect{
  constructor(
    private actions$:Actions,
    private authService:AuthService//:TODO: we'll continue using our auth service
    ){
  }


  adminAuthRegisterSuccessEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(adminRegisterSuccessAction),
    mergeMap((action)=> of({
      type:AdminAuthActions.ADMIN_DATA_SUCCESS_ACTION,
      admin:action.admin
    })
    )
  ))
  adminAuthSignInSuccessEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(adminSignInSuccessAction),
    mergeMap((action)=> of({
      type:AdminAuthActions.ADMIN_DATA_SUCCESS_ACTION,
      admin:action.admin
    })
    )
  ))


  adminAuthLoadSuccessEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(adminLoadSuccessAction),
    mergeMap((resp)=> of({
      type:AdminAuthActions.ADMIN_DATA_SUCCESS_ACTION,
      admin:resp.admin
    })
    )
  ))

}
