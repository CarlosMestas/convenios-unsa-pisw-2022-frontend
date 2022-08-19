import { IAdmin } from './../admin.interface';
export interface IAdminAuthState{
  working:boolean,
  email:string|null,
  admin:IAdmin|null
  id:number,
  dialogUserRegisterWrongEmail:boolean
}
