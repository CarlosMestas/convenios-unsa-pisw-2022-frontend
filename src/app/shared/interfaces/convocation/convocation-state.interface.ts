import { IConvocation } from 'src/app/shared/interfaces/convocation.interface';
export interface IConvocationState{
  working:boolean,
  convocation:IConvocation|null
}
