import { SharedModule } from '../shared/shared.module';
import { UserDataPostulationRoutingModule } from './user-data-postulation.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDataPostulationBodyComponent } from './body/user-data-postulation-body.component';


// shared Components imported
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { PrimeNgModule } from '../shared/primeng.module';


// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    UserDataPostulationBodyComponent
  ],
  imports: [
    CommonModule,
    UserDataPostulationRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    PrimeNgModule
  ],
  exports: [

  ]
})
export class UserDataPostulationModule { }
