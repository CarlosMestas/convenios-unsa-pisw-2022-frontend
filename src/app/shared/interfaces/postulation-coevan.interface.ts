import { IPostulationCoevanCourse, IPostulationCoevanCourseResponseDetail } from './postulation.interface';
import { IAcademicNetworkResponse } from './academic-network.interface';
import { IAcademicYearResponse } from './academic-year.interface';
import { ICycleResponse } from './cycle.interface';
import { IProfessionalProgramResponse } from 'src/app/shared/interfaces/professional-program.interface';
import { IModalityConvocationResponse } from "./convocation.interface";
import { IFacultyResponse } from "./convocation/faculties.interface";
import { IUniversityResponse } from './university.interface';
import { ISemesterResponse } from './semester.interface';
import { ENUMPostulationCoevanStatus } from '../enum/convocation.enum';

export interface IPostulationCoevanDocFormat {
  photo:string,
  lastname:string,
  name:string,
  birth_date:string,
  dni:string,
  city_region_postulant:string,
  cui:string,
  address:string,
  phone:string,
  email:string,
  emergency_contact:string
  university_origin:IUniversityResponse,
  web_page:string,
  city_region_university:string,
  faculty:IFacultyResponse,
  professional_program:IProfessionalProgramResponse,
  current_cicle:ICycleResponse,
  academic_year:IAcademicYearResponse,
  mean_grades:number,
  total_credits:number,
  coordinator:string,
  coordinator_charge:string,
  coordinator_email:string,
  //CONVOCATION DATA
  modality:IModalityConvocationResponse,
  semester:ISemesterResponse,
  university_target:IUniversityResponse,
  academic_network:IAcademicNetworkResponse,
  courses:IPostulationCoevanCourse[]
}

export interface IPostulationCoevanResponseDetail{
  id_convocation:number,
  id:number,
  photo:string,
  lastname:string,
  name:string,
  birth_date:string,
  dni:string,
  city_region_postulant:string,
  cui:string,
  current_address:string,
  phone:string,
  email:string,
  contact_emergency_number:string
  origin_university:IUniversityResponse,
  web_page:string,
  city_region_university:string,
  faculty:IFacultyResponse,
  professional_program:IProfessionalProgramResponse,
  current_cicle:ICycleResponse,
  academic_year:IAcademicYearResponse,
  mean_grades:number,
  total_credits:number,
  coordinator:string,
  coordinator_cargue:string,
  coordinator_email:string,
  postulation_document:string,
  last_update:string,
  courses:IPostulationCoevanCourseResponseDetail[],
  post_state:IPostulationCoevanStatusResponse
}


export interface IPostulationCoevanStatusResponse{
  id:ENUMPostulationCoevanStatus,
  name:string,
  description:string
}

export interface IPostulationCoevan{
  photo:File,
  id_convocation:number,
  id_user:number,
  lastname:string,
  name:string,
  birth_date:string,
  dni:string,
  city_region_postulant:string,
  cui:string,
  current_address:string,
  phone:string,
  email:string,
  contact_emergency_number:string
  origin_university:number,
  web_page:string,
  city_region_university:string,
  id_faculty:number,
  id_professional_program:number,
  id_current_cicle:number,
  id_academic_year:number,
  mean_grades:number,
  total_credits:number,
  coordinator:string,
  coordinator_cargue:string,
  coordinator_email:string,
  postulation_document:File|undefined,
  last_update:string,
  courses:IPostulationCoevanCourse[],
  post_state:number
}
