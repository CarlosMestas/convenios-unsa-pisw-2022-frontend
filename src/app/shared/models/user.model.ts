import { IUser } from './../interfaces/user.interface';
export class User implements IUser{
  id: number;
  email: string;
  constructor(id:number,email:string){
    this.id= id
    this.email = email
  }
}
