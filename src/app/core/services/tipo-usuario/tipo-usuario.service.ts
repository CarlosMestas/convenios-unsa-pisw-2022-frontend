import { TipoUsuario } from './../../../shared/models/tipo-usuario.model';
import { TipoUsuarioHelper } from './tipo-usuario.helper';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, Subject } from "rxjs";


@Injectable({
  providedIn:'root'
})
export class TipoUsuarioService extends TipoUsuarioHelper{
  private tipoUsuario$:BehaviorSubject<TipoUsuario | null>;
  constructor(
    private router:Router,
    protected override http:HttpClient
  ){
    super(http)
    this.tipoUsuario$ = new BehaviorSubject<TipoUsuario | null>(null);
  }
  getTipoUsuario(): Observable<TipoUsuario | null>{
    return this.tipoUsuario$.asObservable();
  }
}
