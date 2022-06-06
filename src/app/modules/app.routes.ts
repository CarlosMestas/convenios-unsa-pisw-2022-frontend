import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";


const AppRoutes: Routes  = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'users',
    loadChildren:()=>import('./user/user.module').then(m => m.UserModule)
  }
]

@NgModule({
  imports:[RouterModule.forRoot(AppRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
