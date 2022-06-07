

import { Component } from '@angular/core';

//interfaces
import { SideNavToggle } from './../shared/interfaces/sidenav.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'convenios-unsa-pisw-2022-frontend';


  isSideNavCollapsed:boolean = false
  screenWidth = 0

  onToggleSideNav(sideNavData:SideNavToggle):void{
    this.isSideNavCollapsed = sideNavData.collapsed
    this.screenWidth = sideNavData.screenWidth
  }

}

