import {IAdmin} from "../admin.interface";
export interface IAdminLoginResponse{
  code:number,
  msg:string,
  data:{
    admin:IAdmin,
    token:string
  }
}
