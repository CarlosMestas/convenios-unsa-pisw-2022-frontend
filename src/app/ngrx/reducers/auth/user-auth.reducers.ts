import { userLoadErrorAction, userLoadRequestAction, userLoadSuccessAction, userLogoutRequestAction, userLogoutSuccessAction, userSignInErrorAction, userSignInRequestAction, userSignInSuccessAction } from './../../actions/auth/user-auth.actions';
import { userRegisterSuccessAction } from '../../actions/auth/user-auth.actions';
import { UserAuthInitialState } from '../../initial-states/auth/user-auth.initial_state';
import { userRegisterRequestAction } from 'src/app/ngrx/actions/auth/user-auth.actions';
import { createReducer, on } from "@ngrx/store";

export const userAuthReducer = createReducer(
  UserAuthInitialState,
  on(userRegisterSuccessAction,(state,params) =>{
    return {...state,user:params.user,working:false}
  }),
  on(userRegisterRequestAction,(state, params) =>{
    return {...state,working:true,email:params.email}
  }),
  on(userLoadRequestAction,(state) =>{
    return{...state,working:true}
  }),
  on(userLoadSuccessAction,(state,params)=>{
    return{...state,user:params.user,working:false}
  }),
  on(userLoadErrorAction,(state)=>{
    return {...state,user:null, working:false}
  }),
  on(userLogoutRequestAction,(state)=>{
    return {...state, working:true}
  }),
  on(userLogoutSuccessAction,(state)=>{
    return{...state, working:false,user:null}
  }),
  on(userSignInRequestAction,(state,params)=>{
    return{...state, working:true,email:params.email}
  }),
  on(userSignInSuccessAction,(state,params)=>{
    return{...state, working:false, user:params.user}
  }),
  on(userSignInErrorAction,(state)=>{
    return{...state, working:false}
  })

)
