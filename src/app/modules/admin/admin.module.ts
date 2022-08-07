import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminRoutingModule } from './admin.routes';
import { AdminBodyComponent } from './body/admin-body.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AdminBodyComponent,
    AdminLoginComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
