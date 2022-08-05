import {IUserIdentificationType} from "../user-identification-type.interface";
export interface ITypeUserIdentificationResponse{
  code:number,
  msg:string,
  data:IUserIdentificationType[]
}
