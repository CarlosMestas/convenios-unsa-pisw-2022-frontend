import { ConvocatoriaBodyComponent } from './body/convocatoria-body.component';
import { ConvocatoriaRoutingModule } from './convocatoria.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoCanApplyComponent } from './pages/who-can-apply/who-can-apply.component';
import { RequirementsToApplyComponent } from './pages/requirements-to-apply/requirements-to-apply.component';
import { ProcessToApplyComponent } from './pages/process-to-apply/process-to-apply.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ApplyComponent } from './pages/apply/apply.component';



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
