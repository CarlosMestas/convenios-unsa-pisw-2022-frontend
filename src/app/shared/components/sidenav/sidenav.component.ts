import { UserData } from './../../models/user-data.model';
import { SidenavItem } from './../../interfaces/sidenav-item.interface';
import { SidenavService } from './../../../core/services/sidenav/sidenav.service';
import { AuthService } from './../../../core/services/auth/auth.service';
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

  user:UserData | null = null;

  collapsed:boolean = true
  screenWidth:number = 0
  @Output() OnToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  constructor(
    private authService:AuthService,
    private sidenavService:SidenavService
  ) {

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
    this.authService.getUser().subscribe(user =>{
      this.user = user
      console.log(this.user)
    });
    this.sidenavService.getSidenavItems().subscribe(items=>{
      this.sidenavData = items
      console.log(items["home"])
    })

  }
  cerrarSesion(){
    this.authService.logout().subscribe(data =>{
    })
  }
}
