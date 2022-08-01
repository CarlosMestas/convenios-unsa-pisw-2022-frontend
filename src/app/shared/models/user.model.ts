import { IUser } from './../interfaces/user.interface';
export class User implements IUser{
  id: number|null;
  email: string;
  email_verified_at: string|null;
  status: string|null;
  token:string
  constructor(token:string, id:number|null = null,email:string,email_verified_at:string|null = null, status:string|null = null){
    this.id= id
    this.email = email
    this.email_verified_at = email_verified_at
    this.status = status
    this.token = token
  }

}
