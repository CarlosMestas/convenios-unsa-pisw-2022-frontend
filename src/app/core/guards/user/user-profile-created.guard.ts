import { AuthHelper } from './../../services/auth/auth.helper';
import { User } from 'src/app/shared/models/user.model';
import { AppRoutingModule } from './../../../modules/app/app.routes';
import { DATADialogNotifications } from 'src/app/shared/enum/dialog-notifications.enum';
import { showNotificationAction } from './../../../ngrx/actions/notifications/dialog-notifications.actions';
import { IAppState } from 'src/app/ngrx/app.state';
import { Store } from '@ngrx/store';
import { AuthService } from './../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileConfiguredGuard implements CanActivate {

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
        this.store.dispatch(showNotificationAction(DATADialogNotifications.POSTULATION_PROFILE_NOT_CONFIGURED))
        this.router.navigate(['/'+AppRoutingModule.ROUTES_VALUES.ROUTE_APP_REGISTER_USER_DATA])
        return false
      }
  }

}
