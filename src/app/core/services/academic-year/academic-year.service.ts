import { IProfessionalProgramsResponse, IProgramaProfesional } from './../../../shared/interfaces/programa-profesiona.interface';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, Subject } from "rxjs";
import { IHttpResponse, IHttpServiceResponse } from 'src/app/shared/interfaces/transactions/transaction-response.interface';
import { ICycleResponse } from 'src/app/shared/interfaces/cycle.interface';
import { IAcademicYearResponse } from 'src/app/shared/interfaces/academic-year.interface';
import { AcademicYearHelper } from './academic-year.helper';

@Injectable({
  providedIn:'root'
})

export class AcademicYearService extends AcademicYearHelper{

  constructor(
    private router:Router,
    protected override http:HttpClient
  ){
    super(http)
  }

  getAllAcademicYear():Observable<IHttpServiceResponse<IAcademicYearResponse[]>>{
    const response = {
      error:false,
      msg:'',
      data:{} as IAcademicYearResponse[]
    };

    return this.http.get<IHttpResponse<IAcademicYearResponse[]>>(this.url+ AcademicYearHelper.API_ROUTES.GET_ALL_ACADEMIC_YEARS)
    .pipe(
      map( resp =>{
        response.data=resp.data
        return response
      }),
      catchError(this.errorGetAll)
    )
  }

}
