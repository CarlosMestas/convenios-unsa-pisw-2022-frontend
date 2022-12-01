import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




// shared Components imported
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { PrimeNgModule } from '../shared/primeng.module';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { MaterialModule } from '../shared/material.module';
import {ChatbotComponent} from "./body/chatbot.component";
import {ChatbotRoutingModule} from "./chatbot.routes";

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    ChatbotComponent
  ],
  imports: [
    CommonModule,
    ChatbotRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    PrimeNgModule,
    NgxDocViewerModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [

  ]
})
export class Chatbot { }
