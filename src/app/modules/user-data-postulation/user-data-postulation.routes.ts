import { FillFileComponent } from './fill-file/fill-file.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {VerifyDataComponent} from "./verify-data/verify-data.component";
import {UploadFilesComponent} from "./upload-files/upload-files.component";
import {UserDataPostulationBodyComponent} from "./user-data-postulation-body/user-data-postulation-body.component";

const UserDataPostulationRoutes: Routes = [
  {
    path: '',
    component:UserDataPostulationBodyComponent,
    children:[
      {
        path:'',
        redirectTo:'verificacion-informacion-usuario',
        pathMatch:'full'
      },
      {
        path: 'verificacion-informacion-usuario',
        component:VerifyDataComponent,
      },
      {
        path: 'llenar-ficha-usuario',
        component:FillFileComponent,
      },
      {
        path: 'cargar-archivo-usuario',
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
export class UserDataPostulationRoutingModule { }
