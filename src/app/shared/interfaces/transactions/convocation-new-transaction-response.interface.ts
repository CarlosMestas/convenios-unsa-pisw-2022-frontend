import {IConvocationNew} from "../convocation/convocation-new.interface";
export interface ConvocationNewTransactionResponse{

  code:number,
  msg:string,
  data:{
    profile:IConvocationNew
  }

}
