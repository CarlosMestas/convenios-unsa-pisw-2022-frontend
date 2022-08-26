import { NewConvocationDetailComponent } from './pages/new-convocation-detail/new-convocation-detail.component';
import { AuthGuard } from '../../core/guards/auth/auth.guard';
import { DetailComponent } from './pages/detail/detail.component';
import { ConvocatoriaBodyComponent } from './body/convocatoria-body.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DetailPiveComponent } from './pages/detail-pive/detail-pive.component';
import { DetailPivdoComponent } from './pages/detail-pivdo/detail-pivdo.component';
import { DetailDocVienenComponent } from './pages/detail-doc-vienen/detail-doc-vienen.component';
import { DetailDocVanComponent } from './pages/detail-doc-van/detail-doc-van.component';
import { DetailEstVienenComponent } from './pages/detail-est-vienen/detail-est-vienen.component';
import { DetailEstVanComponent } from './pages/detail-est-van/detail-est-van.component';
import {NewConvocationComponent} from "./pages/new-convocation/new-convocation.component";

const ConvocatoriaRoutesValues = {
  ROUTE_CONVOCATORIA_DETAIL: "detalle",
  ROUTE_CONVOCATORIA_APPLY: "postular",
  ROUTE_CONVOCATORIA_NEW: "nuevo",
  ROUTE_CONVOCATORIA_PIVE_DETAIL: "detalle-pive",
  ROUTE_CONVOCATORIA_PIVDO_DETAIL: "detalle-pivdo",
  ROUTE_CONVOCATORIA_DOC_VIENEN_DETAIL: "detalle-doc-vienen",
  ROUTE_CONVOCATORIA_DOC_VAN_DETAIL: "detalle-doc-van",
  ROUTE_CONVOCATORIA_EST_VIENEN_DETAIL: "detalle-est-vienen",
  ROUTE_CONVOCATORIA_EST_VAN_DETAIL: "detalle-est-van",
  ROUTE_CONVOCATORIA_NEW_DETAIL: "nuevo-detalle"
};

const ConvocatoriaRoutes: Routes = [
  {
    path: '',
    component:ConvocatoriaBodyComponent,
    children:[
      {
         path:'',
         redirectTo:ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_NEW,
         pathMatch:'full'
       },
      {
        path: ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_DETAIL,
        component:DetailComponent,
        children:[
          {
            path:ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_PIVE_DETAIL,
            component:DetailPiveComponent
          },
          {
            path:ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_PIVDO_DETAIL,
            component:DetailPivdoComponent
          },
          {
            path:ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_DOC_VIENEN_DETAIL,
            component:DetailDocVienenComponent
          },
          {
            path:ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_DOC_VAN_DETAIL,
            component:DetailDocVanComponent
          },
          {
            path:ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_EST_VIENEN_DETAIL,
            component:DetailEstVienenComponent
          },
          {
            path:ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_EST_VAN_DETAIL,
            component:DetailEstVanComponent
          }
        ]
      },
      {
        path: ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_NEW_DETAIL,
        component:NewConvocationDetailComponent
      },
      {
        path: ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_NEW,
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
