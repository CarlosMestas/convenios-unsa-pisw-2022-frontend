import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { UnsaStudentComponent } from './pages/academic-info/unsa-student/unsa-student.component';

//Modules imported
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


//Module local Components imported
import { UserBodyComponent } from './body/user-body.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AcademicInfoComponent } from './pages/academic-info/academic-info.component';
import { GeneralInfoComponent } from './pages/general-info/general-info.component';
// shared Components imported

//user-routing
import { UserRoutingModule } from './user-data-register.routes';


@NgModule({
  declarations: [
    UserBodyComponent,
    GeneralInfoComponent,
    AcademicInfoComponent,
    WelcomeComponent,
    UnsaStudentComponent
  ],
  imports: [
    UserRoutingModule,
    FontAwesomeModule,
    CommonModule,
    SharedModule
  ],
  exports: [
  ]

})
export class UserModule { }
