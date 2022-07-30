import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {UserProfileComponent} from './pages/user-profile/user-profile.component'
import { NgModule } from "@angular/core";

const AppRoutesValues = {
  ROUTE_APP_HOME: "home",
  ROUTE_APP_WHO_WE_ARE: "quienes-somos",
  ROUTE_APP_CONTACT: "contacto",
  ROUTE_APP_SINGIN: "iniciar-sesion",
  ROUTE_APP_SIGNUP: "registrar-cuenta",
  ROUTE_APP_REGISTER_USER_DATA: "registrar-datos-usuario",
  ROUTE_APP_CONVOCATORIA: "convocatorias",
  ROUTE_APP_APPLY: "postulacion",
  ROUTE_APP_POSTULACION: "usuario-postulacion",
  ROUTE_APP_USER_PROFILE: "profile"
};
const AppRoutes: Routes  = [
  {
    path:'',
    redirectTo:AppRoutesValues.ROUTE_APP_HOME,
    pathMatch:'full'
  },
  {
    path:AppRoutesValues.ROUTE_APP_HOME,
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:AppRoutesValues.ROUTE_APP_WHO_WE_ARE,
    component:HomeComponent
  },

  {
    path:AppRoutesValues.ROUTE_APP_CONTACT,
    component:HomeComponent
  },
  {
    path:AppRoutesValues.ROUTE_APP_SINGIN,
    component:SigninComponent
  },
  {
    path:AppRoutesValues.ROUTE_APP_SIGNUP,
    component:SignupComponent
  },
  {
    path: AppRoutesValues.ROUTE_APP_REGISTER_USER_DATA,
    loadChildren:()=>import('../user-data-register/user-data-register.module').then(m => m.UserDataRegisterModule)
  },
  {
    path:AppRoutesValues.ROUTE_APP_CONVOCATORIA+"/:id",
    loadChildren:()=>import('../convocatoria/convocatoria.module').then(m => m.ConvocatoriaModule)
  },
  {
    path:AppRoutesValues.ROUTE_APP_POSTULACION+"/:id",
    loadChildren:()=>import('../postulation/user-data-postulation.module').then(m=> m.UserDataPostulationModule)
  },
  {
    path: AppRoutesValues.ROUTE_APP_APPLY,
    loadChildren:()=>import('../postulation/user-data-postulation.module').then(m => m.UserDataPostulationModule)
  },
  {
    path: AppRoutesValues.ROUTE_APP_USER_PROFILE,
    component: UserProfileComponent
  },
]

@NgModule({
  imports:[RouterModule.forRoot(AppRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{
  public static ROUTES_VALUES = AppRoutesValues;
}
