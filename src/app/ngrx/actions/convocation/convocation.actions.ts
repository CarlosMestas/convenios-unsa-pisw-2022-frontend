import { IConvocation } from './../../../shared/interfaces/convocation.interface';
import { createAction, props } from '@ngrx/store';
export const ConvocationActions = {
  CONVOCATION_FETCH_REQUEST_ACTION:"[Convocation - Component] Convocation Fetch Request",
  CONVOCATION_FETCH_SUCCESS_ACTION:"[Convocation - Service] Convocation Fetch Success ",
  CONVOCATION_FETCH_ERROR_ACTION:"[Convocation - Service] Convocation Fetch Error"

}

export const convocationFetchRequestAction = createAction(
  ConvocationActions.CONVOCATION_FETCH_REQUEST_ACTION,
  props<{id:number}>()
)
export const convocationFetchSuccessAction = createAction(
  ConvocationActions.CONVOCATION_FETCH_SUCCESS_ACTION,
  props<{convocation:IConvocation}>()
)
export const convocationFetchErrorAction = createAction(
  ConvocationActions.CONVOCATION_FETCH_ERROR_ACTION
)
