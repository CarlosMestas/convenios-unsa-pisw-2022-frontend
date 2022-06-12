
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
import {OfHomeTablePrograms} from "./home/of-home-table-programs/of-home-table-programs";
import {OfHomeTable} from "./home/of-home-table-programs/of-home-table/of-home-table";
import {OfHomeCarouselNews} from "./home/of-home-carousel-news/of-home-carousel-news";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    BodyComponent,
    Button,
    OfHomeTablePrograms,
    OfHomeTable,
    OfHomeCarouselNews
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
