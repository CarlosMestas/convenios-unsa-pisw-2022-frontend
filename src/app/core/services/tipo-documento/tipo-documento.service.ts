import { TipoUsuario } from './../../../shared/models/tipo-usuario.model';
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
  private tipoDocumento$:BehaviorSubject<TipoDocumento | null>;
  constructor(
    private router:Router,
    protected override http:HttpClient
  ){
    super(http)
    this.tipoDocumento$ = new BehaviorSubject<TipoDocumento | null>(null);
  }
  getTipoUsuario(): Observable<TipoDocumento | null>{
    return this.tipoDocumento$.asObservable();
  }
}
