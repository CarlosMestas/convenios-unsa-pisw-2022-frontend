import { ITypeConvocationResponse } from './../../../shared/interfaces/convocation.interface';
import { IHttpServiceResponse, IHttpResponse } from 'src/app/shared/interfaces/transactions/transaction-response.interface';
import { Observable, map, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { TypeConvocationHelper } from './type-convocation.helper';


@Injectable({
  providedIn:"root"
})
export class TypeConvocationService extends TypeConvocationHelper{

  constructor(
    protected override http:HttpClient
    ){
    super(http)
  }

  getAllTypeConvocations():Observable<IHttpServiceResponse<ITypeConvocationResponse[]>>{
    const response:IHttpServiceResponse<ITypeConvocationResponse[]> = {
      error:false,
      msg:'',
      data:[]
    }
    return this.http.get<IHttpResponse<ITypeConvocationResponse[]>>(this.url + TypeConvocationHelper.API_ROUTES.TYPE_CONVOCATION_GET_ALL)
    .pipe(
      map(resp=>{
        response.data=resp.data
        return response
      }),
      catchError(this.getAllConvocationTypesError)
    )
  }
}
