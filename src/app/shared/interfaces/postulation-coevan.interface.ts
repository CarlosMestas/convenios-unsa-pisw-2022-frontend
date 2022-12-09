import { IPostulationCoevanCourse } from './postulacion.interface';
import { IAcademicNetworkResponse } from './academic-network.interface';
import { IAcademicYearResponse } from './academic-year.interface';
import { ICycleResponse } from './cycle.interface';
import { IProfessionalProgramsResponse } from 'src/app/shared/interfaces/programa-profesiona.interface';
import { IModalityConvocationResponse } from "./convocation.interface";
import { IFacultyResponse } from "./convocation/faculties.interface";
import { IUniversityResponse } from './university.interface';
import { ISemesterResponse } from './semester.interface';

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
  professional_program:IProfessionalProgramsResponse,
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

export interface IPostulationCoevanResponse{
  id:number,
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
  university_origin:string,
  web_page:string,
  city_region_university:string,
  faculty:IFacultyResponse,
  professional_program:IProfessionalProgramsResponse,
  current_cicle:ICycleResponse,
  academic_year:IAcademicYearResponse,
  mean_grades:number,
  total_credits:number,
  coordinator:string,
  coordinator_cargue:string,
  coordinator_email:string,
}
