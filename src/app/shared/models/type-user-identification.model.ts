import {IUserIdentificationType} from "../interfaces/user-identification-type.interface";
export class TypeIdentification implements IUserIdentificationType{
  id: number;
  description: string;
  constructor(
    id:number,
    description:string
  ){
    this.id=id,
      this.description=description
  }
}
