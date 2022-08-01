import { AuthGuard } from '../../core/guards/auth/auth.guard';
import { ApplyComponent } from './pages/apply/apply.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { ProcessToApplyComponent } from './pages/process-to-apply/process-to-apply.component';
import { RequirementsToApplyComponent } from './pages/requirements-to-apply/requirements-to-apply.component';
import { WhoCanApplyComponent } from './pages/who-can-apply/who-can-apply.component';
import { ConvocatoriaBodyComponent } from './body/convocatoria-body.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const ConvocatoriaRoutesValues = {
  ROUTE_CONVOCATORIA_SCHEDULE: "cronograma",
  ROUTE_CONVOCATORIA_WHO_CAN_APPLY: "dirigido-a",
  ROUTE_CONVOCATORIA_REQUIREMENTS_TO_APPLY: "requisitos-para-postular",
  ROUTE_CONVOCATORIA_PROCESS_TO_APPLY: "proceso-de-aplicacion",
  ROUTE_CONVOCATORIA_CONTACT: "contacto",
  ROUTE_CONVOCATORIA_APPLY: "postular"
};

const ConvocatoriaRoutes: Routes = [
  {
    path: '',
    component:ConvocatoriaBodyComponent,
    children:[
      {
        path:'',
        redirectTo:ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_SCHEDULE,
        pathMatch:'full'
      },
      {
        path: ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_WHO_CAN_APPLY,
        component:WhoCanApplyComponent,
      },
      {
        path: ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_REQUIREMENTS_TO_APPLY,
        component:RequirementsToApplyComponent,
      },
      {
        path: ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_PROCESS_TO_APPLY,
        component:ProcessToApplyComponent,
      },
      {
        path: ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_SCHEDULE,
        component:TimelineComponent,
      },
      {
        path: ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_CONTACT,
        component:ContactComponent,
      },
      {
        path: ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_APPLY,
        loadChildren:()=>import('../postulation/user-data-postulation.module').then(m => m.UserDataPostulationModule),
        canActivate:[AuthGuard]
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
export class ConvocatoriaRoutingModule {
  public static ROUTES_VALUES = ConvocatoriaRoutesValues;
}
