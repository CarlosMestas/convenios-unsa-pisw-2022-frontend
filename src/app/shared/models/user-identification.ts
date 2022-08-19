import {IUserIdentification} from "../interfaces/user-identification.interface";
import {TypeIdentification} from "./type-user-identification.model";
export class UserIdentification  implements IUserIdentification{
  id:number
  value:string
  type:TypeIdentification
  constructor(
    id:number,
    value:string,
    type: TypeIdentification
    ){
    this.id=id,
    this.value=value,
      this.type=type
  }

}
