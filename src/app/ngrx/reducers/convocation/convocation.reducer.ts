import { convocationFetchRequestAction, convocationFetchSuccessAction, convocationFetchErrorAction, convocationPIVEFetchRequestAction, convocationPIVEFetchSuccessAction, convocationRequirementFetchRequestAction, convocationRequirementFetchSuccessAction, convocationRequirementFetchErrorAction } from './../../actions/convocation/convocation.actions';
import { createReducer, on } from '@ngrx/store';
import { ConvocationInitialState } from '../../initial-states/convocation/convocation.initial-state';
import { documentsGetErrorAction, documentsGetRequestAction, documentsGetSuccessAction } from '../../actions/convocation/document.actions';


export const convocationReducer = createReducer(
  ConvocationInitialState,
  on(convocationFetchRequestAction,(state)=>{
    return {...state,working:true}
  }),
  on(convocationFetchSuccessAction,(state,params)=>{
    return {...state,working:false, convocation:params.convocation}
  }),
  on(convocationFetchErrorAction,(state)=>{
    return{...state,working:false}
  }),
  on(convocationPIVEFetchRequestAction,(state)=>{
    return {...state,working:true}
  }),
  on(convocationPIVEFetchSuccessAction,(state,params)=>{
    return {
      ...state,working:false,
      convocationDetail:params.convocationPIVE.detail
    }
  }),
  on(convocationRequirementFetchRequestAction,(state)=>{
    return {...state,working:true}
  }),
  on(convocationRequirementFetchSuccessAction,(state,params)=>{
    return {...state,working:false, requirements:params.requirements}
  }),
  on(convocationRequirementFetchErrorAction,(state)=>{
    return{...state,working:false}
  }),
  on(documentsGetRequestAction,(state)=>{
    return {...state,working:true}
  }),
  on(documentsGetSuccessAction,(state,params)=>{
    return {...state,working:false, documents:params.documents}
  }),
  on(documentsGetErrorAction,(state)=>{
    return{...state,working:false}
  }),
)
