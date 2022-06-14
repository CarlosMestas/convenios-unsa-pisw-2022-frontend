import { CommonModule } from '@angular/common';
import { SteperComponent } from './../../shared/components/steper/steper.component';
import { UnsaStudentComponent } from './academic-info/unsa-student/unsa-student.component';

//Modules imported
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


//Module local Components imported
import { UserBodyComponent } from './user-data-register-body/user-body.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AcademicInfoComponent } from './academic-info/academic-info.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
// shared Components imported
import { TooltipWhiteSmallComponent } from '../../shared/components/tooltip-white-small/tooltip-white-small.component';
import { TooltipRedComponent } from '../../shared/components/tooltip-red/tooltip-red.component'
import {TooltipRedSmallComponent} from '../../shared/components/tooltip-red-small/tooltip-red-small.component'


//user-routing
import { UserRoutingModule } from './user-data-register.routes';


@NgModule({
  declarations: [
    TooltipWhiteSmallComponent,
    TooltipRedComponent,
    TooltipRedSmallComponent,
    UserBodyComponent,
    GeneralInfoComponent,
    AcademicInfoComponent,
    WelcomeComponent,
    UnsaStudentComponent,
    SteperComponent
  ],
  imports: [
    UserRoutingModule,
    FontAwesomeModule,
    CommonModule
  ],
  exports: [
    SteperComponent
  ]

})
export class UserModule { }
