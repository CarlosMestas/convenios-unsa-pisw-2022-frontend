import { IListable } from "../interfaces/listable.interface";
import { IRequirement } from "../interfaces/requirements/requirement.interface";

export class Requirement implements IRequirement{
  id: number;
  description: string;
  constructor(id:number,description:string){
    this.id=id
    this.description=description
  }
  static getListableFormat(items:IRequirement[]):IListable[]{
    let result:IListable[] =[]
    items.forEach(item=>{
      result.push({
        id:item.id,
        description:item.description
      })
    })
    return result
  }
}
