import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { ROOT_REDUCERS } from './../../ngrx/app.state';
import { environment } from 'src/environments/environment.prod';
import { AuthInterceptorProviders } from './../../core/interceptors/auth.interceptor';


//Modules imported
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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

//Store NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RequestAccessComponent } from './pages/request-access/request-access.component';
import { effectsOF } from 'src/app/ngrx/effects/index.effects';





@NgModule({
  declarations: [
    SidenavComponent,
    ChatbotComponent,
    HomeComponent,
    BodyComponent,
    SigninComponent,
    SignupComponent,
    OfHomeTableProgramsComponent,
    OfHomeTableComponent,
    OfHomeCarouselNewsComponent,
    UserProfileComponent,
    uploadPhotoComponent,
    RequestAccessComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(effectsOF)
  ],
  providers: [
    AuthInterceptorProviders
  ],
  bootstrap: [BodyComponent]
})
export class AppModule { }
