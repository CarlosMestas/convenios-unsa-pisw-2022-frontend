import { DetailComponent } from './pages/detail/detail.component';
import { BodyComponent } from './body/body.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DetailPiveComponent } from './pages/detail-pive/detail-pive.component';
import { DetailPivdoComponent } from './pages/detail-pivdo/detail-pivdo.component';
import { DetailDocVienenComponent } from './pages/detail-doc-vienen/detail-doc-vienen.component';
import { DetailDocVanComponent } from './pages/detail-doc-van/detail-doc-van.component';
import { DetailEstVienenComponent } from './pages/detail-est-vienen/detail-est-vienen.component';
import { DetailEstVanComponent } from './pages/detail-est-van/detail-est-van.component';

const ConvocatoriaRoutesValues = {
  ROUTE_CONVOCATORIA_DETAIL: "detalle"
};

const ConvocatoriaRoutes: Routes = [
  {
    path: '',
    component:BodyComponent,
    children:[
      {
         path:'',
         redirectTo:ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_DETAIL,
         pathMatch:'full'
       },
      {
        path: ConvocatoriaRoutesValues.ROUTE_CONVOCATORIA_DETAIL,
        component:DetailComponent
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
