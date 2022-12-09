import { MaterialModule } from './../../../shared/material.module';
import { PrimeNgModule } from './../../../shared/primeng.module';
import { SharedModule } from './../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shared Components imported
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { BodyComponent } from './body/body.component';
import { PostulationCoevanRoutingModule } from './postulation-coevan.routes';
import { PostulationComponent } from './pages/postulation/postulation.component';

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    BodyComponent,
    PostulationComponent
  ],
  imports: [
    CommonModule,
    PostulationCoevanRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    PrimeNgModule,
    NgxDocViewerModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [

  ]
})
export class PostulationCoevanModule { }
