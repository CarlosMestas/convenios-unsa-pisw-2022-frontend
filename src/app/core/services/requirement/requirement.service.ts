import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IRequirement } from "src/app/shared/interfaces/requirements/requirement.interface";
import { RequirementHelper } from "./requirement.helper";


@Injectable({
  providedIn:'root'
})
export class RequirementService extends RequirementHelper{


  constructor(protected override http:HttpClient){
    super(http)
  }

  getRequirements(id:number):Observable<
  {
    error:boolean,
    msg:string,
    data:IRequirement[]
  }>{
    const response = {
      error:false,
      msg:'',
      data:{} as IRequirement[]
    };
    const testData:IRequirement[] = [
      {
        id:1,
        description:"Haber cursado por los menos 2 años de estudios universitarios"
      },
      {
        id:2,
        description:"Tener Excelencia Académica"
      },
      {
        id:3,
        description:"Pertenecer al tercio superior"
      },
      {
        id:4,
        description:"Dominar un segundo idioma"
      }
    ]
    response.data = testData
    return of(response)
    //aquí la implementación
  }
}

