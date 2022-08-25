import {
  UserAuthActions, userLoadRequestAction, userLogoutRequestAction

} from '../../actions/auth/user-auth.actions';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { map } from 'rxjs';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap } from 'rxjs';
import {
  AdminAuthActions, adminLoadRequestAction, adminLoadSuccessAction, adminLogoutRequestAction, adminSignInRequestAction,
  adminSignInSuccessAction
} from "../../actions/admin/admin-auth.actions";
import {AdminService} from "../../../core/services/admin/admin.service";

@Injectable()
export class AdminAuthEffect{
  constructor(
    private actions$:Actions,
    private adminService:AdminService//:TODO: we'll continue using our auth service
    ){
  }
  adminAuthSignInRequestEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(adminSignInRequestAction), //TODO: Action who Excecuted this change
    mergeMap((action)=>this.adminService.adminSignIn(action.email,action.password)
      //TODO: return a user login confirmation

      .pipe(
        map(resp => ({
            type:AdminAuthActions.ADMIN_SIGNIN_SUCCESS_ACTION,
            admin:resp.data
          }
        )),
        catchError(()=>EMPTY)
      ))
  ))


  adminAuthSignInSuccessEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(adminSignInSuccessAction),
    mergeMap((action)=> of({
      type:AdminAuthActions.ADMIN_DATA_SUCCESS_ACTION,
      admin:action.admin
    })
    )
  ))

  adminAuthLoadRequestEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(adminLoadRequestAction), //TODO: Action who Excecuted this change
    mergeMap(()=>this.adminService.loadAdmin()//TODO: return a user from load and fetch confirmation
      .pipe(
        map(resp => {
          console.log("loading error state",resp.error)
          if(!resp.error)
            return {
              type:AdminAuthActions.ADMIN_LOAD_SUCCESS_ACTION,
              admin:resp.data
            }
          else
            return {
              type:AdminAuthActions.ADMIN_LOAD_ERROR_ACTION
            }
        }),
        catchError(()=>EMPTY)
      ))
  ))

  adminAuthLogoutRequestEffect$ = createEffect(()=>this.actions$.pipe(
    ofType(adminLogoutRequestAction),
    mergeMap(()=>this.adminService.adminLogout()
      .pipe(
        map(resp =>({
          type:AdminAuthActions.ADMIN_LOGOUT_SUCCESS_ACTION
        })),
        catchError(()=>EMPTY)
      ))
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
