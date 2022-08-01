import { IProfile } from './profile.interface';
import { IUser } from './user.interface';
export interface IUserData{
  user:IUser | null|undefined,
  profile:IProfile | null|undefined
}
