import { DialogNotificationComponent } from './../../shared/components/dialog-notification/dialog-notification.component';
import { PrimeNgModule } from './primeng.module';
import { DialogErrorEmailComponent } from './../../shared/components/dialog-error-email/dialog-error-email.component';
import { ButtonFormComponent } from './../../shared/components/button-form/button-form.component';
import { DialogYesNoComponent } from './../../shared/components/dialog-yes-no/dialog-yes-no.component';
import { SidenavItemComponent } from './../../shared/components/sidenav-item/sidenav-item.component';
import { SidenavUserInfoComponent } from './../../shared/components/sidenav-user-info/sidenav-user-info.component';
import { TooltipRedSmallComponent } from '../../shared/components/tooltip-red-small/tooltip-red-small.component';
import { TooltipWhiteSmallComponent } from '../../shared/components/tooltip-white-small/tooltip-white-small.component';
import { SteperComponent } from '../../shared/components/steper/steper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { Button } from 'src/app/shared/components/button/button';
import { MaterialModule } from '../material/material.module';
import { ButtonCustomizedComponent } from 'src/app/shared/components/button-customized/button-customized.component';
import { SearchBarComponent } from 'src/app/shared/components/search-bar/search-bar.component';
import { CardListFormComponent } from 'src/app/shared/components/card-list-form/card-list-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StepperComponent } from 'src/app/shared/components/stepper/stepper.component';



@NgModule({
  declarations: [
    SteperComponent,
    TooltipWhiteSmallComponent,
    TooltipRedSmallComponent,
    SidenavUserInfoComponent,
    SidenavItemComponent,
    Button,
    ButtonCustomizedComponent,
    SearchBarComponent,
    DialogYesNoComponent,
    ButtonFormComponent,
    DialogErrorEmailComponent,
    CardListFormComponent,
    StepperComponent,
    DialogNotificationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule
  ],
  exports:[
    SteperComponent,
    TooltipWhiteSmallComponent,
    TooltipRedSmallComponent,
    SidenavUserInfoComponent,
    SidenavItemComponent,
    Button,
    MaterialModule,
    ButtonCustomizedComponent,
    SearchBarComponent,
    DialogYesNoComponent,
    ButtonFormComponent,
    DialogErrorEmailComponent,
    CardListFormComponent,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    StepperComponent,
    DialogNotificationComponent
  ]

})
export class SharedModule { }
