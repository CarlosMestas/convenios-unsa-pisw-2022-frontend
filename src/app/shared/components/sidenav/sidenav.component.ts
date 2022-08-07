import { userLogoutRequestAction } from './../../../ngrx/actions/auth/user-auth.actions';
import { IAppState } from './../../../ngrx/app.state';
import { userAuthUserStateSelector } from './../../../ngrx/selectors/auth/user-auth.selector';
import { Store } from '@ngrx/store';
import { IUser } from './../../interfaces/user.interface';
import { Observable } from 'rxjs';
import { SidenavItem } from './../../interfaces/sidenav-item.interface';
import { SidenavService } from './../../../core/services/sidenav/sidenav.service';
import { Component, OnInit, Output,EventEmitter, HostListener } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';


//interfaces
import { SideNavToggle } from './../../interfaces/sidenav.interface';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  faBars = faBars
  //sidenavData = sidenavItems;
  sidenavData:{[name:string]:SidenavItem} ={}

  user$:Observable<IUser|null>;

  collapsed:boolean = true
  screenWidth:number = 0
  @Output() OnToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  constructor(
    private sidenavService:SidenavService,
    private store:Store<IAppState>
  ) {
    this.user$ = new Observable<IUser>()
  }

  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth = window.innerWidth
    if(this.screenWidth <= 768){
      this.collapsed = true;
      this.OnToggleSideNav.emit({
        collapsed:this.collapsed,
        screenWidth:this.screenWidth
      })
    }
  }

  toggleSideNav():void{
    this.collapsed =!this.collapsed
    this.OnToggleSideNav.emit({
      collapsed:this.collapsed,
      screenWidth:this.screenWidth
    })
  }


  ngOnInit(): void {
    this.screenWidth = window.innerWidth;

    this.user$ = this.store.select(userAuthUserStateSelector)//TODO: user selector return and observable

    this.sidenavService.getSidenavItems().subscribe(items=>{
      this.sidenavData = items
      console.log(items["home"])
    })



  }

  cerrarSesion(){
    this.store.dispatch(userLogoutRequestAction())//TODO: call user logout action
  }


}
