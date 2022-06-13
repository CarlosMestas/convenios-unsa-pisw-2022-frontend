import { ApplyComponent } from './apply/apply.component';
import { ContactComponent } from './contact/contact.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ProcessToApplyComponent } from './process-to-apply/process-to-apply.component';
import { RequirementsToApplyComponent } from './requirements-to-apply/requirements-to-apply.component';
import { WhoCanApplyComponent } from './who-can-apply/who-can-apply.component';
import { ConvocatoriaBodyComponent } from './convocatoria-body/convocatoria-body.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const ConvocatoriaRoutes: Routes = [
  {
    path: '',
    component:ConvocatoriaBodyComponent,
    children:[
      {
        path:'',
        redirectTo:'cronograma',
        pathMatch:'full'
      },
      {
        path: 'dirigido-a',
        component:WhoCanApplyComponent,
      },
      {
        path: 'requisitos-para-postular',
        component:RequirementsToApplyComponent,
      },
      {
        path: 'proceso-de-aplicacion',
        component:ProcessToApplyComponent,
      },
      {
        path: 'cronograma',
        component:TimelineComponent,
      },
      {
        path: 'contacto',
        component:ContactComponent,
      },
      {
        path:'postular',
        component:ApplyComponent
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(ConvocatoriaRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class ConvocatoriaRoutingModule { }
