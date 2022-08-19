import {
  adminDataSuccessAction,
  adminLoadErrorAction,
  adminLoadSuccessAction, adminLogoutSuccessAction,
  adminRegisterSuccessAction, adminSignInErrorAction, adminSignInSuccessAction
} from '../../actions/admin/admin-auth.actions';
import { AdminAuthInitialState } from '../../initial-states/admin/admin-auth.initial_state';
import { createReducer, on } from "@ngrx/store";

export const adminAuthReducer = createReducer(
  AdminAuthInitialState,
  on(adminRegisterSuccessAction,(state,params) =>{
    return {...state,admin:params.admin,working:false}
  }),
  on(adminLoadSuccessAction,(state,params)=>{
    return{...state,admin:params.admin,working:false}
  }),
  on(adminLoadErrorAction,(state)=>{
    return {...state,admin:null, working:false}
  }),
  on(adminLogoutSuccessAction,(state)=>{
    return{...state, working:false,admin:null}
  }),
  on(adminSignInSuccessAction,(state,params)=>{
    return{...state, working:false, admin:params.admin}
  }),
  on(adminSignInErrorAction,(state)=>{
    return{...state, working:false}
  }),
  on(adminDataSuccessAction,(state,params)=>{
    return {...state, working:false, admin:params.admin}
  }),



)
