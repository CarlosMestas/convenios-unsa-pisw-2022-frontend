import { of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IDocument } from 'src/app/shared/interfaces/documents-convocation/document.interface';

export class DocumentHelper{

  protected static API_DOCUMENT_SERVICE_ROUTES = {
    GET_DOCUMENTS:"convocation-documents",
    GET_ALL_DOCUMENTS:"documents",
  }

  public url = environment.url
  public isProduction = environment.production

  constructor(
    protected http:HttpClient
  ){

  }

  errorGetDocument(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: {} as IDocument
    })
  }
  errorGetDocuments(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: []
    })
  }
}
