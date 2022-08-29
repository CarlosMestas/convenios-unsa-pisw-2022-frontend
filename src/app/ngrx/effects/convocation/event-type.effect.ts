import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, EMPTY, map, mergeMap } from "rxjs"
import { EventTypeService } from "src/app/core/services/event-type/event-type.service"
import { convocationFetchSuccessAction } from "../../actions/convocation/convocation.actions"
import { EventTypeActions, eventTypesGetAllRequestAction } from "../../actions/convocation/event-type.actions"

@Injectable()
export class EventTypeEffect{
  constructor(
    private actions$:Actions,
    private eventTypeService: EventTypeService
  ){

  }

  convocationFetchSuccessToEventTypeEffect = createEffect(()=>this.actions$.pipe(
    ofType(convocationFetchSuccessAction),
    mergeMap((action)=>this.eventTypeService.getEventTypes(action.convocation.id)
    .pipe(
      map((resp)=>{
        return {
          type: EventTypeActions.EVENTTYPES_GET_SUCCESS_ACTION,
          eventTypes:resp.data
        }
      }),
      catchError(()=>EMPTY)
    ))
  ))

  eventTypesGetAllRequestEffect = createEffect(()=>this.actions$.pipe(
    ofType(eventTypesGetAllRequestAction),
    mergeMap(()=>this.eventTypeService.getAllEventTypes()
    .pipe(
      map(resp=>{
        return {
          type:EventTypeActions.EVENTTYPES_GET_ALL_SUCCESS_ACTION,
          eventTypes:resp.data
        }
      }),
      catchError(()=>EMPTY)
    ))
  ))

}
