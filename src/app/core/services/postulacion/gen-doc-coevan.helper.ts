import { environment } from 'src/environments/environment';
import{HttpClient,HttpErrorResponse} from '@angular/common/http'
import { of } from 'rxjs';
environment
export class GenDocumentCoevanHelper {
  public url = environment.url
  public isProduction = environment.production
  constructor(
    protected http:HttpClient
  ){}

}
