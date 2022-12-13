import { IHttpResponse } from '../../../shared/interfaces/transactions/transaction-response.interface';
import { IHttpServiceResponse } from 'src/app/shared/interfaces/transactions/transaction-response.interface';
import { AppRoutingModule } from '../../../modules/app/app.routes';

import { PostulationHelper } from './postulation.helper';

import { Injectable } from "@angular/core";
import { catchError, map, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPostulationCoevanResponseDetail } from 'src/app/shared/interfaces/postulation-coevan.interface';


@Injectable({
  providedIn:'root'
})
export class PostulationService extends PostulationHelper{


  constructor(protected override http:HttpClient){
    super(http)
  }

  /**
   *
   * @param idConvocation id de la convocatoria
   * @param idUser id del usuario
   * @returns
   */

  getPostulationByConvocationUser(idConvocation: number,idUser:number):Observable<
  IHttpServiceResponse<IPostulationCoevanResponseDetail>>{

    const response = {
      error:false,
      msg:'',
      data:{} as IPostulationCoevanResponseDetail
    };

    const params:HttpParams = new HttpParams()
    params.set("id_convocation",idConvocation)
    params.set("id_user",idUser)
    return this.http.get<IHttpResponse<IPostulationCoevanResponseDetail>>(this.url + PostulationHelper.API_ROUTES.GET_POSTULATION, {params})
    .pipe(
      map( r =>{
        response.data = r.data;
        return response;
      }),
      catchError(this.error)
    );
  }

  /**
   *
   * @param id Id de la postulación
   * @returns
   */
  getPostulationById(id:number):Observable<
  IHttpServiceResponse<IPostulationCoevanResponseDetail>>{

    const response = {
      error:false,
      msg:'',
      data:{} as IPostulationCoevanResponseDetail
    };

    const params:HttpParams = new HttpParams()
    params.set("id",id)
    return this.http.get<IHttpResponse<IPostulationCoevanResponseDetail>>(this.url + PostulationHelper.API_ROUTES.GET_POSTULATION, {params})
    .pipe(
      map( r =>{
        response.data = r.data;
        return response;
      }),
      catchError(this.error)
    );
  }

}

