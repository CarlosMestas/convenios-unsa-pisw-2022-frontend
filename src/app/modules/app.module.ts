
//Modules imported
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

//Module Local components imported
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { BodyComponent } from './body/body.component';
//Shared Components imported
import {SidenavComponent} from '../shared/components/sidenav/sidenav.component'

//Routes
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
