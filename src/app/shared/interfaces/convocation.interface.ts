import { ENUMConvocationTypeAcronym } from "../enum/convocation.enum"

export interface IConvocation{
  title:string,
  type:number,
  correlative:string,
  modality:number,
  description:string,
  start_date:string,
  end_date:string,
  important_notes:string
}

export interface IConvocationResponse{
  id:number,
  title:string,
  type:number,
  correlative:string,
  modality:number,
  description:string,
  start_date:string,
  end_date:string,
  important_notes:string
}
export interface IConvocationResponseDetail{
  id:number,
  title:string,
  type:ITypeConvocationResponse,
  correlative:string,
  modality:IModalityConvocationResponse,
  description:string,
  start_date:string,
  end_date:string,
  important_notes:string
}

export interface IConvocationField{
  key:string,
  label:string
}

export interface ITypeConvocationResponse{
  id:number,
  name:string,
  acronym:ENUMConvocationTypeAcronym
}
export interface IModalityConvocationResponse{
  id:number,
  name:string
}
