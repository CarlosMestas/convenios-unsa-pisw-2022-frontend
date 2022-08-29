import { createAction, props } from "@ngrx/store"
import { IEventType } from "src/app/shared/interfaces/convocation/event-type.interface"
import { IRequirement } from "src/app/shared/interfaces/requirements/requirement.interface"

export const EventTypeActions = {
  EVENTTYPES_GET_REQUEST_ACTION:"[EventType - Effect] Convocation EventType get request",
  EVENTTYPES_GET_SUCCESS_ACTION:"[EventType - Effect] Convocation EventType get Success",
  EVENTTYPES_GET_ERROR_ACTION:"[EventType - Effect] Convocation EventType get Error",
  EVENTTYPES_GET_ALL_REQUEST_ACTION:"[New Convocation - Component] EventType get all request",
  EVENTTYPES_GET_ALL_SUCCESS_ACTION:"[New Convocation - Component] EventType get all success",
  EVENTTYPES_GET_ALL_ERROR_ACTION:"[New Convocation - Component] EventType get all error",
}

export const eventTypesGetRequestAction = createAction(
  EventTypeActions.EVENTTYPES_GET_REQUEST_ACTION,
  props<{convocationId:number}>()
)

export const eventTypesGetSuccessAction = createAction(
  EventTypeActions.EVENTTYPES_GET_SUCCESS_ACTION,
  props<{eventTypes:IEventType[]}>()
)
export const eventTypesGetErrorAction = createAction(
  EventTypeActions.EVENTTYPES_GET_ERROR_ACTION
)

export const eventTypesGetAllRequestAction = createAction(
  EventTypeActions.EVENTTYPES_GET_ALL_REQUEST_ACTION
)
export const eventTypesGetAllSuccessAction = createAction(
  EventTypeActions.EVENTTYPES_GET_ALL_SUCCESS_ACTION,
  props<{eventTypes:IEventType[]}>()
)
export const eventTypesGetAllErrorAction = createAction(
  EventTypeActions.EVENTTYPES_GET_ALL_ERROR_ACTION
)

