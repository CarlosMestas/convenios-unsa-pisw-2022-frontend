import { IAppState } from './../../../ngrx/app.state';
import { AppRoutingModule } from './../../../modules/app/app.routes';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SidenavService } from './../sidenav/sidenav.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, Subject } from "rxjs";
import { Store } from '@ngrx/store';
import {IAdminLogoutResponse} from "../../../shared/interfaces/transactions/admin-logout-response.interface";
import {AdminHelper} from "./admin.helper";
import {IAdminLoginResponse} from "../../../shared/interfaces/transactions/admin-login-response.interface";
import {IAdmin} from "../../../shared/interfaces/admin.interface";
import {Admin} from "../../../shared/models/admin.model";





@Injectable({
  providedIn:'root'
})

export class AdminService extends AdminHelper{

  private admin$:BehaviorSubject<Admin|null>;
  private googleAuthServiceInitialized$: BehaviorSubject<boolean>;
  private login$:BehaviorSubject<boolean>;
  private signup$:BehaviorSubject<boolean>;

  constructor(
    private router:Router,
    private sidenavService:SidenavService,
    protected override http:HttpClient,
    private store:Store<IAppState>
  ){
    super(http)
    this.admin$ = new BehaviorSubject<Admin|null>({} as Admin);
    this.googleAuthServiceInitialized$= new BehaviorSubject<boolean>(false)
    this.login$ = new BehaviorSubject<boolean>(false)
    this.signup$ = new BehaviorSubject<boolean>(false)
  }




  /**
   *  clean user session
   */
  adminLogout():Observable<
  {
    error:boolean,
    msg:string
  }>{

    const response = {
      error:false,
      msg:''
    };

    return this.http.post<IAdminLogoutResponse>(this.url+AdminHelper.API_ADMIN_SERVICE_ROUTES.LOGOUT,{}
    )
    .pipe(
      map( r =>{
        response.msg = r.msg;
        this.removeLocalStorageSesion()
        this.sidenavService.sidenavUserNotLogged()
        this.router.navigate(["/"+AppRoutingModule.ROUTES_VALUES.ROUTE_APP_HOME])
        return response
      }),
      catchError(this.errorLogout)
    );
  }




  /**
   *
   * @returns User Observable to be able to subscribe and be notified when User changes whether it's signed or not
   */
  getAdmin():Observable<Admin | null>{
    return this.admin$.asObservable();
  }
  loadAdmin():Observable<{
    error: boolean;
    msg: string;
    data: IAdmin;
  }>{
    const adminId:number = Number(localStorage.getItem(AdminHelper.ADMIN_ID_ENCODED))
    return this.fetchAdmin(adminId)
  }


  fetchAdmin(adminId:number):Observable<
  {
    error:boolean,
    msg:string,
    data:IAdmin
  }>{
    const response = {
      error:false,
      msg:'',
      data:{} as IAdmin
    };
    return this.http.get<IAdminLoginResponse>(
      this.url+AdminHelper.API_ADMIN_SERVICE_ROUTES.FETCH_ADMIN+"/"+adminId
      )
      .pipe(
        map( r =>{
          if(r.code!=404){
            response.data = r.data.admin;
            this.sidenavService.sidenavUserLogged()
          }else{
            response.error = true;
          }
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
    data: IAdmin;
  }>{
      const adminId:number = Number(localStorage.getItem(AdminHelper.ADMIN_ID_ENCODED))
      return this.fetchAdmin(adminId)
  }

  isSesionUp(){
    const token = localStorage.getItem(AdminHelper.ADMIN_LOGIN_TOKEN)
    return token!=null
  }



  /**
   * handles when normal user Signing using email and password
   * @param gmail  user email
   * @param password user password
   * @returns
   */
  adminSignIn(email:string, password:string):Observable<
  {
    error:boolean,
    msg:string,
    data:IAdmin
  }>{
    return this.http.post<IAdminLoginResponse>(
      this.url+AdminHelper.API_ADMIN_SERVICE_ROUTES.LOGIN,
      {
        "email":email,
        "password":password
      }
    )
      .pipe(
        map( r =>{
          let tempuser:Admin = new Admin(
            r.data.admin.id,
            r.data.admin.email,
            r.data.admin.password
          )
          response.data = tempuser;
          this.sidenavService.sidenavUserLogged()
          this.saveLocalStorageSesionToken(r.data.token,r.data.admin.id)
          return response
        }),
        catchError(this.errorSignIn)
      );
    const response = {
      error:false,
      msg:'',
      data:{} as IAdmin
    };
  }

  loginStatus():Observable<boolean>{
    return this.login$.asObservable();
  }
  signupStatus():Observable<boolean>{
    return this.signup$.asObservable();
  }
  getAdminLoginToken():string|null|undefined {
    return this.getLocalStorageSesionToken()
  }
  isAdminSigned():boolean{
    return this.admin$.getValue()!=null
  }
  setLoginStatus(status:boolean){
    this.login$.next(status)
  }
  setSignUpStatus(status:boolean){
    this.signup$.next(status)
  }
}
