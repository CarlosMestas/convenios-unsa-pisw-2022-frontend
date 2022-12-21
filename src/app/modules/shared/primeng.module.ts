import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {FileUploadModule} from 'primeng/fileupload';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';

import { SplitButtonModule } from 'primeng/splitbutton';
import {StepsModule} from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import {TooltipModule} from 'primeng/tooltip';
import { MatRippleModule } from '@angular/material/core';
import {ChipsModule} from 'primeng/chips';

import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [
  ],
  imports: [
    AccordionModule,
    FileUploadModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    SplitButtonModule,
    StepsModule,
    ToastModule,
    TooltipModule,
    MatRippleModule,
    ChipsModule,
    ConfirmDialogModule
  ],
  exports:[
    AccordionModule,
    FileUploadModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    SplitButtonModule,
    StepsModule,
    ToastModule,
    TooltipModule,
    MatRippleModule,
    ChipsModule,
    ConfirmDialogModule
  ]

})
export class PrimeNgModule { }
