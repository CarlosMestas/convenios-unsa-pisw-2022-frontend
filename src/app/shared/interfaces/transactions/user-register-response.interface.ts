export interface IUserRegisterResponse{
  code:number,//200
  msg:string,//"ok"
  data:{
    user:{
      id: number,
      email:string
    }
    token:string
  }
}
