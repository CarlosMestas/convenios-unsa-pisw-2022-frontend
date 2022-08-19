import { AuthGuard } from '../../core/guards/auth/auth.guard';
import { TimelineComponent } from './pages/detail/detail.component';
import { ConvocatoriaBodyComponent } from './body/convocatoria-body.component';
import {NewConvocationComponent} from "./pages/new-convocation/new-convocation.component";

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const ConvocatoriaRoutesValues = {
  ROUTE_CONVOCATORIA_DETAIL: "detalle",
  ROUTE_CONVOCATORIA_APPLY: "postular",
  ROUTE_CONVOCATORIA_NEW_ORDINARY: "nuevo-ordinario",
  ROUTE_CONVOCATORIA_NEW_EXTRAORDINARY: "nuevo-extraordinario"

};

const ConvocatoriaRoutes: Routes = [
  {
    path: '',
    component:ConvocatoriaBodyComponent,
    children:[
      {
        path:'',
        redirectTo:ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_DETAIL,
        pathMatch:'full'
      },
      {
        path: ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_DETAIL,
        component:TimelineComponent,
      },
      {
        path: ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_NEW_ORDINARY,
        component:NewConvocationComponent,
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
