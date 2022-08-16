import { AppRoutingModule } from '../../../modules/app/app.routes';

import { ConvocationHelper } from './convocation.helper';

import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from 'rxjs';
import { IConvocation } from 'src/app/shared/interfaces/convocation.interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn:'root'
})
export class ConvocationService extends ConvocationHelper{


  constructor(protected override http:HttpClient){
    super(http)
  }
  /**
   * get one convocatoria by id from API
   * @param id convocatoria id number
  */
  fetchConvocation(id: number):Observable<
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
    const testData:IConvocation = {
      id:1,
      title:"ALUMNO AGUSTINO, PARTICIPA EN EL PROGRAMA DE INTERNACIONALIZACIÓN VIRTUAL PIVE 2022 – 2DA. CONVOCATORIA",
      correlative:"PIVE-2022",
      type:1,
      description: "ALUMNO AGUSTINO, ANUNCIAMOS LA SEGUNDA CONVOCATORIA DEL PROGRAMA DE INTERNACIONALIZACIÓN VIRTUAL PIVE 2022 Selecciona tu evento internacional o nacional, que se realice hasta diciembre de este año, y postula!!",
      start_date:'15/10/2022 10:30',
      end_date:'15/10/2022 10:30',
      id_detail:1
    }
    response.data = testData;
    console.log("convocation---data--test: ", response.data)
    return of(response);
    /*console.log(this.url + AppRoutingModule.ROUTES_VALUES.ROUTE_APP_CONVOCATORIA + '?convocatoriaId=' + id)
    return this.http.get<IConvocation>(this.url + AppRoutingModule.ROUTES_VALUES.ROUTE_APP_CONVOCATORIA + '?convocatoriaId=' + id)
    .pipe(
      map( r =>{

        const testData:IConvocation = {
          id:1,
          title:"ALUMNO AGUSTINO, PARTICIPA EN EL PROGRAMA DE INTERNACIONALIZACIÓN VIRTUAL PIVE 2022 – 2DA. CONVOCATORIA",
          correlative:"PIVE-2022",
          type:1,
          description: "Esta convocatoria está ",
          start_date:'15/10/2022 10:30',
          end_date:'15/10/2022 10:30',
          id_detail:1
        }
        response.data = testData;
        return response;
      }),
      catchError(this.error)
    );*/
  }
  fetchConvocations(){

  }
}

