import { AuthService } from './../auth/auth.service';
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
import {IProfileType} from "../../../shared/interfaces/profile-type.interface";

@Injectable({
  providedIn:'root'
})

export class ProfileService extends ProfileHelper{


  private profile$:BehaviorSubject<IProfile | null>;
  constructor(
    private router:Router,
    protected override http:HttpClient,
    private authService:AuthService
  ){
    super(http)
    this.profile$ = new BehaviorSubject<IProfile | null>(null);
    this.authService.getUser().subscribe(user=>{
      if(user && user.id!=undefined){
        console.log("testing user",user)
        this.fetchProfile(user.id).subscribe()
      }
    })
  }
  getPerfil(): Observable<IProfile | null>{
    return this.profile$.asObservable();
  }
  getProfileValue():IProfile{
    return this.profile$.getValue() as IProfile
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
      this.url + ProfileHelper.API_PROFILE_SERVICE_ROUTES.FETCH_PROFILE + "/"+userId,
      /*{
        params: new HttpParams().set("user_id",userId)
      }*/
      )
    .pipe(
      map( r =>{
        console.log("callingfetchprofile" , r)
        response.data =r.data.profile
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
      this.url + ProfileHelper.API_PROFILE_SERVICE_ROUTES.UPDATE_PROFILE+"/"+profile.id,
        {
          "name": profile.name,
          "last_name": profile.last_name,
          "address": profile.address,
          "phone": profile.phone,
          "profile_created": 1,
          "birthdate":profile.birthdate,
          "type":profile.type,
          "identification":{
            "id":profile.id,
            "value":profile.identification.value,
            "type":1
          }
        }
      )
    .pipe(
      map( r =>{
        console.log("test - profile", profile)
        if(r.code!= 200){
          console.log(r.msg)
        }
        return response
      }),
      catchError(this.error)
    );
  }
}
