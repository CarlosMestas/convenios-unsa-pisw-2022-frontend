import { ITipoUsuario } from './../../../shared/interfaces/tipo-usuario.interface';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export class TipoUsuarioHelper{

  public url = environment.url
  public isProduction = environment.production
  constructor(
    protected http:HttpClient
  ){

  }


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
      data: [] as ITipoUsuario[]
    })
  }

}
