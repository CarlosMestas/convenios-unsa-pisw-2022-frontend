import { ConvocatoriaBodyComponent } from './body/convocatoria-body.component';
import { ConvocatoriaRoutingModule } from './convocatoria.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './pages/detail/detail.component';
import { ApplyComponent } from './pages/apply/apply.component';
import {NewConvocationComponent} from "./pages/new-convocation/new-convocation.component";


import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TabViewModule} from 'primeng/tabview';
import { SharedModule } from '../shared/shared.module';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TimelineComponent,
    ApplyComponent,
    ConvocatoriaBodyComponent,
    NewConvocationComponent
  ],
    imports: [
        CommonModule,
        ConvocatoriaRoutingModule,
        TimelineModule,
        CardModule,
        ButtonModule,
        SplitButtonModule,
        TabViewModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class ConvocatoriaModule { }
