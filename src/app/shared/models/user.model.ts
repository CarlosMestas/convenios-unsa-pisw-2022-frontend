import { IUser } from './../interfaces/user.interface';
export class User implements IUser{
  userId: number;
  userEmail: string;
  userPassword: string;
  userStatus: number;
  userPicture: string;
  constructor(userId:number,userEmail:string, userPassword:string,userStatus:number, userPicture:string){
    this.userId= userId
    this.userEmail = userEmail
    this.userPassword = userPassword
    this.userStatus = userStatus
    this.userPicture = userPicture
  }
}
