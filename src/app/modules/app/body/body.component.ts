import { SidenavService } from './../../../core/services/sidenav/sidenav.service';
import { Observable} from 'rxjs';
import { userLoadRequestAction } from './../../../ngrx/actions/auth/user-auth.actions';
import { IAppState } from './../../../ngrx/app.state';
import { Store } from '@ngrx/store';
import { AuthService } from './../../../core/services/auth/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SideNavToggle } from './../../../shared/interfaces/sidenav.interface';
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';
import { dialogProfileNotConfiguredSelector } from 'src/app/ngrx/selectors/profile/profile.selector';
import { dialogUserRegisterWrongEmailSelector } from 'src/app/ngrx/selectors/auth/user-auth.selector';
import { MatIconRegistry, SafeResourceUrlWithIconOptions } from '@angular/material/icon';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

isSideNavCollapsed:boolean = false;
screenWidth = 0;
dialogProfileNotConfigured$: Observable<boolean>
dialogUserRegisterWrongEmail$: Observable<boolean>
  getClass():string{
    let styleClass = ''
    if(!this.isSideNavCollapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed';
    }else if(!this.isSideNavCollapsed &&this.screenWidth <=768 && this.screenWidth > 0){
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
  constructor(
    private titleService:Title,
    private authService:AuthService,
    private store:Store<IAppState>,
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
    private sidenavService:SidenavService
    ) {
      this.dialogProfileNotConfigured$ = new Observable<boolean>()
      this.dialogUserRegisterWrongEmail$ = new Observable<boolean>()

      this.matIconRegistry.addSvgIconResolver(
        (
          name: string,
          namespace: string
        ): SafeResourceUrl | SafeResourceUrlWithIconOptions | null => {
          switch (namespace) {
            case 'mat':
              return this.domSanitizer.bypassSecurityTrustResourceUrl(
                `assets/img/icons/material-design-icons/two-tone/${name}.svg`
              );

            case 'logo':
              return this.domSanitizer.bypassSecurityTrustResourceUrl(
                `assets/img/icons/logos/${name}.svg`
              );

            case 'flag':
              return this.domSanitizer.bypassSecurityTrustResourceUrl(
                `assets/img/icons/flags/${name}.svg`
              );
            default:{
              return null
            }
          }
        }
      );

    }

  onToggleSideNav(sideNavData:SideNavToggle,):void{
    this.isSideNavCollapsed = sideNavData.collapsed
    this.screenWidth = sideNavData.screenWidth
  }
  ngOnInit(): void {
    console.log("NG ON INIT calling")
    // @ts-ignore
    window.onGoogleLibraryLoad  = () => {
      this.authService.initializeGoogleAuthService()
      this.authService.promptGoogleOneTap()
    }

    this.sidenavService.collapsed$.subscribe(data=>{
      this.onToggleSideNav(data)
    })

    this.store.dispatch(userLoadRequestAction())
    this.dialogProfileNotConfigured$ = this.store.select(dialogProfileNotConfiguredSelector)
    this.dialogUserRegisterWrongEmail$ =this.store.select(dialogUserRegisterWrongEmailSelector)

  }
}
