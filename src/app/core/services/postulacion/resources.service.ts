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
  {
    error:boolean,
    msg:string,
    data:File
  }>{
    const response = {
      error:false,
      msg:'',
      data: {} as File
    };
    return from(fetch(url)
    .then(resp=>resp.blob())
    .then(blob=>{

      const file = new File([blob],'pdf',{type:blob.type})
      console.log("file test:", file)
      response.data= file
      return response
    }))


  }
}

