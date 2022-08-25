import { IAdmin } from './../interfaces/admin.interface';
export class Admin implements IAdmin{
  id: number;
  email: string;
  password: string;
  constructor(id:number,email:string,password:string){
    this.id= id
    this.email = email
    this.password = password
  }
}
