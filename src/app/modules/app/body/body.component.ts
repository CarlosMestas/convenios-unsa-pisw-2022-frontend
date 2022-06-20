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
  constructor(private titleService:Title) { }

  onToggleSideNav(sideNavData:SideNavToggle):void{
    this.isSideNavCollapsed = sideNavData.collapsed
    this.screenWidth = sideNavData.screenWidth
  }
  ngOnInit(): void {
    this.titleService.setTitle('Home')
  }

}
