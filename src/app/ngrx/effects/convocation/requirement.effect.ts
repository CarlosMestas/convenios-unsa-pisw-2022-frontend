import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, EMPTY, map, mergeMap } from "rxjs"
import { RequirementService } from "src/app/core/services/requirement/requirement.service"
import { ConvocationActions, convocationFetchSuccessAction } from "../../actions/convocation/convocation.actions"

@Injectable()
export class RequirementEffect{
  constructor(
    private actions$:Actions,
    private requirementService: RequirementService
  ){

  }

  convocationFetchSuccessToRequirementEffect = createEffect(()=>this.actions$.pipe(
    ofType(convocationFetchSuccessAction),
    mergeMap((action)=>this.requirementService.getRequirements(action.convocation.id)
    .pipe(
      map((resp)=>{
        return {
          type: ConvocationActions.CONVOCATION_REQUIREMENTS_FETCH_SUCCESS_ACTION,
          requirements:resp.data
        }
      }),
      catchError(()=>EMPTY)
    ))
  ))

}
