import { SidenavItemComponent } from './../../shared/components/sidenav-item/sidenav-item.component';
import { SidenavUserInfoComponent } from './../../shared/components/sidenav-user-info/sidenav-user-info.component';
import { TooltipRedSmallComponent } from '../../shared/components/tooltip-red-small/tooltip-red-small.component';
import { TooltipWhiteSmallComponent } from '../../shared/components/tooltip-white-small/tooltip-white-small.component';
import { SteperComponent } from '../../shared/components/steper/steper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    SteperComponent,
    TooltipWhiteSmallComponent,
    TooltipRedSmallComponent,
    SidenavUserInfoComponent,
    SidenavItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports:[
    SteperComponent,
    TooltipWhiteSmallComponent,
    TooltipRedSmallComponent,
    SidenavUserInfoComponent,
    SidenavItemComponent
  ]

})
export class SharedModule { }
