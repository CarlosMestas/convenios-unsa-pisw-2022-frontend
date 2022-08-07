import { userLoadRequestAction } from './../../../ngrx/actions/auth/user-auth.actions';
import { IAppState } from './../../../ngrx/app.state';
import { Store } from '@ngrx/store';
import { AuthService } from './../../../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { SideNavToggle } from './../../../shared/interfaces/sidenav.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

isSideNavCollapsed:boolean = false;
screenWidth = 0;

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
    private store:Store<IAppState>
    ) { }

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

    this.store.dispatch(userLoadRequestAction())

    // if(this.authService.isSesionUp()){
    //   this.authService.loadUser().subscribe(resp =>{
    //     console.log(resp.data)
    //   })
    // }
  }
}
