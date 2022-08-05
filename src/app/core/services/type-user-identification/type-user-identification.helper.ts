import { IUserIdentification } from '../../../shared/interfaces/user-identification.interface';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {IUserIdentificationType} from "../../../shared/interfaces/user-identification-type.interface";

export class TypeUserIdentificationHelper{

  public url = environment.url
  public isProduction = environment.production

  protected static API_TYPE_USER_IDENTIFICATION_SERVICE_ROUTES = {
    FETCH_TYPE_USER_IDENTIFICATION:"userIdentificationTypes"
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
      data: [] as IUserIdentificationType[]
    })
  }

}
