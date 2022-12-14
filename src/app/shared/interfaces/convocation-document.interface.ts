export interface IDocumentResponseDetail{
    id:number,
    name:string,
    type:IDocumentTypeResponse,
    url:string,
    description:string
  }

  export interface IDocumentTypeResponse{
    id:number,
    name:string,
    category:string
  }
