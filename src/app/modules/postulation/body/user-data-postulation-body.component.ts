import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {UserDataPostulationRoutingModule} from "../user-data-postulation.routes";
import {ActivatedRoute} from "@angular/router";
import {IPostulacion}from './../../../shared/interfaces/postulacion.interface';
import { PostulacionService } from './../../../core/services/postulacion/postulacion.service';
import {Step} from "../../../shared/interfaces/step.interface";

@Component({
  selector: 'app-user-data-postulation-body',
  templateUrl: './user-data-postulation-body.component.html',
  styleUrls: ['./user-data-postulation-body.component.scss']
})
export class UserDataPostulationBodyComponent implements OnInit {

    id:number;
    selected:boolean[]=[true,false,true]

    //POSTULATION

    formPostulation:FormGroup
    savePostulation(){

    }





    constructor(
        private route:ActivatedRoute,
        private postulacionService:PostulacionService
    ) {

      this.id = route.snapshot.params['id']
      this.formPostulation = new FormGroup({
        lastname: new FormControl('',Validators.required),
        name: new FormControl('',Validators.required),
        birthdate: new FormControl('',Validators.required),
        dni: new FormControl('',Validators.required),
        cityregion: new FormControl('',Validators.required),
        cui: new FormControl('',Validators.required),
        address: new FormControl('',Validators.required),
        mobilephone: new FormControl('',Validators.required),
        institutionalemail: new FormControl('',Validators.required),
        contactnumber: new FormControl('',Validators.required),
        university: new FormControl('',Validators.required),
        u_webpage: new FormControl('',Validators.required),
        u_cityregion: new FormControl('',Validators.required),
        u_faculty: new FormControl('',Validators.required),
        u_professional_program: new FormControl('',Validators.required),
        u_current_cicle: new FormControl('',Validators.required),
        u_academic_year: new FormControl('',Validators.required),
        u_grades_mean: new FormControl('',Validators.required),
        u_total_credits: new FormControl('',Validators.required),
        u_program_coordinator: new FormControl('',Validators.required),
        u_charge: new FormControl('',Validators.required),
        u_email: new FormControl('',Validators.required),
        u_presentation_date : new FormControl('',Validators.required)
      })
    }


  ngOnInit(): void {

  }
}
