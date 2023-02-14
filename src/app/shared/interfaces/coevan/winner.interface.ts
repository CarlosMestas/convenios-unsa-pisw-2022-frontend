import { IUniversityResponse } from './../university.interface';
export interface ICoevanWinnerData{

}
export interface ICoevanWinnerDataResponse{

}
export interface ICoevanWinnerDataResponseDetail{
  id:number,
  id_postulation:number,
  inductionDate:string,
  inductionDescription:string,
  inductionLink:string,
  scrTitle:string,
  scrSubheader:string,
  scrAddressee:string,
  scrIntroduction:string,
  scrBody:string,
  scrConclusion:string,
  scrDate:string
}

//scr = ScholarshipCertificateRequest
export interface SCRData{
  lastname:string,
  name:string,
  dni:string,
  address:string,
  cui:string,
  universityOrigin:{
    acronym:string,
    longName:string
  },
  professionalprogram:string,
  studentSemester:string,
  academicyear:string,
  universityTargetCarrer:string,
  modality:string,
  universityTarget:{
    acronym:string,
    longName:string
  },
  academicNetwork:{
    acronym:string,
    longName:string
  },
  universityAcademicSemester:string
}

