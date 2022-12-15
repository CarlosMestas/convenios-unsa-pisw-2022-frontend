import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { of } from "rxjs"
import { IEventType } from "src/app/shared/interfaces/convocation/event-type.interface"
import { environment } from "src/environments/environment.prod"

export class EventTypeHelper{
  public url = environment.url
  public isProduction = environment.production

  public static API_EVENT_TYPE_SERVICE_ROUTES ={
    POST_EVENT_TYPE:"eventTypes",
    GET_ALL_EVENT_TYPES:"eventTypes",
    GET_EVENT_TYPES:"eventTypes"
  }

  constructor(
    protected http:HttpClient
  ){}

  error(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: {} as IEventType
    })
  }
  errorGetEventTypes(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: {} as IEventType[]
    })
  }
}
