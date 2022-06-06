import { UserJoinComponent } from './user-join/user-join.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const UserRoutes: Routes = [
  {
    path: '',
    component: UserJoinComponent
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
export class UserRoutingModule { }
