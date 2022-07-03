import { UserData } from './../../../shared/models/user-data.model';
import { PerfilService } from './../perfil/perfil.service';
import { HttpClient } from '@angular/common/http';
import { SidenavService } from './../sidenav/sidenav.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthHelper } from './auth.helper';
import { User } from './../../../shared/models/user.model';
import { IUser } from './../../../shared/interfaces/user.interface';
import { Injectable } from "@angular/core";
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
import { BehaviorSubject, catchError, map, Observable, Subject } from "rxjs";

@Injectable({
  providedIn:'root'
})

export class AuthService extends AuthHelper{


  private user$:BehaviorSubject<UserData | null>;
  private googleAuthServiceInitialized$: BehaviorSubject<boolean>;
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private sidenavService:SidenavService,
    protected override http:HttpClient,
    private perfilService:PerfilService
  ){
    super(http)
    this.user$ = new BehaviorSubject<UserData | null>(null);
    this.googleAuthServiceInitialized$= new BehaviorSubject<boolean>(false)
    this.loadUser()
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
        auto_select: true,
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
  logout(){
    this.removeLocalStorageSesion()
    this.user$.next(null)
    this.sidenavService.sidenavUserNotLogged()
  }

  /**
   * Delete user session from local storage
   */
   removeLocalStorageSesion(){
    localStorage.removeItem(AuthHelper.USER_OMBP_SESION)
  }
  /**
   * Shows google one tap
   */
  promptGoogleOneTap(){
      if(this.user$.getValue()?.user==null){
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
    // Decoding  JWT token...
      try {
        let tempUser:User = this.getUserFromJWTCredential(response?.credential)
        this.user$.next(new UserData(tempUser,null))
        this.perfilService.fetchPerfil(tempUser.userId).subscribe(profile =>{
          this.user$.next(new UserData(this.user$.getValue()?.user,profile.data))
        })
        this.saveLocalStorageUserNormalToken(this.getNormalTokenFromUser(tempUser));
        this.sidenavService.sidenavUserLogged()
        this.router.navigate(["/home"])
      } catch (e) {
        console.error('Error while trying to decode token', e);
      }
  }

  /**
   *
   * @returns User Observable to be able to subscribe and be notified when User changes whether it's signed or not
   */
  getUser():Observable<UserData | null>{
    return this.user$.asObservable();
  }

  /**
   * Load User if it exists in local storage
   */
  private loadUser():void{
    const token = localStorage.getItem(AuthHelper.USER_OMBP_SESION)
    if(token){
      let tempUser:User = this.getUserFromNormalToken(token)
      this.user$.next(new UserData(tempUser,null))
      this.perfilService.fetchPerfil(tempUser.userId).subscribe(profile=>{
        this.user$.next(new UserData(this.user$.getValue()?.user,profile.data))
      })
      this.sidenavService.sidenavUserLogged()
    }
  }

  normalUserSignUp(email: string, password: string): Observable<
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

    /*let credential:string = JSON.stringify({gmail:gmail,password:password})
    this.http.get<IUser[]>(this.url + "users" + '?token=' + btoa(credential))*/
    //return this.http.get<IUser[]>(this.url + "users?userId=1")
    //console.log(JSON.stringify(new User(3, email,password,0,'')))
    return this.http.post<User>(this.url + "users", new User(3,email,password,0,''))
    .pipe(
      map( r =>{
        response.data = r;
        this.user$.next(new UserData(response.data,null))
        this.saveLocalStorageUserNormalToken(this.getNormalTokenFromUser(response.data))
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
  normalUserSignin(gmail:string, password:string):Observable<
  {
    error:boolean,
    msg:string,
    data:IUser[]
  }>{

    const response = {
      error:false,
      msg:'',
      data:[] as IUser[]
    };

    /*let credential:string = JSON.stringify({gmail:gmail,password:password})
    this.http.get<IUser[]>(this.url + "users" + '?token=' + btoa(credential))*/
    //return this.http.get<IUser[]>(this.url + "users?userId=1")
    return this.http.get<IUser[]>(this.url + "users" + '?userEmail=' +gmail+ '&userPassword='+ password)
    .pipe(
      map( r =>{
        response.data = r;
        this.user$.next(new UserData( response.data[0],null))
        this.saveLocalStorageUserNormalToken(this.getNormalTokenFromUser(response.data[0]))
        console.log("user id ---------", response.data[0].userId)
        this.perfilService.fetchPerfil(response.data[0].userId).subscribe(profile =>{
          this.user$.next(new UserData(this.user$.getValue()?.user,profile.data))
        })
        return response
      }),
      catchError(this.errorSignIn)
    );
  }
  isUserSigned():boolean{
    return this.user$.getValue()?.user!=null
  }
  isUserProfileCreated():boolean{
    return this.user$.getValue()?.profile!=null
  }
}
