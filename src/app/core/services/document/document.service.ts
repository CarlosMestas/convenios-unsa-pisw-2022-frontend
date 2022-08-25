import { ENUMDocumentType } from './../../../shared/enum/document-type.enum';
import { IConvocationPIVEFetchTransactionResponse } from './../../../shared/interfaces/transactions/convocation-pive-fetch-transaction-response.interface';
import { AppRoutingModule } from '../../../modules/app/app.routes';

import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from 'rxjs';
import { IConvocation } from 'src/app/shared/interfaces/convocation.interface';
import { HttpClient } from '@angular/common/http';
import { ENUMConvocationType } from 'src/app/shared/enum/convocation-type.enum';
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
    const testData:IDocument[] =
    [
      {
        id:1,
        path:"awd/awdawd/aawdwa",
        description:"Documento de Oficio de aprobación de amplicación de fecha de finalización del evento",
        type:{
          id:1,
          description:ENUMDocumentType.ConvocationDocument
        }
      },
      {
        id:2,
        path:"awd/awdawd/aawdwa",
        description:"Documento de Reglamento el cual debe ser llenado y cargado en el formulario de postulación",
        type:{
          id:1,
          description:ENUMDocumentType.ConvocationDocument
        }
      },
      {
        id:3,
        path:"https://www.unsa.edu.pe/wp-content/uploads/2022/05/PIVE-2022-2da.-1_001-878x426.png",
        description:"Banner de convocatoria",
        type:{
          id:2,
          description:ENUMDocumentType.ConvocationBanner
        }
      }
    ]
    response.data = testData;
    console.log("convocation---data--test: ", response.data)
    return of(response);
    /*console.log(this.url + AppRoutingModule.ROUTES_VALUES.ROUTE_APP_CONVOCATORIA + '?convocatoriaId=' + id)
    return this.http.get<IConvocation>(this.url + AppRoutingModule.ROUTES_VALUES.ROUTE_APP_CONVOCATORIA + '?convocatoriaId=' + id)
    .pipe(
      map( r =>{

        const testData:IConvocation = {
          id:1,
          title:"ALUMNO AGUSTINO, PARTICIPA EN EL PROGRAMA DE INTERNACIONALIZACIÓN VIRTUAL PIVE 2022 – 2DA. CONVOCATORIA",
          correlative:"PIVE-2022",
          type:1,
          description: "Esta convocatoria está ",
          start_date:'15/10/2022 10:30',
          end_date:'15/10/2022 10:30',
          id_detail:1
        }
        response.data = testData;
        return response;
      }),
      catchError(this.error)
    );*/
  }

}
