import { of } from 'rxjs';
import { IUser } from './../../../shared/interfaces/user.interface';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from "src/app/shared/models/user.model";

export class AuthHelper{
  public static USER_OMBP_SESION:string = "userOMBPSession";
  public static USER_LOGIN_TOKEN:string = "userLoginToken";
  public static USER_ID_ENCODED:string = "userIdCoded";

  protected static API_AUTH_SERVICE_ROUTES = {
    LOGOUT:"logout",
    LOGIN:"login",
    SIGNUP:"register",
    FETCH_USER:"users"
  }

  public url = environment.url
  public isProduction = environment.production

  constructor(
    protected http:HttpClient
  ){

  }

  //INSTEAD
  saveLocalStorageSesionToken(token:string, userId:number){
    localStorage.setItem(AuthHelper.USER_LOGIN_TOKEN,token)
    localStorage.setItem(AuthHelper.USER_ID_ENCODED,userId.toString())
  }
  getLocalStorageSesionToken():string|null{
    return localStorage.getItem(AuthHelper.USER_LOGIN_TOKEN)
  }
  getLocalStorageSesionId():string|null{
    return localStorage.getItem(AuthHelper.USER_ID_ENCODED)
  }


  //NOT
  getNormalTokenFromUser(user:User):string{
    return btoa(JSON.stringify(user))
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
      data: {} as IUser
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
      data: {} as IUser
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
      data: {} as IUser
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
    localStorage.removeItem(AuthHelper.USER_LOGIN_TOKEN)
    localStorage.removeItem(AuthHelper.USER_ID_ENCODED)
  }
}
