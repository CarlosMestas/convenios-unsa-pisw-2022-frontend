import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminRoutingModule } from './admin.routes';
import { AdminBodyComponent } from './body/admin-body.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminBodyComponent,
    AdminLoginComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,

  ]
})
export class AdminModule { }
