export interface IProgramaProfesional{
  programaProfesionalId:number,
  programaProfesionalName: string,
  programaProfesionalStatus: number
}

export interface IProfessionalProgramsResponse{
  id:number,
  name:string,
  acronym:string,
  faculty:number
}
