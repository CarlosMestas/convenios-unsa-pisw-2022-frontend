import { of } from 'rxjs';

import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Admin} from "../../../shared/models/admin.model";
import {IAdmin} from "../../../shared/interfaces/admin.interface";


export class AdminHelper{
  public static ADMIN_OMBP_SESION:string = "adminOMBPSession";
  public static ADMIN_LOGIN_TOKEN:string = "adminLoginToken";
  public static ADMIN_ID_ENCODED:string = "adminIdCoded";

  protected static API_ADMIN_SERVICE_ROUTES = {
    LOGOUT:"logout",
    LOGIN:"login",
    FETCH_ADMIN:"admin"
  }

  public url = environment.url
  public isProduction = environment.production

  constructor(
    protected http:HttpClient
  ){

  }

  //INSTEAD
  saveLocalStorageSesionToken(token:string, adminId:number){
    localStorage.setItem(AdminHelper.ADMIN_LOGIN_TOKEN,token)
    localStorage.setItem(AdminHelper.ADMIN_ID_ENCODED,adminId.toString())
  }
  getLocalStorageSesionToken():string|null{
    return localStorage.getItem(AdminHelper.ADMIN_LOGIN_TOKEN)
  }
  getLocalStorageSesionId():string|null{
    return localStorage.getItem(AdminHelper.ADMIN_ID_ENCODED)
  }


  //NOT
  getNormalTokenFromUser(admin:Admin):string{
    return btoa(JSON.stringify(admin))
  }




  //INSTEAD
  decodeJWTCredential(jwtCredential:string):any {
    let decodedToken = JSON.parse(atob(jwtCredential.split('.')[1]));
    return decodedToken
  }



  errorSignIn(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: {} as IAdmin
    })
  }



  errorSignUp(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: {} as IAdmin
    })
  }

  errorFetch(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      data: {} as IAdmin
    })
  }

  errorLogout(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage
    })
  }
  /**
   * Delete user session from local storage
   */
   removeLocalStorageSesion(){
    localStorage.removeItem(AdminHelper.ADMIN_LOGIN_TOKEN)
    localStorage.removeItem(AdminHelper.ADMIN_ID_ENCODED)
  }
}
