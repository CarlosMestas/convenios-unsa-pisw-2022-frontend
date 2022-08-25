import {
  adminDataSuccessAction, adminLoadErrorAction, adminLoadRequestAction, adminLoadSuccessAction,
  adminLogoutSuccessAction,
  adminSignInErrorAction, adminSignInRequestAction, adminSignInSuccessAction
} from '../../actions/admin/admin-auth.actions';
import { AdminAuthInitialState } from '../../initial-states/admin/admin-auth.initial_state';
import { createReducer, on } from "@ngrx/store";
import {
  userLoadErrorAction,
  userLoadRequestAction,
  userLoadSuccessAction,
  userLogoutRequestAction
} from "../../actions/auth/user-auth.actions";

export const adminAuthReducer = createReducer(
  AdminAuthInitialState,
  on(userLogoutRequestAction,(state)=>{
    return {...state, working:true}
  }),
  on(adminLogoutSuccessAction,(state)=>{
    return{...state, working:false,admin:null}
  }),
  on(adminSignInRequestAction,(state,params)=>{
    return{...state, working:true,email:params.email,password:params.password}
  }),
  on(adminSignInSuccessAction,(state,params)=>{
    return{...state, working:false, admin:params.admin}
  }),
  on(adminSignInErrorAction,(state)=>{
    return{...state, working:false}
  }),
  on(adminLoadRequestAction,(state) =>{
    return{...state,working:true}
  }),
  on(adminLoadSuccessAction,(state,params)=>{
    return{...state,admin:params.admin,working:false}
  }),
  on(adminLoadErrorAction,(state)=>{
    return {...state,admin:null, working:false}
  }),
  on(adminDataSuccessAction,(state,params)=>{
    return {...state, working:false, admin:params.admin}
  }),



)
