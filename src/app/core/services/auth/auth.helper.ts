import { of } from 'rxjs';
import { IUser } from './../../../shared/interfaces/user.interface';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from "src/app/shared/models/user.model";

export class AuthHelper{
  public static USER_OMBP_SESION:string = "userOMBPSession";
  public static USER_LOGIN_TOKEN:string = "userLoginToken";

  protected static API_AUTH_SERVICE_ROUTES = {
    LOGOUT:"logout",
    LOGIN:"login",
    SIGNUP:"users"
  }


  public url = environment.url
  public isProduction = environment.production
  constructor(
    protected http:HttpClient
  ){

  }

  saveLocalStorageUserNormalToken(token:string){
    localStorage.setItem(AuthHelper.USER_OMBP_SESION,token)
  }
  getNormalTokenFromUser(user:User):string{
    return btoa(JSON.stringify(user))
  }
  /**
   * takes a normal token and return a User created with this data
   * @param token
   * @returns
   */
  getUserFromNormalToken(token:string){
    let decodedToken = JSON.parse(atob(token));
    return new User(
      decodedToken.token,
      decodedToken.id,
      decodedToken.email,
      decodedToken.email_verified_at,
      decodedToken.status
    )
  }
  /**
  * takes a jwt credential and returns User created with this data
  * @param jwtCredential is a JWT credential
  * @returns
  */
  getUserFromJWTCredential(jwtCredential:string){
    let decodedToken = JSON.parse(atob(jwtCredential.split('.')[1]));
    return new User(
      decodedToken.sub,
      null,
      decodedToken.email,
      null,
      null
    )
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
    localStorage.removeItem(AuthHelper.USER_OMBP_SESION)
  }
}
