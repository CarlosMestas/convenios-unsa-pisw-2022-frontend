import { IUserData } from './../interfaces/user-data.interface';
import { IPerfil } from './../interfaces/perfil.interface';
import { IUser } from '../interfaces/user.interface';
export class UserData implements IUserData{
  user: IUser|null|undefined;
  profile: IPerfil|null|undefined;
  constructor(
    user: IUser|null|undefined,
    profile: IPerfil|null|undefined
  ){
    this.user= user;
    this.profile= profile;
  }

}
