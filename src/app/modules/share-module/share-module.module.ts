import { SteperComponent } from './../../shared/components/steper/steper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [SteperComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SteperComponent
  ]

})
export class ShareModuleModule { }
