import { IUser } from './../user.interface';
export interface IUserLoginResponse{
  code:number,
  msg:string,
  data:{
    user:IUser,
    token:string
  }
}
