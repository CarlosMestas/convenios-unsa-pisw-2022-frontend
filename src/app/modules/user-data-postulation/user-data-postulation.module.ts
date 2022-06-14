import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyDataComponent } from './verify-data/verify-data.component';
import { FillFileComponent } from './fill-file/fill-file.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { UserDataPostulationBodyComponent } from './user-data-postulation-body/user-data-postulation-body.component';
import {UserModule} from "../user-data-register/user-data-register.module";
import {RouterModule} from "@angular/router";
import {SteperComponent} from "../../shared/components/steper/steper.component";

// shared Components imported
import { TooltipWhiteSmallComponent } from '../../shared/components/tooltip-white-small/tooltip-white-small.component';
import { TooltipRedComponent } from '../../shared/components/tooltip-red/tooltip-red.component'
import {TooltipRedSmallComponent} from '../../shared/components/tooltip-red-small/tooltip-red-small.component'


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
    UserModule,
    RouterModule
  ],
  exports: [
    SteperComponent
  ]
})
export class UserDataPostulationModule { }
