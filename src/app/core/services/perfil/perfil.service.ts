import { IPerfil } from './../../../shared/interfaces/perfil.interface';
import { Perfil } from './../../../shared/models/perfil.model';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../../../shared/models/user.model';
import { IUser } from './../../../shared/interfaces/user.interface';
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, Subject } from "rxjs";
import { PerfilHelper } from './perfil.helper';

@Injectable({
  providedIn:'root'
})

export class PerfilService extends PerfilHelper{


  private perfil$:BehaviorSubject<Perfil | null>;
  constructor(
    private router:Router,
    protected override http:HttpClient
  ){
    super(http)
    this.perfil$ = new BehaviorSubject<Perfil | null>(null);
  }
  getPerfil(): Observable<Perfil | null>{
    return this.perfil$.asObservable();
  }

  fetchPerfil(userId:number):Observable<
  {
    error:boolean,
    msg:string,
    data:IPerfil
  }>{

    const response = {
      error:false,
      msg:'',
      data:{} as IPerfil
    };

    /*let credential:string = JSON.stringify({gmail:gmail,password:password})
    this.http.get<IUser[]>(this.url + "users" + '?token=' + btoa(credential))*/
    //return this.http.get<IUser[]>(this.url + "users?userId=1")
    return this.http.get<IPerfil[]>(this.url + "perfiles" + '?usuariosId=' +userId)
    .pipe(
      map( r =>{
        console.log("perfil---------------------------------")
        console.log(response.data)
        response.data = r[0]
        this.perfil$.next(response.data)
        return response
      }),
      catchError(this.error)
    );
  }
}
