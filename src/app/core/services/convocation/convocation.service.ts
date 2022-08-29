import { IConvocationPIVEFetchTransactionResponse } from './../../../shared/interfaces/transactions/convocation-pive-fetch-transaction-response.interface';

import { ConvocationHelper } from './convocation.helper';

import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from 'rxjs';
import { IConvocation } from 'src/app/shared/interfaces/convocation.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ENUMConvocationType } from 'src/app/shared/enum/convocation-type.enum';
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
   * get all convocations created from API
   */
  getAllConvocations():Observable<
    {
      error:boolean,
      msg:string,
      data:IConvocation[]
    }>{

    const response = {
      error:false,
      msg:'',
      data:{} as IConvocation[]
    };
    return this.http.get<{
      code:number,
      msg:string,
      data:IConvocation[]
    }>(this.url + ConvocationHelper.API_CONV_SERVICE_ROUTES.ALL_CONVOCATIONS )
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
  getConvocation(id: number):Observable<
  {
    error:boolean,
    msg:string,
    data:IConvocation
  }>{

    const response = {
      error:false,
      msg:'',
      data:{} as IConvocation
    };

    let params = new HttpParams()
    params=params.append("id",id)
    return this.http.get<{
      code:number,
      msg:string,
      data:IConvocation
    }
    >(this.url + ConvocationHelper.API_CONV_SERVICE_ROUTES.GET_CONVOCATION,{params:params})
    .pipe(
      map( resp =>{

        console.log("convocation:",resp)
        response.data = resp.data;
        return response;
      }),
      catchError(this.error)
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
    console.log("convocation---data--test: ", response.data)
    return of(response);
  }

  registerConvocation(newConv: FormData): Observable<
    {
      error:boolean,
      msg:string,
      data: IConvocation
    }> {
    const response = {
      error:false,
      msg:'',
      data: {} as IConvocation
    };

    return this.http.post<ConvocationFetchTransactionResponse>(
      this.url+ConvocationHelper.API_CONV_SERVICE_ROUTES.NEW ,newConv
    )
      .pipe(
        map( r =>{
          console.log("test - profile", newConv)
          if(r.code!= 200){
            console.log(r.msg)
          }
          response.data=r.data
          return response
        }),
        catchError(this.error)
      );

  }

  postConvocationDetailPIVE(data:IRequestSaveConvocationDetailPIVE):Observable<{
    error:boolean,
    msg:string
  }>{
    const response = {
      error:false,
      msg:''
    }

    return this.http.post<any>(this.url + ConvocationHelper.API_CONV_SERVICE_ROUTES.NEW_PIVE,data)
    .pipe(
      map(resp=>{
        console.log(resp)
        return response
      }
      ),
      catchError(this.errorPost)
    )
  }
}

