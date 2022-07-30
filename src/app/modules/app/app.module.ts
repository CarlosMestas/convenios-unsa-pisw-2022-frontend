

//Modules imported
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Module Local components imported
import { HomeComponent } from './pages/home/home.component'
import { BodyComponent } from './body/body.component';
import { OfHomeTableProgramsComponent } from './components/of-home-table-programs/of-home-table-programs.component';
import { OfHomeTableComponent } from './components/of-home-table/of-home-table.component';
import { OfHomeCarouselNewsComponent } from './components/of-home-carousel-news/of-home-carousel-news.component';


//Shared Components imported
import {SidenavComponent} from '../../shared/components/sidenav/sidenav.component'
import {UserProfileComponent} from '../../modules/app/pages/user-profile/user-profile.component'

//Routes
import { AppRoutingModule } from './app.routes';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component'
import { SharedModule } from '../shared/shared.module';
import {uploadPhotoComponent} from "./pages/user-profile/upload-photo/upload-photo.component";





@NgModule({
  declarations: [
    SidenavComponent,
    HomeComponent,
    BodyComponent,
    SigninComponent,
    SignupComponent,
    OfHomeTableProgramsComponent,
    OfHomeTableComponent,
    OfHomeCarouselNewsComponent,
    UserProfileComponent,
    uploadPhotoComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule


  ],
  providers: [
  ],
  bootstrap: [BodyComponent]
})
export class AppModule { }
