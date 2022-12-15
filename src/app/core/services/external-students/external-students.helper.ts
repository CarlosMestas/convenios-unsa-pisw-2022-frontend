import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from "src/environments/environment.prod"
import { of } from 'rxjs';
import {IExternalStudent} from "../../../shared/interfaces/external-student.interface";

export class ExternalStudentsHelper{


  protected static API_EXTERNAL_STUDENTS_SERVICE_ROUTES = {
    SEND_REQUEST:"external-students/create"
  }

  public url = environment.url
  public isProduction = environment.production

  constructor(
    protected http:HttpClient
  ){

  }

  sendRequestError(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: {} as IExternalStudent
    })
  }

}
