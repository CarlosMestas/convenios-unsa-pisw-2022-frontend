import { IUser } from './../interfaces/user.interface';
export class User implements IUser{
  userId: number;
  userName:string;
  userLastname:string;
  userEmail: string;
  userPassword: string;
  userStatus: number;
  userPicture: string;
  constructor(userId:number,userName:string,userLastname:string, userEmail:string, userPassword:string,userStatus:number, userPicture:string){
    this.userId= userId
    this.userName = userName
    this.userLastname = userLastname
    this.userEmail = userEmail
    this.userPassword = userPassword
    this.userStatus = userStatus
    this.userPicture = userPicture
  }




}
