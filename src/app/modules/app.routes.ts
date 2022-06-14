import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";


const AppRoutes: Routes  = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'quienes-somos',
    component:HomeComponent
  },

  {
    path:'contacto',
    component:HomeComponent
  },
  {
    path:'iniciar-sesion',
    component:SigninComponent
  },
  {
    path:'registrar-cuenta',
    component:SignupComponent
  },
  {
    path: 'users',
    loadChildren:()=>import('./user-data-register/user-data-register.module').then(m => m.UserModule)
  },
  {
    path:'convocatorias',
    loadChildren:()=>import('./convocatoria/convocatoria.module').then(m => m.ConvocatoriaModule)
  },
  {
    path: 'postulacion',
    loadChildren:()=>import('./user-data-postulation/user-data-postulation.module').then(m => m.UserDataPostulationModule)
  }
]

@NgModule({
  imports:[RouterModule.forRoot(AppRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
