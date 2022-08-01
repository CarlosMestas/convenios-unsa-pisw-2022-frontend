export interface IUserLoginResponse{
  code:number,
  msg:string,
  data:{
    user:{
      id: number,
      email:string
    },
    token:string
  }
}
