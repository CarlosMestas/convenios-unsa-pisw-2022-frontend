import { IConvocationCoevanResponseDetail } from './../../../shared/interfaces/convocation-coevan.interface';
import { IConvocationResponse, IConvocationResponseDetail } from './../../../shared/interfaces/convocation.interface';
import { IConvocation } from '../../../shared/interfaces/convocation.interface';
import { environment } from 'src/environments/environment.prod';
import{HttpClient,HttpErrorResponse} from '@angular/common/http'
import { of } from 'rxjs';
import { ENUMConvocationTypeAcronym } from 'src/app/shared/enum/convocation.enum';

export class ConvocationHelper{
  protected static API_CONV_SERVICE_ROUTES = {
    ALL_CONVOCATIONS: "convocations/all",
    GET_CONVOCATION:"convocations",
    GET_CONVOCATION_COEVAN:"convocations--",
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
      data: {} as IConvocationResponseDetail
    })
  }

  errorCoevan(error:HttpErrorResponse){
    let dataTest:IConvocationCoevanResponseDetail={
      id: 1,
      academicNetwork: {
        id: 1,
        name:"Red peruana de Universidades",
        acronym:"RPU",
        description:"Descripción de la red académica",
        logo:""
      },
      university: {
        id:1,
        name:"Universidad Nacional de San Agustín",
        acronym:"UNSA",
        logo:""
      },
      documents: [{
        id:1,
        name:"Formulario de Universidad Destino",
        type:{
          id:1,
          name:"Formulario de Universidad Destino",
          category:""
        },
        url:"https://images-profiles-pis.s3.amazonaws.com/filesCoevan/00vOtp8HFBH5u6gxWrQzDfRQEkM4YZISPGchZNww.pdf",
        description:"Documento el cual debe ser completado y enviado, ya que es necesario para enviar su postulación a la universidad de destino"
      },
      {
        id:2,
        name:"Oferta Académica de Universidad Destino",
        type:{
          id:2,
          name:"Oferta Académica",
          category:""
        },
        url:"https://images-profiles-pis.s3.amazonaws.com/filesCoevan/00vOtp8HFBH5u6gxWrQzDfRQEkM4YZISPGchZNww.pdf",
        description:"Documento debe ser revisado y en base a ello decidir cuales son los cursos de planea llevar en la universidad de destino"
      }
    ],
      links: [{
        id:1,
        name:"Formulario de Universidad Destino",
        type:{
          id:1,
          name:"Formulario de Universidad Destino",
          category:"postulación"
        },
        url:"https://images-profiles-pis.s3.amazonaws.com/filesCoevan/00vOtp8HFBH5u6gxWrQzDfRQEkM4YZISPGchZNww.pdf",
        description:"Documento el cual debe ser firmado"
      }],
      requirements: [{
        id:1,
        description:"Debe pertenecer a quinto superior"
      }]
    }
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: dataTest
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

    let testData:IConvocationResponse[] = [{
          id: 1,
          title: 'Convocatoria Ordinaria Estudiantes VAN',
          correlative: 'COEVAN-2022-B',
          type: 1,
          modality: 2,
          description: 'activo',
          start_date: '11/12/2022',
          end_date: '11/12/2022',
          important_notes: 'adawdw',
          conv_state:1
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
          conv_state:1
      }
    ]
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
          conv_state:1
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
          conv_state:1
        },
      ]
    })
  }
}
