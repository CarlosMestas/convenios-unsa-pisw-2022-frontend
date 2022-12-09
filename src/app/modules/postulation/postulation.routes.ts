import { PostulationComponent } from './pages/coevan/pages/postulation/postulation.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {BodyComponent} from "./body/body.component";

const routesValues = {
  ROUTE_POSTULACION_COEVAN: "coevan",
};
const routes: Routes = [
  {
    path: '',
    component:BodyComponent,
    children:[
      {
        path:'',
        redirectTo:routesValues.ROUTE_POSTULACION_COEVAN,
        pathMatch:'full'
      },
      {
        path: routesValues.ROUTE_POSTULACION_COEVAN,
        loadChildren:()=>import('./pages/coevan/postulation-coevan.module').then(m => m.PostulationCoevanModule)
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class PostulationRoutingModule {
  public static  ROUTES_VALUES = routesValues;
}
