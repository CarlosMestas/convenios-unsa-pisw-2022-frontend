import { IPerfil } from './perfil.interface';
import { IUser } from './user.interface';
export interface IUserData{
  user:IUser | null|undefined,
  profile:IPerfil | null|undefined
}
