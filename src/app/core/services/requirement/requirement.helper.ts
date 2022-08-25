import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { of } from "rxjs"
import { IRequirement } from "src/app/shared/interfaces/requirements/requirement.interface"
import { environment } from "src/environments/environment.prod"

export class RequirementHelper{
  public url = environment.url
  public isProduction = environment.production
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
      data: {} as IRequirement
    })
  }
}
