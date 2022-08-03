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
    DialogErrorEmailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    MaterialModule,
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
    DialogErrorEmailComponent
  ]

})
export class SharedModule { }
