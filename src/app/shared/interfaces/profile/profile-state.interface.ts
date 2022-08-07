import { IProfile } from './../profile.interface';
export interface IProfileState{
  working:boolean,
  profile:IProfile|null,
  idUser:number
}
