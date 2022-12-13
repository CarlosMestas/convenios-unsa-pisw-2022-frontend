export interface IPostulationCoevanCourse{
  order:number,
  number_credits:number,
  course_code:string,
  unsa_course_name:string,
  year:string,
  semester:string,
  target_university_course_name:string
}

export interface IPostulationCoevanCourseResponseDetail{
  id:number,
  number_credits:number,
  course_code:string,
  unsa_course_name:string,
  year:string,
  semester:string,
  target_university_course_name:string
}
