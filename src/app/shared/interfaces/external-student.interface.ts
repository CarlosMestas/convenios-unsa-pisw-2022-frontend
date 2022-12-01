export interface IExternalStudent{
  name:string,
  lastname:string,
  email:string,
  justification:string,
}

export interface IExternalStudentError{
  code:number,
  msg:string
}
export interface IExternalStudentState{
  working:boolean,
  roles:IExternalStudent[],
  error:IExternalStudentError|null
}
