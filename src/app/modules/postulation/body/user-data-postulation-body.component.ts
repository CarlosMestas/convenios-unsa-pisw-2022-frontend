import { ProgramaProfesionalService } from './../../../core/services/programa-profesional/programa-profesional.service';
import { FacultiesService } from 'src/app/core/services/faculties/faculties.service';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {UserDataPostulationRoutingModule} from "../user-data-postulation.routes";
import {ActivatedRoute} from "@angular/router";
import {IPostulation}from './../../../shared/interfaces/postulacion.interface';
import { PostulacionService } from './../../../core/services/postulacion/postulacion.service';
import {Step} from "../../../shared/interfaces/step.interface";
import { IFacultyResponse } from 'src/app/shared/interfaces/convocation/faculties.interface';
import { IProfessionalProgramsResponse } from 'src/app/shared/interfaces/programa-profesiona.interface';
import { ICycleResponse } from 'src/app/shared/interfaces/cycle.interface';
import { CycleService } from 'src/app/core/services/cycle/cycle.service';
import { IAcademicYearResponse } from 'src/app/shared/interfaces/academic-year.interface';
import { AcademicYearService } from 'src/app/core/services/academic-year/academic-year.service';
import { GenDocumentCoevanService } from 'src/app/core/services/postulacion/gen-doc-coevan.service';

@Component({
  selector: 'app-user-data-postulation-body',
  templateUrl: './user-data-postulation-body.component.html',
  styleUrls: ['./user-data-postulation-body.component.scss']
})
export class UserDataPostulationBodyComponent implements OnInit {

    id:number;
    selected:boolean[]=[true,false,true]
    faculties$:Observable<IFacultyResponse[]>
    programs$:Observable<IProfessionalProgramsResponse[]>
    cycles$:Observable<ICycleResponse[]>
    academicYears$:Observable<IAcademicYearResponse[]>
    //POSTULATION

    formPostulation:FormGroup
    savePostulation(){

    }
    constructor(
        private route:ActivatedRoute,
        private postulacionService:PostulacionService,
        private facultiesService:FacultiesService,
        private programaProfesionalService:ProgramaProfesionalService,
        private cycleService: CycleService,
        private academicYearService:AcademicYearService,
        private genDocumentCoevanService: GenDocumentCoevanService
    ) {

      this.faculties$ = new Observable<IFacultyResponse[]>()
      this.programs$ = new Observable<IProfessionalProgramsResponse[]>()
      this.cycles$ = new Observable<ICycleResponse[]>()
      this.academicYears$ = new Observable<IAcademicYearResponse[]>()


      const datetime = new Date()

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
        university: new FormControl({
          value:'Universidad Nacional de San Agustín',
          disabled:true
        }),
        u_webpage: new FormControl({
          value:'https://www.unsa.edu.pe/',
          disabled:true
        }),
        u_cityregion: new FormControl({
          value:'Arequipa/Arequipa',
          disabled:true
        }),
        u_faculty: new FormControl('',Validators.required),
        u_professional_program: new FormControl('',Validators.required),
        u_current_cicle: new FormControl('',Validators.required),
        u_academic_year: new FormControl('',Validators.required),
        u_grades_mean: new FormControl('',Validators.required),
        u_total_credits: new FormControl('',Validators.required),
        u_program_coordinator: new FormControl({
          value:'Dra. María del Pilar Guillén Núñez',
          disabled:true
        }),
        u_charge: new FormControl({
          value:'Jefa de la Oficina Universitaria de Cooperación, Convenios, Relaciones Internacionales, Becas y Pasantías de la UNSA',
          disabled:true
        }),
        u_email: new FormControl({
          value:'convenios@unsa.edu.pe',
          disabled:true
        }),
        u_presentation_date : new FormControl(datetime.toLocaleString(),Validators.required)
      })
    }


  ngOnInit(): void {
    this.faculties$ =this.facultiesService.getAllFaculties().pipe(map(data=>{
      return data.data
    }))

    this.programs$ = this.programaProfesionalService.getAllPrograms().pipe(map(data=>{
      return data.data
    }))

    this.cycles$ = this.cycleService.getAllCycles().pipe(map(data=>{
      return data.data
    }))
    this.academicYears$ = this.academicYearService.getAllAcademicYear().pipe(map(data=>{
      return data.data
    }))
  }

  testfile(image:any){
    console.log(image)
  }

  src = 'https://www.mtsac.edu/webdesign/accessible-docs/word/example03.docx';

  generateDoc(){
    this.genDocumentCoevanService.generateDocumentPostulation(1)
  }
}
