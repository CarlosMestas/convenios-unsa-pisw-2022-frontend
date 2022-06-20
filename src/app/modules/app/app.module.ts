

//Modules imported
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from "@angular/forms";
import {CommonModule} from '@angular/common';
//Module Local components imported
import { HomeComponent } from './pages/home/home.component'
import { BodyComponent } from './body/body.component';
//Shared Components imported
import {SidenavComponent} from '../../shared/components/sidenav/sidenav.component'

//Routes
import { AppRoutingModule } from './app.routes';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component'




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
    SocialLoginModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    {
      provide:'SocialAuthServiceConfig',
      useValue: {
        autoLogin:false,
        providers:[
          {
            id:GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '759619919579-k8fci80tiq63alhfh9ome4dihlaiqm8q.apps.googleusercontent.com'
            )
          }
        ],
        onerror: (err:any) =>{
          console.log(err)
        }
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [BodyComponent]
})
export class AppModule { }
