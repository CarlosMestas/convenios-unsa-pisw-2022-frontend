

//Modules imported
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from "@angular/forms";
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//Module Local components imported
import { HomeComponent } from './pages/home/home.component'
import { BodyComponent } from './body/body.component';
//Shared Components imported
import {SidenavComponent} from '../../shared/components/sidenav/sidenav.component'

//Routes
import { AppRoutingModule } from './app.routes';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component'
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    SidenavComponent,
    HomeComponent,
    BodyComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [BodyComponent]
})
export class AppModule { }
