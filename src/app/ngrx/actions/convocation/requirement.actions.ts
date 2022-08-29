import { createAction, props } from "@ngrx/store"
import { IRequirement } from "src/app/shared/interfaces/requirements/requirement.interface"

export const RequirementActions = {
  REQUIREMENTS_FETCH_REQUEST_ACTION:"[Convocation - Effect] Convocation Requirements fetch request",
  REQUIREMENTS_FETCH_SUCCESS_ACTION:"[Convocation - Effect] Convocation Requirements fetch Success",
  REQUIREMENTS_FETCH_ERROR_ACTION:"[Convocation - Effect] Convocation Requirements fetch Error",
  REQUIREMENTS_GET_ALL_REQUEST_ACTION:"[New Convocation - Component] Requirements fetch all request",
  REQUIREMENTS_GET_ALL_SUCCESS_ACTION:"[New Convocation - Component] Requirements fetch all success",
  REQUIREMENTS_GET_ALL_ERROR_ACTION:"[New Convocation - Component] Requirements fetch all error",
  REQUIREMENT_POST_REQUEST_ACTION:"[Requirement - Component] Requirements post request",
  REQUIREMENT_POST_SUCCESS_ACTION:"[Requirement - Service] Requirements post success",
  REQUIREMENT_POST_ERROR_ACTION:"[Requirement - Service] Requirements post error"
}

export const requirementFetchRequestAction = createAction(
  RequirementActions.REQUIREMENTS_FETCH_REQUEST_ACTION,
  props<{convocationId:number}>()
)

export const requirementFetchSuccessAction = createAction(
  RequirementActions.REQUIREMENTS_FETCH_SUCCESS_ACTION,
  props<{requirements:IRequirement[]}>()
)
export const requirementFetchErrorAction = createAction(
  RequirementActions.REQUIREMENTS_FETCH_ERROR_ACTION
)

export const requirementsGetAllRequestAction = createAction(
  RequirementActions.REQUIREMENTS_GET_ALL_REQUEST_ACTION
)
export const requirementsGetAllSuccessAction = createAction(
  RequirementActions.REQUIREMENTS_GET_ALL_SUCCESS_ACTION,
  props<{requirements:IRequirement[]}>()
)
export const requirementsGetAllErrorAction = createAction(
  RequirementActions.REQUIREMENTS_GET_ALL_ERROR_ACTION
)

export const requirementPostRequestAction = createAction(
  RequirementActions.REQUIREMENT_POST_REQUEST_ACTION,
  props<IRequirement>()
)

export const requirementPostSuccessAction = createAction(
  RequirementActions.REQUIREMENT_POST_SUCCESS_ACTION,
  props<IRequirement>()
)
export const requirementPostErrorAction = createAction(
  RequirementActions.REQUIREMENT_POST_ERROR_ACTION
)
