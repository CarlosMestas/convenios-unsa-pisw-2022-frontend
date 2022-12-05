import { IHttpServiceResponse, IHttpResponse } from 'src/app/shared/interfaces/transactions/transaction-response.interface';
import { IModalityConvocationResponse } from './../../../shared/interfaces/convocation.interface';

import { Observable, map, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ModalityConvocationHelper } from './modality-convocation.helper';


@Injectable({
  providedIn:"root"
})
export class ModalityConvocationService extends ModalityConvocationHelper{

  constructor(
    protected override http:HttpClient
    ){
    super(http)
  }

  getAllModalityConvocations():Observable<IHttpServiceResponse<IModalityConvocationResponse[]>>{
    const response:IHttpServiceResponse<IModalityConvocationResponse[]> = {
      error:false,
      msg:'',
      data:[]
    }
    return this.http.get<IHttpResponse<IModalityConvocationResponse[]>>(this.url + ModalityConvocationHelper.API_ROUTES.MODALITY_CONVOCATION_GET_ALL)
    .pipe(
      map(resp=>{
        response.data=resp.data
        return response
      }),
      catchError(this.getAllConvocationModalitiesError)
    )
  }
}
