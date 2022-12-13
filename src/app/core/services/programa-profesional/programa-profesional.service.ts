import { IProfessionalProgramResponse, IProgramaProfesional } from '../../../shared/interfaces/professional-program.interface';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, Subject } from "rxjs";
import { ProfessionalProgramHelper } from './programa-profesional.helper';
import { IHttpResponse, IHttpServiceResponse } from 'src/app/shared/interfaces/transactions/transaction-response.interface';

@Injectable({
  providedIn:'root'
})

export class ProgramaProfesionalService extends ProfessionalProgramHelper{

  constructor(
    private router:Router,
    protected override http:HttpClient
  ){
    super(http)
  }

  getAllPrograms():Observable<IHttpServiceResponse<IProfessionalProgramResponse[]>>{
    const response = {
      error:false,
      msg:'',
      data:{} as IProfessionalProgramResponse[]
    };

    return this.http.get<IHttpResponse<IProfessionalProgramResponse[]>>(this.url+ ProfessionalProgramHelper.API_ROUTES.GET_ALL_PROGRAMS)
    .pipe(
      map( resp =>{
        response.data=resp.data
        return response
      }),
      catchError(this.errorGetAll)
    )
  }

}
