import { IConvocationPIVEFetchTransactionResponse } from './../../../shared/interfaces/transactions/convocation-pive-fetch-transaction-response.interface';
import { IConvocation } from './../../../shared/interfaces/convocation.interface';
import { createAction, props } from '@ngrx/store';
import { IRequirement } from 'src/app/shared/interfaces/requirements/requirement.interface';
import { IRequestSaveConvocationDetailPIVE } from 'src/app/shared/interfaces/convocation/request-transactions.interface';
export const ConvocationActions = {
  CONVOCATION_FETCH_REQUEST_ACTION:"[Convocation - Component] Convocation Fetch Request",
  CONVOCATION_FETCH_SUCCESS_ACTION:"[Convocation - Service] Convocation Fetch Success ",
  CONVOCATION_FETCH_ERROR_ACTION:"[Convocation - Service] Convocation Fetch Error",
  CONVOCATION_PIVE_FETCH_REQUEST_ACTION:"[Convocation - Effect] Convocation PIVE Fetch Request",
  CONVOCATION_PIVE_FETCH_SUCCESS_ACTION:"[Convocation - Service] Convocation PIVE Fetch Request",
  CONVOCATION_PIVE_FETCH_ERROR_ACTION:"[Convocation - Effect] Convocation PIVE Fetch Request",
  CONVOCATION_PIVE_POST_REQUEST_ACTION:"[new Convocation detail - Component] Convocation pive post request",
  CONVOCATION_PIVE_POST_SUCCESS_ACTION:"[new Convocation detail - SERVICE] Convocation pive post success",
  CONVOCATION_PIVE_POST_ERROR_ACTION:"[new Convocation detail - SERVICE] Convocation pive post error"
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
export const convocationPIVEPostRequestAction = createAction(
  ConvocationActions.CONVOCATION_PIVE_POST_REQUEST_ACTION,
  props<IRequestSaveConvocationDetailPIVE>()
)
export const convocationPIVEPostSuccessAction = createAction(
  ConvocationActions.CONVOCATION_PIVE_POST_SUCCESS_ACTION
)
export const convocationPIVEPostERrrorAction = createAction(
  ConvocationActions.CONVOCATION_PIVE_POST_ERROR_ACTION
)

