import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { IEventType } from "src/app/shared/interfaces/convocation/event-type.interface";
import { IFacultyResponse } from "src/app/shared/interfaces/convocation/faculties.interface";
import { FacultiesHelper } from "./faculties.helper";


@Injectable({
  providedIn:'root'
})
export class FacultiesService extends FacultiesHelper{


  constructor(protected override http:HttpClient){
    super(http)
  }

  getAllFaculties():Observable<
  {
    error:boolean,
    msg:string,
    data:IFacultyResponse[]
  }>{
    const response = {
      error:false,
      msg:'',
      data:{} as IFacultyResponse[]
    };

    return this.http.get<{
      code:number,
      msg:string,
      data:IFacultyResponse[]
    }>(this.url+ FacultiesHelper.API_ROUTES.GET_ALL_FACULTIES)
    .pipe(
      map( resp =>{
        response.data=resp.data
        return response
      }),
      catchError(this.errorGetAll)
    )
  }

}
