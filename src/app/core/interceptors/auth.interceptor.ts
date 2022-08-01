import { AuthService } from './../services/auth/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

const TOKEN = "Accept"

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = request
    const token = this.authService.getUserLoginToken()
    if( token !=null){
      authReq = request.clone({setHeaders:{
        Authorization:"Bearer " + token
      }})
      console.log(authReq)
    }else{
      console.log("token is null")
    }
    return next.handle(authReq);
  }
}
export const AuthInterceptorProviders = [
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }
]
