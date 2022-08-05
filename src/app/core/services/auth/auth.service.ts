
import { DialogErrorEmailComponent } from './../../../shared/components/dialog-error-email/dialog-error-email.component';
import { DialogYesNoComponent } from './../../../shared/components/dialog-yes-no/dialog-yes-no.component';

import { IUserRegisterResponse } from './../../../shared/interfaces/transactions/user-register-response.interface';
import { IUserLogoutResponse } from './../../../shared/interfaces/transactions/user-logout-response.interface';
import { IUserLoginResponse } from './../../../shared/interfaces/transactions/user-login-response.interface';
import { AppRoutingModule } from './../../../modules/app/app.routes';
import { ProfileService } from '../profile/profile.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SidenavService } from './../sidenav/sidenav.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AuthHelper } from './auth.helper';
import { User } from './../../../shared/models/user.model';
import { IUser } from './../../../shared/interfaces/user.interface';
import { Injectable } from "@angular/core";
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
import { BehaviorSubject, catchError, map, Observable, Subject } from "rxjs";

import {MatDialog} from '@angular/material/dialog';



@Injectable({
  providedIn:'root'
})

export class AuthService extends AuthHelper{

  private user$:BehaviorSubject<User|null>;
  private googleAuthServiceInitialized$: BehaviorSubject<boolean>;
  private login$:BehaviorSubject<boolean>;
  private signup$:BehaviorSubject<boolean>;
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private sidenavService:SidenavService,
    protected override http:HttpClient,
    private matDialog:MatDialog
  ){
    super(http)
    this.user$ = new BehaviorSubject<User|null>({} as User);
    this.googleAuthServiceInitialized$= new BehaviorSubject<boolean>(false)
    this.login$ = new BehaviorSubject<boolean>(false)
    this.signup$ = new BehaviorSubject<boolean>(false)
  }

  /**
   * initialize our google client configuration
   */
  initializeGoogleAuthService(){
      // @ts-ignore
      google.accounts.id.initialize({
        // Ref: https://developers.google.com/identity/gsi/web/reference/js-reference#IdConfiguration
        client_id: '759619919579-k8fci80tiq63alhfh9ome4dihlaiqm8q.apps.googleusercontent.com',
        callback: this.handleCredentialResponse.bind(this), // Whatever function you want to trigger...
        auto_select: false,
        cancel_on_tap_outside:false
      });
      this.googleAuthServiceInitialized$.next(true);
  }
  /**
   *
   * @returns a Boolean Observable to know if google services are initialized and if our client configured
   */
  isGoogleAuthServiceInitialized():Observable<boolean>{
    return this.googleAuthServiceInitialized$.asObservable();
  }

  /**
   *  clean user session
   */
  userLogout():Observable<
  {
    error:boolean,
    msg:string
  }>{

    const response = {
      error:false,
      msg:''
    };

    return this.http.post<IUserLogoutResponse>(this.url+AuthHelper.API_AUTH_SERVICE_ROUTES.LOGOUT,{}
    )
    .pipe(
      map( r =>{
        console.log("Logout response")
        console.log(r)
        response.msg = r.msg;
        this.removeLocalStorageSesion()
        this.user$.next(null)
        this.sidenavService.sidenavUserNotLogged()
        this.router.navigate(["/"+AppRoutingModule.ROUTES_VALUES.ROUTE_APP_HOME])
        return response
      }),
      catchError(this.errorLogout)
    );
  }


  /**
   * Shows google one tap
   */
  promptGoogleOneTap(){
      if(this.user$.getValue()==null){
        // @ts-ignore
        google.accounts.id.prompt((notification: PromptMomentNotification) => {
          if (notification.isSkippedMoment() && notification.getSkippedReason() === 'user_cancel'){
            // @ts-ignore
            console.log("user canceled------------------")
          }
          if (notification.getDismissedReason() === 'credential_returned') {
          }
        });
      }
  }
  /**
   * catch callback when user signin
   * @param response
   */
  handleCredentialResponse(response: CredentialResponse) {
    try {
      if(this.router.url == "/"+AppRoutingModule.ROUTES_VALUES.ROUTE_APP_SIGNUP){
          let jwtDecodedToken = this.decodeJWTCredential(response?.credential)
          console.log("correoooo",jwtDecodedToken.email.toString().split('@')[1])
          if(jwtDecodedToken.email.toString().split('@')[1]=="unsa.edu.pe"){
            this.userSignUp(jwtDecodedToken.email,jwtDecodedToken.picture).subscribe()
          }else{
            this.matDialog.open(DialogErrorEmailComponent)
          }
      }else if(this.router.url == "/"+AppRoutingModule.ROUTES_VALUES.ROUTE_APP_SINGIN){
          let jwtDecodedToken = this.decodeJWTCredential(response?.credential)
          this.userSignIn(jwtDecodedToken.email).subscribe()
      }
    } catch (e) {
      console.error('Error while trying to decode token', e);
    }
  }

  /**
   *
   * @returns User Observable to be able to subscribe and be notified when User changes whether it's signed or not
   */
  getUser():Observable<User | null>{
    return this.user$.asObservable();
  }


  fetchUser(userId:number):Observable<
  {
    error:boolean,
    msg:string,
    data:IUser
  }>{
    const response = {
      error:false,
      msg:'',
      data:{} as IUser
    };
    return this.http.get<IUserLoginResponse>(
      this.url+AuthHelper.API_AUTH_SERVICE_ROUTES.FETCH_USER+"/"+userId
      )
      .pipe(
        map( r =>{
          response.data = new User(r.data.user.id,r.data.user.email);
          this.user$.next(response.data)
          return response
        }),
        catchError(this.errorSignIn)
      );
  }

  /**
   * Load User if it exists in local storage
   */
  loadUser():Observable<{
    error: boolean;
    msg: string;
    data: IUser;
  }>{
      const userId:number = Number(localStorage.getItem(AuthHelper.USER_ID_ENCODED))
      this.sidenavService.sidenavUserLogged()
      return this.fetchUser(userId)
  }

  isSesionUp(){
    const token = localStorage.getItem(AuthHelper.USER_LOGIN_TOKEN)
    return token!=null
  }

  userSignUp(email: string, image:string): Observable<
  {
    error:boolean,
    msg:string,
    data:IUser
  }> {
    const response = {
      error:false,
      msg:'',
      data:{} as IUser
    };

    return this.http.post<IUserRegisterResponse>(
      this.url+AuthHelper.API_AUTH_SERVICE_ROUTES.SIGNUP,
      {
        "email":email,
        "image":image
      }
    )
    .pipe(
      map( r =>{
        console.log(r)
        response.data = new User(r.data.user.id,r.data.user.email);
        this.user$.next(response.data)
        this.sidenavService.sidenavUserLogged()
        this.saveLocalStorageSesionToken(r.data.token,r.data.user.id)
        //this.saveLocalStorageUserNormalToken(this.getNormalTokenFromUser(response.data))
        this.signup$.next(true)
        return response
      }),
      catchError(this.errorSignUp)
    );

  }

  /**
   * handles when normal user Signing using email and password
   * @param gmail  user email
   * @param password user password
   * @returns
   */
  userSignIn(email:string):Observable<
  {
    error:boolean,
    msg:string,
    data:IUser
  }>{

    const response = {
      error:false,
      msg:'',
      data:{} as IUser
    };
    return this.http.post<IUserLoginResponse>(
      this.url+AuthHelper.API_AUTH_SERVICE_ROUTES.LOGIN,
    {
      "email":email
    }
    )
    .pipe(
      map( r =>{
        console.log(r)
        let tempuser:User = new User(
          r.data.user.id,
          r.data.user.email
        )
        response.data = tempuser;
        this.user$.next(response.data)
        this.sidenavService.sidenavUserLogged()
        this.saveLocalStorageSesionToken(r.data.token,r.data.user.id)
        this.login$.next(true)
        return response
      }),
      catchError(this.errorSignIn)
    );
  }

  loginStatus():Observable<boolean>{
    return this.login$.asObservable();
  }
  signupStatus():Observable<boolean>{
    return this.signup$.asObservable();
  }
  getUserLoginToken():string|null|undefined {
    return this.getLocalStorageSesionToken()
  }
  isUserSigned():boolean{
    return this.user$.getValue()!=null
  }
  isUserProfileCreated():boolean{
    return this.user$.getValue()!=null
  }
  setLoginStatus(status:boolean){
    this.login$.next(status)
  }
  setSignUpStatus(status:boolean){
    this.signup$.next(status)
  }
}
