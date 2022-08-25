import { createAction, props } from '@ngrx/store';
import { IDocument } from 'src/app/shared/interfaces/documents-convocation/document.interface';
export const DocumentActions = {
  DOCUMENTS_GET_REQUEST_ACTION:"[Document - Component] Document Get Request",
  DOCUMENTS_GET_SUCCESS_ACTION:"[Document - Service] Document Get Success ",
  DOCUMENTS_GET_ERROR_ACTION:"[Document - Service] Document Get Error",
 }

export const documentsGetRequestAction = createAction(
  DocumentActions.DOCUMENTS_GET_REQUEST_ACTION,
  props<{id:number}>()
)
export const documentsGetSuccessAction = createAction(
  DocumentActions.DOCUMENTS_GET_SUCCESS_ACTION,
  props<{documents:IDocument[]}>()
)
export const documentsGetErrorAction = createAction(
  DocumentActions.DOCUMENTS_GET_ERROR_ACTION
)
