import { SteperComponent } from '../../shared/components/steper/steper.component';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';


@NgModule({
  declarations: [
  ],
  imports: [
    AccordionModule
  ],
  exports:[
    AccordionModule,
  ]

})
export class PrimeNgModule { }
