import { IPostulationCoevanDocFormat } from './../../../shared/interfaces/postulation-coevan.interface';
import { environment } from 'src/environments/environment';
import{HttpClient,HttpErrorResponse} from '@angular/common/http'
import { of } from 'rxjs';
environment
export class GenDocumentCoevanHelper {
  public url = environment.url
  public isProduction = environment.production

  private static TAGS_AVAL = {
    STUDENT_NAME:"<STUDENT_NAME>",
    STUDENT_LASTNAME:"<STUDENT_LASTNAME>",
    MODALITY:"<MODALITY>",
    UNIVERSITY_TARGET:"<UNIVERSITY_TARGET>",
    ACADEMIC_NETWORK_NAME:"<ACADEMIC_NETWORK_NAME>",
    ACADEMIC_NETWORK_ACRONYM:"<ACADEMIC_NETWORK_ACRONYM>",
    SEMESTER:"<SEMESTER>",
    FACULTY:"<FACULTY>",
    PROFESSIONAL_PROGRAM:"<PROFESSIONAL_PROGRAM>",

  }

  public static replaceTagsAval(text:string,data:IPostulationCoevanDocFormat){
    let resp = text
    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.STUDENT_NAME,'gi'),data.name)
    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.STUDENT_LASTNAME,'gi'),data.lastname)
    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.MODALITY,'gi'),data.modality.name)
    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.UNIVERSITY_TARGET,'gi'),data.university_target.name)
    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.ACADEMIC_NETWORK_NAME,'gi'),data.academic_network.name)
    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.ACADEMIC_NETWORK_ACRONYM,'gi'),data.academic_network.acronym)
    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.SEMESTER,'gi'),data.semester.name)
    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.FACULTY,'gi'),data.faculty.name)
    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.PROFESSIONAL_PROGRAM,'gi'),data.professional_program.name)
    return resp
  }

  public static replaceTagsCourseResponsible(text:string,data:IPostulationCoevanDocFormat){
    let resp = text

    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.MODALITY,'gi'),data.modality.name)

    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.ACADEMIC_NETWORK_NAME,'gi'),data.academic_network.name)
    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.ACADEMIC_NETWORK_ACRONYM,'gi'),data.academic_network.acronym)
    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.FACULTY,'gi'),data.faculty.name)
    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.PROFESSIONAL_PROGRAM,'gi'),data.professional_program.name)
    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.UNIVERSITY_TARGET,'gi'),data.university_target.name)
    return resp
  }
  public static replaceTagsDecComp(text:string,data:IPostulationCoevanDocFormat){
    let resp = text

    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.MODALITY,'gi'),data.modality.name)
    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.ACADEMIC_NETWORK_NAME,'gi'),data.academic_network.name)
    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.ACADEMIC_NETWORK_ACRONYM,'gi'),data.academic_network.acronym)
    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.UNIVERSITY_TARGET,'gi'),data.university_target.name)
    resp = resp.replace(new RegExp(GenDocumentCoevanHelper.TAGS_AVAL.SEMESTER,'gi'),data.semester.name)
    return resp
  }


  constructor(
    protected http:HttpClient
  ){}

}
