import { PostulationComponent } from './pages/postulation/postulation.component';
import { BodyComponent } from './body/body.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routesValues = {
  ROUTE_POSTULACION_COEVAN: "postulacion",
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
        component:PostulationComponent,
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
export class PostulationCoevanRoutingModule {
  public static  ROUTES_VALUES = routesValues;
}
