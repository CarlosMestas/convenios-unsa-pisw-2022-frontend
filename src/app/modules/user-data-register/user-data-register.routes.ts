import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AcademicInfoComponent } from './pages/academic-info/academic-info.component';
import { GeneralInfoComponent } from './pages/general-info/general-info.component';


import { UserBodyComponent } from './body/user-body.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const UserRoutes: Routes = [
  {
    path: '',
    component:UserBodyComponent,
    children:[
      {
        path:'',
        redirectTo:'informacion-general-usuario',
        pathMatch:'full'
      },
      {
        path: 'informacion-general-usuario',
        component:GeneralInfoComponent,
      },
      {
        path: 'informacion-academica-usuario',
        component:AcademicInfoComponent,
      },
      {
        path: 'informacion-registrada-usuario',
        component:WelcomeComponent,
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(UserRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class UserDataRegisterRoutingModule { }
