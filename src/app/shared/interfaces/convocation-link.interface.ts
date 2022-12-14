export interface ILinkResponseDetail{
    id:number,
    name:string,
    type:ILinkTypeResponse,
    url:string,
    description:string
  }
  export interface ILinkTypeResponse{
    id:number,
    name:string,
    category:string
  }
