import { SCRData } from './../../../shared/interfaces/coevan/winner.interface';
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment"

export class GenDocumentHelper {
  public url = environment.url
  public isProduction = environment.production

  private static TAGS = {
    STUDENT_NAME:"<STUDENT_NAME>",
    STUDENT_LASTNAME:"<STUDENT_LASTNAME>",
    STUDENT_DNI:"<STUDENT_DNI>",
    STUDENT_CUI:"<STUDENT_CUI>",
    STUDENT_ADDRESS:"<STUDENT_ADDRESS>",
    STUDENT_ACADEMIC_SEMESTER:"<STUDENT_ACADEMIC_SEMESTER>",
    STUDENT_ACADEMIC_YEAR:"<STUDENT_ACADEMIC_YEAR>",
    MODALITY:"<MODALITY>",
    UNIVERSITY_ORIGIN_ACRONYM:"<UNIVERSITY_ORIGIN_ACRONYM>",
    UNIVERSITY_ORIGIN_ACRONYM_LONG_NAME:"<UNIVERSITY_ORIGIN_ACRONYM_LONG_NAME>",
    UNIVERSITY_TARGET_ACRONYM:"<UNIVERSITY_TARGET_ACRONYM>",
    UNIVERSITY_TARGET_LONG_NAME:"<UNIVERSITY_TARGET_LONG_NAME>",
    UNIVERSITY_TARGET_CAREER:"<UNIVERSITY_TARGET_CAREER>",
    UNIVERSITY_ACADEMIC_SEMESTER:"<UNIVERSITY_ACADEMIC_SEMESTER>",
    ACADEMIC_NETWORK_NAME:"<ACADEMIC_NETWORK_NAME>",
    ACADEMIC_NETWORK_ACRONYM:"<ACADEMIC_NETWORK_ACRONYM>",
    FACULTY:"<FACULTY>",
    PROFESSIONAL_PROGRAM:"<PROFESSIONAL_PROGRAM>",


  }

  constructor(
    protected http:HttpClient
  ){}
  public static replaceTagsSubject(text:string,data:SCRData){
    let resp = text

    resp = resp.replace(new RegExp(GenDocumentHelper.TAGS.UNIVERSITY_ACADEMIC_SEMESTER,'gi'),data.universityAcademicSemester)
    return resp
  }


  public static replaceTagsPresentation(text:string,data:SCRData){
    let resp = text

    resp = resp.replace(new RegExp(GenDocumentHelper.TAGS.STUDENT_NAME,'gi'),data.name)

    resp = resp.replace(new RegExp(GenDocumentHelper.TAGS.STUDENT_LASTNAME,'gi'),data.lastname)

    resp = resp.replace(new RegExp(GenDocumentHelper.TAGS.STUDENT_DNI,'gi'),data.dni)

    resp = resp.replace(new RegExp(GenDocumentHelper.TAGS.STUDENT_ADDRESS,'gi'),data.address)

    resp = resp.replace(new RegExp(GenDocumentHelper.TAGS.PROFESSIONAL_PROGRAM,'gi'),data.professionalprogram)

    resp = resp.replace(new RegExp(GenDocumentHelper.TAGS.UNIVERSITY_ORIGIN_ACRONYM,'gi'),data.universityOrigin.acronym)

    resp = resp.replace(new RegExp(GenDocumentHelper.TAGS.STUDENT_CUI,'gi'),data.cui)

    resp = resp.replace(new RegExp(GenDocumentHelper.TAGS.STUDENT_ACADEMIC_YEAR,'gi'),data.academicyear)
    resp = resp.replace(new RegExp(GenDocumentHelper.TAGS.STUDENT_ACADEMIC_SEMESTER,'gi'),data.studentSemester)

    return resp
  }

  public static replaceTagsBody(text:string,data:SCRData){
    let resp = text

    resp = resp.replace(new RegExp(GenDocumentHelper.TAGS.MODALITY,'gi'),data.modality)

    resp = resp.replace(new RegExp(GenDocumentHelper.TAGS.UNIVERSITY_TARGET_CAREER,'gi'),data.universityTargetCarrer)

    resp = resp.replace(new RegExp(GenDocumentHelper.TAGS.UNIVERSITY_TARGET_LONG_NAME,'gi'),data.universityTarget.longName)

    resp = resp.replace(new RegExp(GenDocumentHelper.TAGS.ACADEMIC_NETWORK_ACRONYM,'gi'),data.academicNetwork.acronym)

    resp = resp.replace(new RegExp(GenDocumentHelper.TAGS.UNIVERSITY_ACADEMIC_SEMESTER,'gi'),data.universityAcademicSemester)


    return resp
  }

}
