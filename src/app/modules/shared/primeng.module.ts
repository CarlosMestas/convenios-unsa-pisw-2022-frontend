import { SteperComponent } from '../../shared/components/steper/steper.component';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {FileUploadModule} from 'primeng/fileupload';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
@NgModule({
  declarations: [
  ],
  imports: [
    AccordionModule,
    FileUploadModule,
    ButtonModule,
    TableModule,
    InputTextModule,
  ],
  exports:[
    AccordionModule,
    FileUploadModule,
    ButtonModule,
    TableModule,
    InputTextModule
  ]

})
export class PrimeNgModule { }
