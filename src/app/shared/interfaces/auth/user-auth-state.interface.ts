import { IUser } from './../user.interface';
export interface IUserAuthState{
  working:boolean,
  email:string|null,
  user:IUser|null
  id:number,
  dialogUserRegisterWrongEmail:boolean
}
