import { InitializationComponent } from './pages/initialization/initialization.component';
import { PostulationComponent } from './pages/postulation/postulation.component';
import { BodyComponent } from './body/body.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routesValues = {
  ROUTE_POSTULATION_COEVAN: "postulacion-coevan",
  ROUTE_INITIALIZATION_COEVAN:"iniciacion-coevan"
};
const routes: Routes = [
  {
    path: '',
    component:BodyComponent,
    children:[
      {
        path: routesValues.ROUTE_POSTULATION_COEVAN,
        component:PostulationComponent,
      },
      {
        path: routesValues.ROUTE_POSTULATION_COEVAN+"/:id",
        component:PostulationComponent,
      },
      {
        path: routesValues.ROUTE_INITIALIZATION_COEVAN+"/:id",
        component:InitializationComponent,
      },
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
