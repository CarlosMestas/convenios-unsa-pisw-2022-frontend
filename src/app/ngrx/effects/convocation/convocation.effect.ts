import { convocationFetchRequestAction, ConvocationActions, convocationFetchSuccessAction } from './../../actions/convocation/convocation.actions';
import { mergeMap, map, catchError, EMPTY } from 'rxjs';
import { ConvocationService } from './../../../core/services/convocation/convocation.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";


@Injectable()
export class ConvocationEffect{
  constructor(
    private actions$:Actions,
    private convocationService: ConvocationService
  ){

  }

  convocationFetchRequestEffect = createEffect(()=>this.actions$.pipe(
    ofType(convocationFetchRequestAction),
    mergeMap((action)=>this.convocationService.getConvocation(action.id)
    .pipe(
      map((resp)=>{
        return {
          type:ConvocationActions.CONVOCATION_FETCH_SUCCESS_ACTION,
          convocation:resp.data
        }
      }),
      catchError(()=>EMPTY)
    )
    )
  ))

  convocationFetchSuccessToDetailEffect = createEffect(()=>this.actions$.pipe(
    ofType(convocationFetchSuccessAction),
    mergeMap((action)=> this.convocationService.getConvocationDetailPIVE(action.convocation.id_detail)
    .pipe(
      map((resp)=>{
        return{
          type:ConvocationActions.CONVOCATION_PIVE_FETCH_SUCCESS_ACTION,
          convocationPIVE:resp.data
        }
      }),
      catchError(()=>EMPTY)
    )
    )
  ))

  convocationFetchSuccessToRequirementEffect = createEffect(()=>this.actions$.pipe(
    ofType(convocationFetchSuccessAction),
    mergeMap((action)=>this.convocationService.getRequirements(action.convocation.id)
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

  convocationFetchSuccessToDocumentEffect = createEffect(()=>this.actions$.pipe(
    ofType(convocationFetchSuccessAction),
    mergeMap((action)=>this.convocationService.getRequirements(action.convocation.id)
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
