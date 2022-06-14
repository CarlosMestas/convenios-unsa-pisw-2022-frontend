import { ShareModuleModule } from './../share-module/share-module.module';
import { UserDataPostulationRoutingModule } from './user-data-postulation.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyDataComponent } from './verify-data/verify-data.component';
import { FillFileComponent } from './fill-file/fill-file.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { UserDataPostulationBodyComponent } from './user-data-postulation-body/user-data-postulation-body.component';


import {SteperComponent} from "../../shared/components/steper/steper.component";

// shared Components imported
import { TooltipWhiteSmallComponent } from '../../shared/components/tooltip-white-small/tooltip-white-small.component';
import { TooltipRedComponent } from '../../shared/components/tooltip-red/tooltip-red.component'
import {TooltipRedSmallComponent} from '../../shared/components/tooltip-red-small/tooltip-red-small.component'
import {UserModule} from "../user-data-register/user-data-register.module";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    VerifyDataComponent,
    FillFileComponent,
    UploadFilesComponent,
    UserDataPostulationBodyComponent
  ],
  imports: [
    CommonModule,
    UserDataPostulationRoutingModule,
    ShareModuleModule,
    UserModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [

  ]
})
export class UserDataPostulationModule { }
