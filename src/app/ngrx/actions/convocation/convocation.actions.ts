import { IConvocationPIVEFetchTransactionResponse } from './../../../shared/interfaces/transactions/convocation-pive-fetch-transaction-response.interface';
import { IConvocation } from './../../../shared/interfaces/convocation.interface';
import { createAction, props } from '@ngrx/store';
import { IRequirement } from 'src/app/shared/interfaces/requirements/requirement.interface';
export const ConvocationActions = {
  CONVOCATION_FETCH_REQUEST_ACTION:"[Convocation - Component] Convocation Fetch Request",
  CONVOCATION_FETCH_SUCCESS_ACTION:"[Convocation - Service] Convocation Fetch Success ",
  CONVOCATION_FETCH_ERROR_ACTION:"[Convocation - Service] Convocation Fetch Error",
  CONVOCATION_PIVE_FETCH_REQUEST_ACTION:"[Convocation - Effect] Convocation PIVE Fetch Request",
  CONVOCATION_PIVE_FETCH_SUCCESS_ACTION:"[Convocation - Service] Convocation PIVE Fetch Request",
  CONVOCATION_PIVE_FETCH_ERROR_ACTION:"[Convocation - Effect] Convocation PIVE Fetch Request",
  CONVOCATION_REQUIREMENTS_FETCH_REQUEST_ACTION:"[Convocation - Effect] Convocation Requirements fetch request",
  CONVOCATION_REQUIREMENTS_FETCH_SUCCESS_ACTION:"[Convocation - Effect] Convocation Requirements fetch Success",
  CONVOCATION_REQUIREMENTS_FETCH_ERROR_ACTION:"[Convocation - Effect] Convocation Requirements fetch Error"
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
export const convocationPIVEFetchRequestAction = createAction(
  ConvocationActions.CONVOCATION_PIVE_FETCH_REQUEST_ACTION,
  props<{id:number}>()
)
export const convocationPIVEFetchSuccessAction = createAction(
  ConvocationActions.CONVOCATION_PIVE_FETCH_SUCCESS_ACTION,
  props<{convocationPIVE:IConvocationPIVEFetchTransactionResponse}>()
)
export const convocationPIVEFetchErrorAction = createAction(
  ConvocationActions.CONVOCATION_PIVE_FETCH_ERROR_ACTION
)

export const convocationRequirementFetchRequestAction = createAction(
  ConvocationActions.CONVOCATION_REQUIREMENTS_FETCH_REQUEST_ACTION,
  props<{convocationId:number}>()
)

export const convocationRequirementFetchSuccessAction = createAction(
  ConvocationActions.CONVOCATION_REQUIREMENTS_FETCH_SUCCESS_ACTION,
  props<{requirements:IRequirement[]}>()
)
export const convocationRequirementFetchErrorAction = createAction(
  ConvocationActions.CONVOCATION_REQUIREMENTS_FETCH_ERROR_ACTION
)
