import { IUserIdentificationType } from './user-identification-type.interface';
export interface IUserIdentification{
  id:number,
  value:string,
  type:IUserIdentificationType
}
