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
    TooltipRedSmallComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports:[
    SteperComponent,
    TooltipWhiteSmallComponent,
    TooltipRedSmallComponent
  ]

})
export class SharedModule { }
