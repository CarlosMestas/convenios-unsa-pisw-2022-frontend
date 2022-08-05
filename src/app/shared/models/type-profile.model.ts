import { ITypeProfile } from '../interfaces/type-profile.interface';
export class TypeProfile implements ITypeProfile{
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
