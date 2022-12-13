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

  return this.http.get<any[]>(this.url)
  .pipe(
    map( r =>{
      var data1 = new TipoDocumento(r[0]["id"],r[0]["name"],r[0]["status"])
      var data2 = new TipoDocumento(r[1]["id"],r[1]["name"],r[1]["status"])
      var data3 = new TipoDocumento(r[2]["id"],r[2]["name"],r[2]["status"])
      var data4 = new TipoDocumento(r[3]["id"],r[3]["name"],r[3]["status"])
      response.data =[data1,data2,data3,data4]
      this.tipoDocumento$.next(response.data)
      return response
    }),
    catchError(this.error)
  );
}

}


