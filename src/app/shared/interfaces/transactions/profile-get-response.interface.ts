import { IProfile } from './../profile.interface';
export interface IProfileGetResponse{
  code:number,
  msg:string,
  data:{
    profile:IProfile
  }

}
