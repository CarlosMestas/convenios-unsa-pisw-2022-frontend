import { of } from 'rxjs';
import { IUser } from './../../../shared/interfaces/user.interface';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from "src/app/shared/models/user.model";

export class AuthHelper{
  public static USER_OMBP_SESION:string = "userOMBPSession";
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
      0,
      decodedToken.userName,
      decodedToken.userLastname,
      decodedToken.userEmail,
      '',
      0,
      decodedToken.userPicture
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
      0,
      decodedToken.given_name,
      decodedToken.family_name,
      decodedToken.email,
      '',
      0,
      decodedToken.picture
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
      data: [] as IUser[]
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
}
