import { IAppState } from 'src/app/ngrx/app.state';
import { createSelector } from '@ngrx/store';
import { IRequirement } from 'src/app/shared/interfaces/requirements/requirement.interface';
import { Requirement } from 'src/app/shared/models/requirement.model';
import { EventType } from 'src/app/shared/models/TypeEvent.model';
import { IEventType } from 'src/app/shared/interfaces/convocation/event-type.interface';


export const eventTypesStateSelector = (state:IAppState) =>  state.convocation.eventTypes

export const convocationEventTypesStateSelector = createSelector(
  eventTypesStateSelector,
  (eventTypesState:IEventType[])=> eventTypesState

)
export const eventTypesListableStateSelector = createSelector(
  eventTypesStateSelector,
  (eventTypesState:IEventType[])=> EventType.getListableFormat(eventTypesState)
)
