import { IConvocation } from '../../../shared/interfaces/convocation.interface';
import { environment } from 'src/environments/environment.prod';
import{HttpClient,HttpErrorResponse} from '@angular/common/http'
import { of } from 'rxjs';
environment
export class ConvocationHelper{
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
      data: {} as IConvocation
    })
  }
}
