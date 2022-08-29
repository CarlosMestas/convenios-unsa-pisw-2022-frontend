import { convocationFetchRequestAction, ConvocationActions, convocationFetchSuccessAction, convocationPIVEPostRequestAction } from './../../actions/convocation/convocation.actions';
import { mergeMap, map, catchError, EMPTY } from 'rxjs';
import { ConvocationService } from './../../../core/services/convocation/convocation.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DocumentActions } from '../../actions/convocation/document.actions';


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
    mergeMap((action)=> this.convocationService.getConvocationDetailPIVE(action.convocation.id)
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

  convocationPIVEPostRequestEffect = createEffect(()=>this.actions$.pipe(
    ofType(convocationPIVEPostRequestAction),
    mergeMap((action)=>this.convocationService.postConvocationDetailPIVE(action)
    .pipe(
      map(resp=>{
        return {
          type:ConvocationActions.CONVOCATION_PIVE_POST_SUCCESS_ACTION
        }
      }),
      catchError(()=>EMPTY)
    ))
  ))
}
