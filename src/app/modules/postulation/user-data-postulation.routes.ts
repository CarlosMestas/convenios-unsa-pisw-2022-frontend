import { FillFileComponent } from './pages/fill-file/fill-file.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {VerifyDataComponent} from "./pages/verify-data/verify-data.component";
import {UploadFilesComponent} from "./pages/upload-files/upload-files.component";
import {UserDataPostulationBodyComponent} from "./body/user-data-postulation-body.component";

const PostulacionRoutesValues = {
  ROUTE_POSTULACION_VERIFY_DATA: "verificacion",
  ROUTE_POSTULACION_FILL_FILE: "llenar-ficha",
  ROUTE_POSTULACION_UPOLOAD_FILES: "cargar-archivos"
};
const UserDataPostulationRoutes: Routes = [
  {
    path: '',
    component:UserDataPostulationBodyComponent,
    children:[
      {
        path:'',
        redirectTo:PostulacionRoutesValues.ROUTE_POSTULACION_VERIFY_DATA,
        pathMatch:'full'
      },
      {
        path: PostulacionRoutesValues.ROUTE_POSTULACION_VERIFY_DATA,
        component:VerifyDataComponent,
      },
      {
        path: PostulacionRoutesValues.ROUTE_POSTULACION_FILL_FILE,
        component:FillFileComponent,
      },
      {
        path: PostulacionRoutesValues.ROUTE_POSTULACION_UPOLOAD_FILES,
        component:UploadFilesComponent,
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(UserDataPostulationRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class UserDataPostulationRoutingModule {
  public static  ROUTES_VALUES = PostulacionRoutesValues;
}
