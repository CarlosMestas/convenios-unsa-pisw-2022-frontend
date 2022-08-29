import { ENUMDocumentType } from './../../../shared/enum/document-type.enum';
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DocumentHelper } from './document.helper';
import { IDocument } from 'src/app/shared/interfaces/documents-convocation/document.interface';


/**
 * Esta clase cubre la necesidad de obtener toda la información correspondiente a la entidad Convocation del modelo de base de datos
 */

@Injectable({
  providedIn:'root'
})
export class DocumentService extends DocumentHelper{


  constructor(protected override http:HttpClient){
    super(http)
  }
  /**
   * get one convocatoria by id from API
   * @param id convocatoria id number
  */
  getDocuments(id: number):Observable<
  {
    error:boolean,
    msg:string,
    data:IDocument[]
  }>{

    const response = {
      error:false,
      msg:'',
      data:{} as IDocument[]
    };
    return this.http.get<{
      code:number,
      msg:string,
      data:IDocument[]
    }>(this.url + DocumentHelper.API_DOCUMENT_SERVICE_ROUTES.GET_DOCUMENTS)
    .pipe(
      map( r =>{
        console.log("documents: ")
        console.log(r)
        response.data = r.data;
        return response;
      }),
      catchError(this.errorGetDocuments)
    );
  }
}
