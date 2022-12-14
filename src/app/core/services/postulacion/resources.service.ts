import { IHttpServiceResponse } from './../../../shared/interfaces/transactions/transaction-response.interface';
import { EMPTY } from 'rxjs';
import { AppRoutingModule } from './../../../modules/app/app.routes';

import { ResourcesHelper } from './resources.helper';

import { Injectable } from "@angular/core";
import { catchError, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class ResourcesService extends ResourcesHelper{


  constructor(protected override http:HttpClient){
    super(http)
  }

  getImageToFile(url: string):Observable<
  IHttpServiceResponse<File>>{
    const response = {
      error:false,
      msg:'',
      data: {} as File
    };
    return from(fetch(url)
    .then(resp=>resp.blob())
    .then(blob=>{

      const file = new File([blob],'pdf',{type:blob.type})

      response.data= file
      return response
    }))
  }

  getPDFToFile(url: string):Observable<
  IHttpServiceResponse<File>>{
    const response = {
      error:false,
      msg:'',
      data: {} as File
    };
    return this.http.get(url,{observe:'response',responseType:'blob'}).pipe(
      map(data=>{
        console.log("file test:", data)
        let name = data.url?.split('/')
        const file = new File([data.body!],name![name!.length-1],{type:data.body?.type})
        console.log("file test:", file)
        response.data= file
        return response
      })
    )
  }
  downloadDocument(url: string):Observable<
  IHttpServiceResponse<Blob>>{
    const response = {
      error:false,
      msg:'',
      data: {} as Blob
    };
    return this.http.get(url,{observe:'response',responseType:'blob'}).pipe(
      map(data=>{
        let blob:Blob = data.body as Blob
        response.data= blob
        return response
      })
    )
  }
}

