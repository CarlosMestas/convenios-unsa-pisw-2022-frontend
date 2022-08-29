import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { IRequirement } from "src/app/shared/interfaces/requirements/requirement.interface";
import { RequirementHelper } from "./requirement.helper";


@Injectable({
  providedIn:'root'
})
export class RequirementService extends RequirementHelper{


  constructor(protected override http:HttpClient){
    super(http)
  }

  getAllRequirements():Observable<
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

    return this.http.get<{
      code:number,
      msg:string,
      data:IRequirement[]
    }>(this.url+ RequirementHelper.API_REQUIREMENT_SERVICE_ROUTES.GET_ALL_REQUIREMENTS)
    .pipe(
      map( resp =>{
        response.data=resp.data
        return response
      }),
      catchError(this.errorGetRequirements)
    )
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

    const params:HttpParams = new HttpParams()
    params.set("id",id)
    return this.http.get<{
      code:number,
      msg:string,
      data:IRequirement[]
    }>(this.url+ RequirementHelper.API_REQUIREMENT_SERVICE_ROUTES.GET_REQUIREMENTS,{params})
    .pipe(
      map( resp =>{
        response.data=resp.data
        return response
      }),
      catchError(this.errorGetRequirements)
    )

  }
  postRequirement(requirement:IRequirement):Observable<
  {
    error:boolean,
    msg:string,
    data:IRequirement
  }>{
    const response = {
      error:false,
      msg:'',
      data:{} as IRequirement
    };

    return this.http.post<{
      code:number,
      msg:string,
      data:IRequirement
    }>(this.url + RequirementHelper.API_REQUIREMENT_SERVICE_ROUTES.POST_REQUIREMENT,requirement)
    .pipe(
      map( resp=>{
          console.log(resp)
          response.data=resp.data
          return response
        }
      ),
      catchError(this.error)
    )
  }
}

