import { SharedModule } from '../shared/shared.module';
import { UserDataPostulationRoutingModule } from './user-data-postulation.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyDataComponent } from './pages/verify-data/verify-data.component';
import { FillFileComponent } from './pages/fill-file/fill-file.component';
import { UploadFilesComponent } from './pages/upload-files/upload-files.component';
import { UserDataPostulationBodyComponent } from './body/user-data-postulation-body.component';


// shared Components imported
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
    SharedModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [

  ]
})
export class UserDataPostulationModule { }
