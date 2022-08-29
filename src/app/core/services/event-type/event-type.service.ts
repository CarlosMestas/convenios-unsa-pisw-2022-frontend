import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { IEventType } from "src/app/shared/interfaces/convocation/event-type.interface";
import { EventTypeHelper } from "./event-type.helper";


@Injectable({
  providedIn:'root'
})
export class EventTypeService extends EventTypeHelper{


  constructor(protected override http:HttpClient){
    super(http)
  }

  getAllEventTypes():Observable<
  {
    error:boolean,
    msg:string,
    data:IEventType[]
  }>{
    const response = {
      error:false,
      msg:'',
      data:{} as IEventType[]
    };

    return this.http.get<{
      code:number,
      msg:string,
      data:IEventType[]
    }>(this.url+ EventTypeHelper.API_EVENT_TYPE_SERVICE_ROUTES.GET_ALL_EVENT_TYPES)
    .pipe(
      map( resp =>{
        response.data=resp.data
        return response
      }),
      catchError(this.errorGetEventTypes)
    )
  }

  getEventTypes(id:number):Observable<
  {
    error:boolean,
    msg:string,
    data:IEventType[]
  }>{
    const response = {
      error:false,
      msg:'',
      data:{} as IEventType[]
    };

    const params:HttpParams = new HttpParams()
    params.set("id",id)
    return this.http.get<{
      code:number,
      msg:string,
      data:IEventType[]
    }>(this.url+ EventTypeHelper.API_EVENT_TYPE_SERVICE_ROUTES.GET_EVENT_TYPES,{params})
    .pipe(
      map( resp =>{
        response.data=resp.data
        return response
      }),
      catchError(this.errorGetEventTypes)
    )

  }
}
