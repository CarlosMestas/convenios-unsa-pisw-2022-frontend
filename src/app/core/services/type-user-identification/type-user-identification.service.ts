import { TypeUserIdentificationHelper} from './type-user-identification.helper';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, Subject } from "rxjs";
import {
  ITypeUserIdentificationResponse
} from "../../../shared/interfaces/transactions/types-user-identification-response.interface";
import {IUserIdentification} from "../../../shared/interfaces/user-identification.interface";
import {TypeIdentification} from "../../../shared/models/type-user-identification.model";
import {IUserIdentificationType} from "../../../shared/interfaces/user-identification-type.interface";


@Injectable({
  providedIn:'root'
})
export class TypeUserIdentificationService extends TypeUserIdentificationHelper{
  private typeUserIdentification$:BehaviorSubject<TypeIdentification | null>;
  constructor(
    private router:Router,
    protected override http:HttpClient
  ){
    super(http)
    this.typeUserIdentification$ = new BehaviorSubject<TypeIdentification | null>(null);
  }
  getTypeUserIdentification(): Observable<TypeIdentification | null>{
    return this.typeUserIdentification$.asObservable();
  }

  fetchTypeUserIdentification():
  Observable<
  {
    error:boolean,
    msg:string,
    data:IUserIdentificationType[]
  }
  >{

    const response = {
      error:false,
      msg:'',
      data:{} as IUserIdentificationType[]
    };
    console.log("nth - test",this.url + TypeUserIdentificationHelper.API_TYPE_USER_IDENTIFICATION_SERVICE_ROUTES.FETCH_TYPE_USER_IDENTIFICATION)
    return this.http.get<ITypeUserIdentificationResponse>(
      this.url + TypeUserIdentificationHelper.API_TYPE_USER_IDENTIFICATION_SERVICE_ROUTES.FETCH_TYPE_USER_IDENTIFICATION,
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
