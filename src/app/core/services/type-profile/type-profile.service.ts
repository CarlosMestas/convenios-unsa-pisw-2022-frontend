import { ITypeProfileResponse } from './../../../shared/interfaces/transactions/types-profile-response.interface';
import { ITypeProfile } from './../../../shared/interfaces/type-profile.interface';
import { TypeProfile } from '../../../shared/models/type-profile.model';
import { TypeProfileHelper } from './type-profile.helper';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, Subject } from "rxjs";


@Injectable({
  providedIn:'root'
})
export class TypeProfileService extends TypeProfileHelper{
  private typeProfile$:BehaviorSubject<TypeProfile | null>;
  constructor(
    private router:Router,
    protected override http:HttpClient
  ){
    super(http)
    this.typeProfile$ = new BehaviorSubject<TypeProfile | null>(null);
  }
  getTypeProfile(): Observable<TypeProfile | null>{
    return this.typeProfile$.asObservable();
  }

  fetchTypeProfile():
  Observable<
  {
    error:boolean,
    msg:string,
    data:ITypeProfile[]
  }
  >{

    const response = {
      error:false,
      msg:'',
      data:{} as ITypeProfile[]
    };
    return this.http.get<ITypeProfileResponse>(
      this.url + TypeProfileHelper.API_TYPE_PROFILE_SERVICE_ROUTES.FETCH_TYPE_PROFILE,
      )
    .pipe(
      map( r =>{
        response.data =r.data
        return response
      }),
      catchError(this.error)
    );

  }


}
