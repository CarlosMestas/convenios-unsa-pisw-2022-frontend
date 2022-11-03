import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { of } from "rxjs"
import { IEventType } from "src/app/shared/interfaces/convocation/event-type.interface"
import { IFacultyResponse } from "src/app/shared/interfaces/convocation/faculties.interface"
import { IRequirement } from "src/app/shared/interfaces/requirements/requirement.interface"
import { environment } from "src/environments/environment.prod"

export class FacultiesHelper{
  public url = environment.url
  public isProduction = environment.production

  public static API_ROUTES ={
    GET_ALL_FACULTIES:"get-all-faculties",
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
      data: {} as IFacultyResponse
    })
  }
  errorGetAll(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: {} as IFacultyResponse[]
    })
  }
}
