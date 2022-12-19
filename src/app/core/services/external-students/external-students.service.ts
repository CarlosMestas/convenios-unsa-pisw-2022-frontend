import {map, catchError, Observable} from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import {ExternalStudentsHelper} from './external-students.helper';
import {IExternalStudent} from "../../../shared/interfaces/external-student.interface";

@Injectable({
  providedIn:"root"
})
export class ExternalStudentsService extends ExternalStudentsHelper{

  constructor(
    protected override http:HttpClient

  ){
    super(http)
  }


  sendRequest(formData: FormData):Observable<
    {
      error: boolean,
      msg: string,
      data: IExternalStudent
    }>{

    const response = {
      error:false,
      msg:'',
      data: {} as IExternalStudent
    };

    return this.http.post<{
      error:boolean,
      msg:string,
      data: IExternalStudent
    }>(this.url + ExternalStudentsHelper.API_EXTERNAL_STUDENTS_SERVICE_ROUTES.SEND_REQUEST,
      formData
    ).pipe(
        map(resp =>{
            response.data = resp.data
            return response
        }),
        catchError(this.sendRequestError)
      );
  }
}
