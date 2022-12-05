import { IConvocationResponse } from './../../../shared/interfaces/convocation.interface';
import { IConvocation } from '../../../shared/interfaces/convocation.interface';
import { environment } from 'src/environments/environment.prod';
import{HttpClient,HttpErrorResponse} from '@angular/common/http'
import { of } from 'rxjs';

export class ConvocationHelper{
  protected static API_CONV_SERVICE_ROUTES = {
    ALL_CONVOCATIONS: "convocations/all",
    NEW:"convocations",
    NEW_PIVE:"pivConvocations",
    GET_CONVOCATION:"convocations"
  }
  public url = environment.url
  public isProduction = environment.production
  constructor(
    protected http:HttpClient
  ){}

  error(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: {} as IConvocationResponse
    })
  }

  errorPost(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage
    })
  }
  errorGetConvocations(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: [
        {
          id: 1,
          title: 'Convocatoria Ordinaria Estudiantes VAN',
          correlative: 'COEVAN-2022-B',
          type: 1,
          modality: 2,
          description: 'activo',
          start_date: '11/12/2022',
          end_date: '11/12/2022',
          important_notes: 'adawdw',
        },
        {
          id: 2,
          title: 'Convocatoria Ordinaria Estudiantes VAN',
          correlative: 'COEVAN-2022-A',
          type: 1,
          modality: 2,
          description: 'activo',
          start_date: '06/11/2022',
          end_date: '06/12/2022',
          important_notes: 'adawdw',
        },
      ]
    })
  }
}
