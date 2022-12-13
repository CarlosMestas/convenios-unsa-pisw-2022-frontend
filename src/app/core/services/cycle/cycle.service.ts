import { IProfessionalProgramResponse, IProgramaProfesional } from '../../../shared/interfaces/professional-program.interface';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, Subject } from "rxjs";
import { IHttpResponse, IHttpServiceResponse } from 'src/app/shared/interfaces/transactions/transaction-response.interface';
import { CycleHelper } from './cycle.helper';
import { ICycleResponse } from 'src/app/shared/interfaces/cycle.interface';

@Injectable({
  providedIn:'root'
})

export class CycleService extends CycleHelper{

  constructor(
    private router:Router,
    protected override http:HttpClient
  ){
    super(http)
  }

  getAllCycles():Observable<IHttpServiceResponse<ICycleResponse[]>>{
    const response = {
      error:false,
      msg:'',
      data:{} as ICycleResponse[]
    };

    return this.http.get<IHttpResponse<ICycleResponse[]>>(this.url+ CycleHelper.API_ROUTES.GET_ALL_CYCLES)
    .pipe(
      map( resp =>{
        response.data=resp.data
        return response
      }),
      catchError(this.errorGetAll)
    )
  }

}
