import { convocationFetchRequestAction, convocationFetchSuccessAction, convocationFetchErrorAction } from './../../actions/convocation/convocation.actions';
import { createReducer, on } from '@ngrx/store';
import { ConvocationInitialState } from '../../initial-states/convocation/convocation.initial-state';


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
  })
)
