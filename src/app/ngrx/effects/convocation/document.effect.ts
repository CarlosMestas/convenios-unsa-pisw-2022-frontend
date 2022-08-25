import { convocationFetchRequestAction, ConvocationActions, convocationFetchSuccessAction } from './../../actions/convocation/convocation.actions';
import { mergeMap, map, catchError, EMPTY } from 'rxjs';
import { ConvocationService } from './../../../core/services/convocation/convocation.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DocumentService } from 'src/app/core/services/document/document.service';
import { DocumentActions } from '../../actions/convocation/document.actions';


@Injectable()
export class DocumentEffect{
  constructor(
    private actions$:Actions,
    private documentService: DocumentService
  ){

  }
  convocationFetchSuccessToDocumentEffect = createEffect(()=>this.actions$.pipe(
    ofType(convocationFetchSuccessAction),
    mergeMap((action)=>this.documentService.getDocuments(action.convocation.id)
    .pipe(
      map((resp)=>{
        return {
          type: DocumentActions.DOCUMENTS_GET_SUCCESS_ACTION,
          documents:resp.data
        }
      }),
      catchError(()=>EMPTY)
    ))
  ))
}
