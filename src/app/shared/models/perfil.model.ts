import { IProfileType } from './../interfaces/profile-type.interface';
import { IUserIdentification } from './../interfaces/user-identification.interface';
import { IProfile } from '../interfaces/profile.interface';
export class Profile implements IProfile{
  id: string
  image:string
  name:string
  last_name:string
  address:string
  type:IProfileType
  phone:string
  identification:IUserIdentification
  birthdate:string
  profile_created:number
  constructor(
    id: string,
    image:string,
    name:string,
    last_name:string,
    address:string,
    type:IProfileType,
    phone:string,
    identification:IUserIdentification,
    birthdate:string,
    profile_created:number
  ){
    this.id = id ,
    this.image= image,
    this.name = name ,
    this.last_name = last_name,
    this.address = address,
    this.type = type,
    this.phone = phone,
    this.identification = identification,
    this.birthdate = birthdate,
    this.profile_created = profile_created
  }
}
