import { ConvocatoriaBodyComponent } from './body/convocatoria-body.component';
import { ConvocatoriaRoutingModule } from './convocatoria.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './pages/detail/detail.component';
import { ApplyComponent } from './pages/apply/apply.component';
import {NewConvocationComponent} from "./pages/new-convocation/new-convocation.component";


import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TabViewModule} from 'primeng/tabview';
import { SharedModule } from '../shared/shared.module';
import {ReactiveFormsModule} from "@angular/forms";
import { DetailPiveComponent } from './pages/detail-pive/detail-pive.component';
import { DetailPivdoComponent } from './pages/detail-pivdo/detail-pivdo.component';
import { DetailEstVanComponent } from './pages/detail-est-van/detail-est-van.component';
import { DetailEstVienenComponent } from './pages/detail-est-vienen/detail-est-vienen.component';
import { DetailDocVanComponent } from './pages/detail-doc-van/detail-doc-van.component';
import { DetailDocVienenComponent } from './pages/detail-doc-vienen/detail-doc-vienen.component';
import {MatListModule} from "@angular/material/list";
import { NewConvocationDetailComponent } from './pages/new-convocation-detail/new-convocation-detail.component';

@NgModule({
  declarations: [
    DetailComponent,
    ApplyComponent,
    ConvocatoriaBodyComponent,
    NewConvocationComponent,
    ConvocatoriaBodyComponent,
    DetailPiveComponent,
    DetailPivdoComponent,
    DetailEstVanComponent,
    DetailEstVienenComponent,
    DetailDocVanComponent,
    DetailDocVienenComponent,
    NewConvocationDetailComponent
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
        ReactiveFormsModule,
        MatListModule
    ]
})
export class ConvocatoriaModule { }
