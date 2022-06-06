//Modules imported
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


//Module local Components imported
import { UserJoinComponent } from './user-join/user-join.component';
// shared Components imported
import { TooltipWhiteSmallComponent } from './../../shared/components/tooltip-white-small/tooltip-white-small.component';
import { TooltipRedComponent } from './../../shared/components/tooltip-red/tooltip-red.component'
import {TooltipRedSmallComponent} from './../../shared/components/tooltip-red-small/tooltip-red-small.component'


//user-routing
import { UserRoutingModule } from './user.routes';

@NgModule({
  declarations: [
    UserJoinComponent,
    TooltipWhiteSmallComponent,
    TooltipRedComponent,
    TooltipRedSmallComponent
  ],
  imports: [
    UserRoutingModule,
    FontAwesomeModule
  ],
  exports:[
  ]
})
export class UserModule { }
