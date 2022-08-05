import { ITypeProfile } from '../../../shared/interfaces/type-profile.interface';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export class TypeProfileHelper{

  public url = environment.url
  public isProduction = environment.production

  protected static API_TYPE_PROFILE_SERVICE_ROUTES = {
    FETCH_TYPE_PROFILE:"profileTypes"
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
      data: [] as ITypeProfile[]
    })
  }

}
