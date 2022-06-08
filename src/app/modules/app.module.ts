
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "../material.module";
import {Button} from "../shared/components/button/button";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    BodyComponent,
    Button
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
