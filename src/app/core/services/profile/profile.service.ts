import { ITransactionResponse } from './../../../shared/interfaces/transactions/transaction-response.interface';
import { IProfileGetResponse } from './../../../shared/interfaces/transactions/profile-get-response.interface';
import { IProfile } from '../../../shared/interfaces/profile.interface';
import { Profile } from '../../../shared/models/perfil.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/models/user.model';
import { IUser } from '../../../shared/interfaces/user.interface';
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, Subject } from "rxjs";
import { ProfileHelper } from './profile.helper';

@Injectable({
  providedIn:'root'
})

export class ProfileService extends ProfileHelper{


  private profile$:BehaviorSubject<IProfile | null>;
  constructor(
    private router:Router,
    protected override http:HttpClient
  ){
    super(http)
    this.profile$ = new BehaviorSubject<IProfile | null>(null);
  }
  getPerfil(): Observable<IProfile | null>{
    return this.profile$.asObservable();
  }

  fetchProfile(userId:number):Observable<
  {
    error:boolean,
    msg:string,
    data:IProfile
  }>{

    const response = {
      error:false,
      msg:'',
      data:{} as Profile
    };


    return this.http.get<IProfileGetResponse>(
      this.url + ProfileHelper.API_PROFILE_SERVICE_ROUTES.FETCH_PROFILE,
      {
        params: new HttpParams().set("user_id",userId)
      }
      )
    .pipe(
      map( r =>{
        response.data =r.data
        this.profile$.next(response.data)
        return response
      }),
      catchError(this.error)
    );
  }
  updateProfile(profile:IProfile):
  Observable<
  {
    error:boolean,
    msg:string
  }>
  {
    const response = {
      error:false,
      msg:''
    };
    const params:HttpParams = new HttpParams()

    return this.http.put<ITransactionResponse>(
      this.url + ProfileHelper.API_PROFILE_SERVICE_ROUTES.UPDATE_PROFILE,
        {
          params: profile
        }
      )
    .pipe(
      map( r =>{
        if(r.code!= 200){
          console.log(r.msg)
        }
        return response
      }),
      catchError(this.error)
    );
  }
}
