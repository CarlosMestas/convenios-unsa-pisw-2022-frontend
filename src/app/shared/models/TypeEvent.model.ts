import { IListable } from "../interfaces/listable.interface";
import { ITypeEvent } from "../interfaces/type-event/type-event.interface";

export class EventType implements ITypeEvent{
  id: number;
  name: string;
  constructor(id:number,name:string){
    this.id=id
    this.name=name
  }
  static getListableFormat(items:ITypeEvent[]):IListable[]{
    let result:IListable[] =[]
    items.forEach(item=>{
      result.push({
        id:item.id,
        description:item.name
      })
    })
    return result
  }
}
