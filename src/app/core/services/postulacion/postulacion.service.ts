import { AppRoutingModule } from './../../../modules/app/app.routes';

import { PostulacionHelper } from './postulacion.helper';

import { Injectable } from "@angular/core";
import { catchError, map, Observable } from 'rxjs';
import { IConvocatoria } from 'src/app/shared/interfaces/convocatoria.interface';
import { HttpClient } from '@angular/common/http';
import {IPostulacion} from "../../../shared/interfaces/postulacion.interface";


@Injectable({
  providedIn:'root'
})
export class PostulacionService extends PostulacionHelper{


  constructor(protected override http:HttpClient){
    super(http)
  }

  getPostulacion(id: number):Observable<
  {
    error:boolean,
    msg:string,
    data:IPostulacion[]
  }>{

    const response = {
      error:false,
      msg:'',
      data:[] as IPostulacion[]
    };
    console.log(this.url + AppRoutingModule.ROUTES_VALUES.ROUTE_APP_POSTULACION + '?postulacionId=' + id)
    return this.http.get<IPostulacion[]>(this.url + AppRoutingModule.ROUTES_VALUES.ROUTE_APP_POSTULACION + '?postulacionId=' + id)
    .pipe(
      map( r =>{
        console.log("printing inside de pipe---------------")
        response.data = r;
        return response;
      }),
      catchError(this.error)
    );
  }
}

