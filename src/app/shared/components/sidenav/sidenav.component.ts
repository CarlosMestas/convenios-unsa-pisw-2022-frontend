import { Component, OnInit, Output,EventEmitter, HostListener } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { sidenavItems } from 'src/app/core/mocks/items-sidenav.mock';


//interfaces
import { SideNavToggle } from './../../interfaces/sidenav.interface';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  faBars = faBars
  sidenavData = sidenavItems;

  collapsed:boolean = true
  screenWidth:number = 0
  @Output() OnToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();


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
  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
}
