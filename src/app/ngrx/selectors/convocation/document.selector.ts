import { IAppState } from 'src/app/ngrx/app.state';
import { createSelector } from '@ngrx/store';
import { IDocument } from 'src/app/shared/interfaces/documents-convocation/document.interface';
import { ENUMDocumentType } from 'src/app/shared/enum/document-type.enum';


export const documentsStateSelector = (state:IAppState) =>  state.convocation.documents

export const convocationDocumentsStateSelector = createSelector(
  documentsStateSelector,
  (documentsState:IDocument[])=> documentsState.filter((document)=>{
      return document.type === ENUMDocumentType.ConvocationDocument
    })

)
export const convocationDocumentBannerStateSelector = createSelector(
  documentsStateSelector,
  (documentsState:IDocument[])=>"https://convenios-unsa-pisw-2022-0.herokuapp.com/storage/"+documentsState.filter((document)=>{
      return document.type === ENUMDocumentType.ConvocationBanner
    })[0].path
)
