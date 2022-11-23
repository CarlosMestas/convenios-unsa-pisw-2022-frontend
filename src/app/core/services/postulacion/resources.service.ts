import { EMPTY } from 'rxjs';
import { AppRoutingModule } from './../../../modules/app/app.routes';

import { ResourcesHelper } from './resources.helper';

import { Injectable } from "@angular/core";
import { catchError, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {IPostulation} from "../../../shared/interfaces/postulacion.interface";
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
    console.log("printing : ")
    const response = {
      error:false,
      msg:'',
      data: {} as File
    };
    return from(fetch(url)
    .then(resp=>resp.blob())
    .then(blob=>{

      const file = new File([blob],'image',{type:blob.type})
      response.data= file
      console.log("printing : ",blob)
      return response
    }))


  }
}

