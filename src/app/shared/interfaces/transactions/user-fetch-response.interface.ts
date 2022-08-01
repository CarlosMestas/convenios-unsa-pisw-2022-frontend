export interface IUserFetchResponse{
  code:number,
  msg:string,
  data:{
    user:{
      id: number,
      email:string
    }
  }
}
