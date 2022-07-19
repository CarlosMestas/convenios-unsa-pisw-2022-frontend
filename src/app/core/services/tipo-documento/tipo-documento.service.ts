import { ITipoDocumento } from './../../../shared/interfaces/tipo-documento.interface';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, Subject } from "rxjs";
import { TipoDocumentoHelper } from './tipo-documento.helper';
import { TipoDocumento } from 'src/app/shared/models/tipo-documento.model';


@Injectable({
  providedIn:'root'
})
export class TipoDocumentoService extends TipoDocumentoHelper{
  private tipoDocumento$:BehaviorSubject<TipoDocumento[] | null>;
  constructor(
    private router:Router,
    protected override http:HttpClient
  ){
    super(http)
    this.tipoDocumento$ = new BehaviorSubject<TipoDocumento[] | null>(null);
  }
  getTipoUsuario(): Observable<TipoDocumento[] | null>{
    return this.tipoDocumento$.asObservable();
  }

  fetchDocuments(): Observable<
  {
    error:boolean,
    msg:string,
    data:ITipoDocumento[]
  }>{

  const response = {
    error:false,
    msg:'',
    data:[] as ITipoDocumento[]
  };

  return this.http.get<ITipoDocumento[]>(this.url)
  .pipe(
    map( r =>{
      console.log(r)
      response.data = r
      this.tipoDocumento$.next(response.data)
      return response
    }),
    catchError(this.error)
  );
}

}


