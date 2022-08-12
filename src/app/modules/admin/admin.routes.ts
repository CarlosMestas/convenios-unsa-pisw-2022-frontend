import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminBodyComponent } from './body/admin-body.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const AdminRoutesValues = {
  ROUTE_ADMIN_HOME: "home",
  ROUTE_ADMIN_LOGIN:"login",
};
const AdminRoutes: Routes  = [
  {
    path:'',
    redirectTo:AdminRoutesValues.ROUTE_ADMIN_HOME,
    pathMatch:'full'
  },
  {
    path:AdminRoutesValues.ROUTE_ADMIN_HOME,
    component:AdminBodyComponent,
    pathMatch:'full'
  },
  {
    path:AdminRoutesValues.ROUTE_ADMIN_LOGIN,
    component:AdminLoginComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(AdminRoutes)],
  exports:[RouterModule]
})
export class AdminRoutingModule{
  public static ROUTES_VALUES = AdminRoutesValues;
}
