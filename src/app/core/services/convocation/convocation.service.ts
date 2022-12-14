import { IConvocationCoevanResponseDetail } from './../../../shared/interfaces/convocation-coevan.interface';
import { IConvocationResponse, IConvocationResponseDetail } from './../../../shared/interfaces/convocation.interface';
import { IHttpServiceResponse, IHttpResponse } from 'src/app/shared/interfaces/transactions/transaction-response.interface';
import { IConvocationPIVEFetchTransactionResponse } from './../../../shared/interfaces/transactions/convocation-pive-fetch-transaction-response.interface';

import { ConvocationHelper } from './convocation.helper';

import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from 'rxjs';
import { IConvocation } from 'src/app/shared/interfaces/convocation.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IRequestSaveConvocationDetailPIVE } from 'src/app/shared/interfaces/convocation/request-transactions.interface';
import {
  ConvocationFetchTransactionResponse
} from "../../../shared/interfaces/transactions/convocation-fetch-transaction-response.interface";

/**
 * Esta clase cubre la necesidad de obtener toda la información correspondiente a la entidad Convocation del modelo de base de datos
 */

@Injectable({
  providedIn:'root'
})
export class ConvocationService extends ConvocationHelper{


  constructor(protected override http:HttpClient){
    super(http)
  }

  /**
   *
   * @returns Return all convocation by date in order to get all convocations which have current date greater than start convocation date and less that end convocation date and are also available
   */
  getAllConvocationsByDate(date:number):Observable<IHttpServiceResponse<IConvocationResponse[]>>{

    const response:IHttpServiceResponse<IConvocationResponse[]> = {
      error:false,
      msg:'',
      data:{} as IConvocationResponse[]
    };

    let params = new HttpParams();
    params = params.append("date",date)
    return this.http.get<IHttpResponse<IConvocationResponse[]>>(this.url + ConvocationHelper.API_CONV_SERVICE_ROUTES.ALL_CONVOCATIONS,{params})
    .pipe(
      map( resp =>{
        response.data=resp.data
        return response
      }),
      catchError(this.errorGetConvocations)
    );
  }

  /**
   * get all convocations created from API
   */
  getAllConvocations():Observable<IHttpServiceResponse<IConvocationResponse[]>>{

    const response:IHttpServiceResponse<IConvocationResponse[]> = {
      error:false,
      msg:'',
      data:{} as IConvocationResponse[]
    };
    return this.http.get<IHttpResponse<IConvocationResponse[]>>(this.url + ConvocationHelper.API_CONV_SERVICE_ROUTES.ALL_CONVOCATIONS )
    .pipe(
      map( resp =>{
        response.data=resp.data
        return response
      }),
      catchError(this.errorGetConvocations)
    );
  }
  /**
   * get one convocatoria by id from API
   * @param id convocatoria id number
  */
  getConvocation(id: number):Observable<IHttpServiceResponse<IConvocationResponseDetail>>{

    const response = {
      error:false,
      msg:'',
      data:{} as IConvocationResponseDetail
    };

    let params = new HttpParams()
    params=params.append("id",id)
    return this.http.get<IHttpResponse<IConvocationResponseDetail>>(this.url + ConvocationHelper.API_CONV_SERVICE_ROUTES.GET_CONVOCATION,{params})
    .pipe(
      map( resp =>{
        response.data = resp.data;
        return response;
      }),
      catchError(this.error)
    );
  }

  getConvocationCoevanDetail(id:number):Observable<IHttpServiceResponse<IConvocationCoevanResponseDetail>>{
    const response = {
      error:false,
      msg:'',
      data:{} as IConvocationCoevanResponseDetail
    };
    let params = new HttpParams()
    params=params.append("id",id)
    return this.http.get<IHttpResponse<IConvocationCoevanResponseDetail>>(this.url + ConvocationHelper.API_CONV_SERVICE_ROUTES.GET_CONVOCATION_COEVAN,{params})
    .pipe(
      map( resp =>{
        response.data = resp.data;
        return response;
      }),
      catchError(this.errorCoevan)
    );
  }

  getConvocationDetailPIVE(id:number):Observable<
  {
    error:boolean,
    msg:string,
    data:IConvocationPIVEFetchTransactionResponse
  }>{
    const response = {
      error:false,
      msg:'',
      data:{} as IConvocationPIVEFetchTransactionResponse
    };
    const testData:IConvocationPIVEFetchTransactionResponse = {
      detail:{
        id:1,
        id_convocation:1,
        events:[
          {
            id:1,
            name:"Conferencia"
          },
          {
            id:2,
            name:"Simposium"
          },
          {
            id:3,
            name:"Congreso"
          }
        ]
      }
    }

    response.data = testData;
    return of(response);
  }


}

