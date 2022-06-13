import { ConvocatoriaBodyComponent } from './convocatoria-body/convocatoria-body.component';
import { ConvocatoriaRoutingModule } from './convocatoria.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoCanApplyComponent } from './who-can-apply/who-can-apply.component';
import { RequirementsToApplyComponent } from './requirements-to-apply/requirements-to-apply.component';
import { ProcessToApplyComponent } from './process-to-apply/process-to-apply.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ContactComponent } from './contact/contact.component';
import { ApplyComponent } from './apply/apply.component';



import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [
    WhoCanApplyComponent,
    RequirementsToApplyComponent,
    ProcessToApplyComponent,
    TimelineComponent,
    ContactComponent,
    ApplyComponent,
    ConvocatoriaBodyComponent
  ],
  imports: [
    CommonModule,
    ConvocatoriaRoutingModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    SplitButtonModule,
    TabViewModule
  ]
})
export class ConvocatoriaModule { }
