import { IUserIdentification } from './user-identification.interface';
import { IProfileType } from './profile-type.interface';
export interface IProfile{
  id: string,
  image:string,
  name:string,
  last_name:string,
  address:string,
  type:IProfileType,
  phone:string,
  identification:IUserIdentification,
  birthdate:string,
  profile_created:number,
}
