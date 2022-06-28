import { AppRoutingModule } from './../../../modules/app/app.routes';

import { ConvocatoriaHelper } from './convocatoria.helper';

import { Injectable } from "@angular/core";
import { catchError, map, Observable } from 'rxjs';
import { IConvocatoria } from 'src/app/shared/interfaces/convocatoria.interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn:'root'
})
export class ConvocatoriaService extends ConvocatoriaHelper{


  constructor(protected override http:HttpClient){
    super(http)
  }
  /**
   * get one convocatoria by id from API
   * @param id convocatoria id number
  */
  getConvocatoria(id: number):Observable<
  {
    error:boolean,
    msg:string,
    data:IConvocatoria[]
  }>{

    const response = {
      error:false,
      msg:'',
      data:[] as IConvocatoria[]
    };
    console.log(this.url + AppRoutingModule.ROUTES_VALUES.ROUTE_APP_CONVOCATORIA + '?convocatoriaId=' + id)
    return this.http.get<IConvocatoria[]>(this.url + AppRoutingModule.ROUTES_VALUES.ROUTE_APP_CONVOCATORIA + '?convocatoriaId=' + id)
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

