import { convocationFetchRequestAction, convocationFetchSuccessAction, convocationFetchErrorAction, convocationPIVEFetchRequestAction, convocationPIVEFetchSuccessAction} from './../../actions/convocation/convocation.actions';
import { createReducer, on } from '@ngrx/store';
import { ConvocationInitialState } from '../../initial-states/convocation/convocation.initial-state';
import { documentsGetErrorAction, documentsGetRequestAction, documentsGetSuccessAction } from '../../actions/convocation/document.actions';
import { requirementFetchErrorAction, requirementFetchRequestAction, requirementFetchSuccessAction, requirementPostErrorAction, requirementPostRequestAction, requirementPostSuccessAction, requirementsGetAllErrorAction, requirementsGetAllRequestAction, requirementsGetAllSuccessAction } from '../../actions/convocation/requirement.actions';
import { eventTypesGetAllErrorAction, eventTypesGetAllRequestAction, eventTypesGetAllSuccessAction, eventTypesGetErrorAction, eventTypesGetRequestAction, eventTypesGetSuccessAction } from '../../actions/convocation/event-type.actions';


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
  on(requirementFetchRequestAction,(state)=>{
    return {...state,working:true}
  }),
  on(requirementFetchSuccessAction,(state,params)=>{
    return {...state,working:false, requirements:params.requirements}
  }),
  on(requirementFetchErrorAction,(state)=>{
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
  on(requirementsGetAllRequestAction,(state)=>{
    return {...state,working:true}
  }),
  on(requirementsGetAllSuccessAction,(state,params)=>{
    return {...state, requirements:params.requirements}
  }),
  on(requirementsGetAllErrorAction,(state)=>{
    return {...state,working:false}
  }),
  on(requirementPostRequestAction,(state)=>{
    return {...state, working:true}
  }),
  on(requirementPostSuccessAction,(state)=>{
    return {...state, working:false}
  }),
  on(requirementPostErrorAction,(state)=>{
    return {...state, working:false}
  }),
  on(eventTypesGetAllRequestAction,(state)=>{
    return {...state,working:true}
  }),
  on(eventTypesGetAllSuccessAction,(state,params)=>{
    return {...state,eventTypes:params.eventTypes,working:false}
  }),
  on(eventTypesGetAllErrorAction,(state)=>{
    return {...state,working:false}
  }),
  on(eventTypesGetRequestAction,(state)=>{
    return {...state,working:true}
  }),
  on(eventTypesGetSuccessAction,(state,params)=>{
    return {...state,eventTypes:params.eventTypes,working:false}
  }),
  on(eventTypesGetErrorAction,(state)=>{
    return {...state,working:false}
  })
)
