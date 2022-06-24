import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MatButtonModule,
    IvyCarouselModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonToggleModule
  ]
})
export class MaterialModule { }
