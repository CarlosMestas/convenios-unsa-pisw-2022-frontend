import { IUserData } from './../interfaces/user-data.interface';
import { IProfile } from '../interfaces/profile.interface';
import { IUser } from '../interfaces/user.interface';
export class UserData implements IUserData{
  user: IUser|null|undefined;
  profile: IProfile|null|undefined;
  constructor(
    user: IUser|null|undefined,
    profile: IProfile|null|undefined
  ){
    this.user= user;
    this.profile= profile;
  }

}
