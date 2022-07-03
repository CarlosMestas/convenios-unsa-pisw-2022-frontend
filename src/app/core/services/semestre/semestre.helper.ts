import { ISemestre } from './../../../shared/interfaces/semestre.interface';
import { IPerfil } from './../../../shared/interfaces/perfil.interface';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export class SemestreHelper{

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
      data: [] as ISemestre[]
    })
  }

}
