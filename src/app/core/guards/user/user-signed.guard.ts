import { AuthHelper } from './../../services/auth/auth.helper';
import { User } from 'src/app/shared/models/user.model';
import { AppRoutingModule } from './../../../modules/app/app.routes';
import { IAppState } from 'src/app/ngrx/app.state';
import { Store } from '@ngrx/store';
import { AuthService } from './../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { showNotificationAction } from 'src/app/ngrx/actions/notifications/dialog-notifications.actions';
import { DATADialogNotifications } from 'src/app/shared/enum/dialog-notifications.enum';

@Injectable({
  providedIn: 'root'
})
export class UserSignedGuard implements CanActivate {
  constructor(
    private authService:AuthService,
    private router:Router,
    private store:Store<IAppState>
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let user:User|null =AuthHelper.getLocalStorageSesionUser()
      if(user){
        return this.authService.userSignIn(user.email).pipe(map(data=>{
          return !data.error
        }))
      }else{
        this.store.dispatch(showNotificationAction(DATADialogNotifications.USER_NOT_LOGGED))
        this.router.navigate(['/'+AppRoutingModule.ROUTES_VALUES.ROUTE_APP_SINGIN])
        return false
      }
  }

}
