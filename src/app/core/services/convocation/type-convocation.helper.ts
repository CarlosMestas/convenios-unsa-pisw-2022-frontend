import { ITypeConvocationResponse } from '../../../shared/interfaces/convocation.interface';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { environment } from "src/environments/environment"
import { of } from 'rxjs';


export class TypeConvocationHelper{


  protected static API_ROUTES = {
    TYPE_CONVOCATION_GET_ALL:"get-all-convocation-types"
  }

  public url = environment.url
  public isProduction = environment.production

  constructor(
    protected http:HttpClient
  ){

  }

  getAllConvocationTypesError(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: [] as ITypeConvocationResponse[]
    })
  }


}
