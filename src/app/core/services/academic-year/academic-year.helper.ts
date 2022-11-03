import { IProfile } from '../../../shared/interfaces/profile.interface';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProfessionalProgramsResponse } from 'src/app/shared/interfaces/programa-profesiona.interface';
import { ICycleResponse } from 'src/app/shared/interfaces/cycle.interface';
import { IAcademicYearResponse } from 'src/app/shared/interfaces/academic-year.interface';

export class AcademicYearHelper{

  public url = environment.url
  public isProduction = environment.production

  public static API_ROUTES ={
    GET_ALL_ACADEMIC_YEARS:"get-all-academic-years",
  }
  constructor(
    protected http:HttpClient
  ){

  }


  errorGetAll(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: [] as IAcademicYearResponse[]
    })
  }

}
