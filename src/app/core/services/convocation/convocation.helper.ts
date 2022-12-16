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
    GET_CONVOCATION_COEVAN:"get-convocation-coevan-detail",
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
      }],
      semester:"2022-A",
      avaltext:"La autoridad abajo firmante avala la postulación del estudiante Agustino: <STUDENT_LASTNAME>, <STUDENT_NAME>, para que efectúe el semestre académico <SEMESTER>, a través del programa de intercambio estudiantil <ACADEMIC_NETWORK_ACRONYM> en la <UNIVERSITY_TARGET>, a desarrollarse durante el semestre académico <SEMESTER>, tras considerar que la Movilidad Académica a efectuar será "+
      " de gran utilidad para su desarrollo profesional, y un significativo aporte para su perfil de egresado.",
      coursestext:"Como responsable académico de la facultad <FACULTY>/<PROFESSIONAL_PROGRAM> de la UNSA, doy mi conformidad de los cursos a llevarse de manera <MODALITY> para efectos de reconocimiento o capacitación, siempre y cuando el estudiante los apruebe en la <UNIVERSITY_TARGET>, donde efectuará movilidad académica <MODALITY> en el Marco de la <ACADEMIC_NETWORK_NAME> – <ACADEMIC_NETWORK_ACRONYM>",
      commitment:"Acepto las condiciones del <ACADEMIC_NETWORK_NAME> <ACADEMIC_NETWORK_ACRONYM> <SEMESTER>, y me comprometo a cumplir las siguientes cláusulas, en caso de ser seleccionado: \n"+

      "Comunicar en forma expresa (email), la aceptación de la beca a la <UNIVERSITY_TARGET>-<ACADEMIC_NETWORK_ACRONYM> dentro del plazo que se indique en cada convocatoria. \n"+

      "Realizar las actividades académicas que, en el marco del plan de estudios, recomiende el Coordinador de la carrera correspondiente, y aceptar todas las actuaciones de seguimiento, control, y evaluación establecidas por la <UNIVERSITY_TARGET>-<ACADEMIC_NETWORK_ACRONYM>. \n"+

      "Presentarme con el Coordinador del Programa de Intercambio <MODALITY> de la universidad de destino-<ACADEMIC_NETWORK_ACRONYM> y presentar toda la documentación requerida para mi inscripción como alumno de la universidad de destino-<ACADEMIC_NETWORK_ACRONYM>.\n"+

      "En caso de un cambio en el contrato académico original, enviar por correo electrónico al coordinador UNSA, los datos de las nuevas materias a cursar en la universidad de destino (actualizado y avalado), para que se considere su reconocimiento o convalidación. Se establece para este trámite un plazo no mayor de 30 días transcurridos después del inicio de clases en la universidad de destino. Luego de ello, cualquier trámite de retiro de curso, cambio de curso u otra modificación para la regularización académica, será considerado por la OUCCRIBP el trámite como extemporáneo, debiendo asumir el estudiante las consecuencias académicas del caso.\n" +

      "Completado el Intercambio Académico <MODALITY>, el estudiante deberá presentar un informe escrito a la UNSA, dentro de los 30 días de culminado el programa, con copia a la Escuela Profesional. \n"+

      "Aceptar y respetar las normas establecidas en la Universidad de destino <ACADEMIC_NETWORK_ACRONYM>.\n"+

      "Autorizo el tratamiento de mis datos personales con el objeto de alcanzar la finalidad, materia del concurso y que pueden ser transferidos a otras áreas de la UNSA e Instituciones Públicas (MINEDU, SUNEDU, etc.) de conformidad con las disposiciones contenidas en la Ley Nro. 29733, su Reglamento, Normas y Modificatorias."
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
