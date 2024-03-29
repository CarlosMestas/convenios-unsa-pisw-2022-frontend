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

    let params:HttpParams = new HttpParams()
    params=params.set("id_convocation",idConvocation)
    params=params.set("id_user",idUser)
    return this.http.get<IHttpResponse<IPostulationCoevanResponseDetail>>(this.url + PostulationHelper.API_ROUTES.GET_POSTULATION_CONVOCATION_USER, {params})
    .pipe(
      map( r =>{
        if(r.code!=200){
          response.error = true;
        }else{
          response.data = r.data;
        }

        return response;
      }),
      catchError(this.error)
    );
  }

  postPostulationCoevan(formData:FormData):Observable<
  IHttpServiceResponse<IPostulationCoevanResponseDetail[]>>{

    const response = {
      error:false,
      msg:'',
      data:[]
    };

    return this.http.post<IHttpResponse<[]>>(this.url + PostulationHelper.API_ROUTES.POST_POSTULATION,formData)
    .pipe(
      map( r =>{
        response.data = r.data
        return response;
      }),
      catchError(this.errorPost)
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

    let params:HttpParams = new HttpParams()
    params = params.set("id",id)
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

