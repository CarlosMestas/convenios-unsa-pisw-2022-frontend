import { IConvocationType } from './convocation/convocation-type.interface';
export interface IConvocation{
  id:number,
  title:string,
  correlative:string,
  type:IConvocationType,
  description:string,
  start_date:string,
  end_date:string
}


export interface IModalityConvocationResponse{
  id:number,
  name:string
}
