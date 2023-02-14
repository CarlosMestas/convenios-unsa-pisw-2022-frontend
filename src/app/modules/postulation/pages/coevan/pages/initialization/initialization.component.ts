import { CycleService } from './../../../../../../core/services/cycle/cycle.service';
import { ICycleResponse } from './../../../../../../shared/interfaces/cycle.interface';
import { AcademicYearService } from './../../../../../../core/services/academic-year/academic-year.service';
import { IAcademicYearResponse } from './../../../../../../shared/interfaces/academic-year.interface';
import { Subscription } from 'rxjs';
import { ProgramaProfesionalService } from './../../../../../../core/services/programa-profesional/programa-profesional.service';
import { IProfessionalProgramResponse } from './../../../../../../shared/interfaces/professional-program.interface';
import { ActivatedRoute } from '@angular/router';
import { PostulationService } from 'src/app/core/services/postulacion/postulation.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResourcesService } from './../../../../../../core/services/postulacion/resources.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SCRData } from 'src/app/shared/interfaces/coevan/winner.interface';
import { GenDocumentService } from 'src/app/core/services/postulacion/gen-doc.service';

@Component({
  selector: 'app-initialization',
  templateUrl: './initialization.component.html',
  styleUrls: ['./initialization.component.scss']
})
export class InitializationComponent implements OnInit, OnDestroy {

  id:number;
  convocationId:number
  scrForm:FormGroup
  scrData:SCRData
  programs:IProfessionalProgramResponse[]
  academicYears:IAcademicYearResponse[]
  cycles:ICycleResponse[]

  private unsubscribe: Subscription[] = [];

  constructor(
    private resourcesService:ResourcesService,
    private activatedRoute:ActivatedRoute,
    private postulationService:PostulationService,
    private professionalProgramService:ProgramaProfesionalService,
    private academicYearService:AcademicYearService,
    private cycleService: CycleService,
    private genDocumentService:GenDocumentService
  ) {

    this.programs = []
    this.academicYears = []
    this.cycles = []

    this.id = activatedRoute.snapshot.params['id']
    this.convocationId = activatedRoute.parent?.parent?.parent?.snapshot.params["id"]

    this.scrData = {
      lastname:"",
        name:"",
        dni:"",
        address:"",
        cui:"",
        universityOrigin:{
          acronym:"",
          longName:""
        },
        professionalprogram:"",
        studentSemester:"",
        academicyear:"",
        universityTargetCarrer:"",
        modality: "",
        universityTarget:{
          acronym:"",
          longName:""
        },
        academicNetwork:{
          acronym:"",
          longName:""
        },
        universityAcademicSemester:""
    }

    this.scrForm = new FormGroup({
      lastname: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      dni: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),

      cui: new FormControl('',Validators.required),
      university: new FormGroup({
        id: new FormControl(1),
        name:new FormControl({
          value:'Universidad Nacional de San Agustín',
          disabled:true
        }),
        acronym:new FormControl("UNSA"),
        logo:new FormControl("https://upload.wikimedia.org/wikipedia/commons/3/3a/LOGO_UNSA.png")
      }),
      professionalprogram: new FormControl({},Validators.required),
      semester: new FormControl({},Validators.required),
      academicyear: new FormControl({},Validators.required),
      careerdestinyuniversity: new FormControl({},Validators.required),
    })
  }

  ngOnInit(): void {
    this.postulationService.getPostulationByConvocationUser(this.convocationId, this.id).subscribe(data=>{

      this.scrData = {
        lastname:data.data.lastname,
        name:data.data.name,
        dni:data.data.dni,
        address:data.data.current_address,
        cui:data.data.cui,
        universityOrigin:{
          acronym:data.data.origin_university.acronym,
          longName:data.data.origin_university.name
        },
        professionalprogram:data.data.professional_program.name,
        studentSemester:"par",
        academicyear:data.data.academic_year.description,
        universityTargetCarrer:data.data.professional_program.name,
        modality: "virtual",
        universityTarget:{
          acronym:"UNMSM",
          longName:"Universidad Nacional Mayor de San Marcos"
        },
        academicNetwork:{
          acronym:"RPU",
          longName:"Red Peruana de Universidades"
        },
        universityAcademicSemester:"2023-1"
      }


      this.scrForm.patchValue(
        {
          lastname: data.data.lastname,
          name: data.data.name,
          dni: data.data.dni,
          address: data.data.current_address,
          cui: data.data.cui,
          university: data.data.origin_university.name,
          professionalprogram: data.data.professional_program.name,
          semester: "par",
          academicyear: data.data.academic_year.description,
          careerdestinyuniversity: data.data.professional_program.name
        }
      )

      const sub1 = this.professionalProgramService.getAllPrograms().subscribe(data=>{
        this.programs = data.data
        sub1.unsubscribe()
      })

      const sub2 = this.academicYearService.getAllAcademicYear().subscribe(data=>{
        this.academicYears = data.data
        sub2.unsubscribe()
      })

      const sub3 = this.cycleService.getAllCycles().subscribe(data=>{
        this.cycles = data.data
        sub3.unsubscribe()
      })

      this.unsubscribe.push(sub1)
      this.unsubscribe.push(sub2)
      this.unsubscribe.push(sub3)
    })
  }
  downloadDocument(){
    this.genDocumentService.generateScholarshipRequest(this.scrData);
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }



}
