import { SteperComponent } from '../../shared/components/steper/steper.component';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {FileUploadModule} from 'primeng/fileupload';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { SplitButtonModule } from 'primeng/splitbutton';
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
    SplitButtonModule
  ],
  exports:[
    AccordionModule,
    FileUploadModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    SplitButtonModule
  ]

})
export class PrimeNgModule { }
