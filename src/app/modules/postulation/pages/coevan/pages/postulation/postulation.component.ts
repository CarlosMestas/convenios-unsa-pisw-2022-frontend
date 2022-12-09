import { IUniversityResponse } from './../../../../../../shared/interfaces/university.interface';
import { IPostulationCoevanDocFormat } from './../../../../../../shared/interfaces/postulation-coevan.interface';
import { PostulacionService } from '../../../../../../core/services/postulacion/postulacion.service';
import { IPostulationCoevanCourse } from '../../../../../../shared/interfaces/postulacion.interface';
import { ProgramaProfesionalService } from '../../../../../../core/services/programa-profesional/programa-profesional.service';
import { IAppState } from 'src/app/ngrx/app.state';
import { profileImageStateSelector } from '../../../../../../ngrx/selectors/profile/profile.selector';
import { mergeMap } from 'rxjs';
import { FacultiesService } from 'src/app/core/services/faculties/faculties.service';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { IFacultyResponse } from 'src/app/shared/interfaces/convocation/faculties.interface';
import { IProfessionalProgramsResponse } from 'src/app/shared/interfaces/programa-profesiona.interface';
import { ICycleResponse } from 'src/app/shared/interfaces/cycle.interface';
import { CycleService } from 'src/app/core/services/cycle/cycle.service';
import { IAcademicYearResponse } from 'src/app/shared/interfaces/academic-year.interface';
import { AcademicYearService } from 'src/app/core/services/academic-year/academic-year.service';
import { GenDocumentCoevanService } from 'src/app/core/services/postulacion/gen-doc-coevan.service';
import { SelectItem } from 'primeng/api';
import { ResourcesService } from 'src/app/core/services/postulacion/resources.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-postulation',
  templateUrl: './postulation.component.html',
  styleUrls: ['./postulation.component.scss']
})
export class PostulationComponent implements OnInit {

  id:number;
    selected:boolean[]=[true,false,true]
    faculties$:Observable<IFacultyResponse[]>
    programs$:Observable<IProfessionalProgramsResponse[]>
    cycles$:Observable<ICycleResponse[]>
    academicYears$:Observable<IAcademicYearResponse[]>

    picture$:Observable<File[]>
    userImage$:Observable<string|undefined>;
    picture:File
//POSTULATION

    formPostulation:FormGroup
    years:SelectItem[]= [
      {label: '1ro', value: '1ro'},
      {label: '2ro', value: '2ro'},
      {label: '3ro', value: '3ro'},
      {label: '4to', value: '4to'},
      {label: '5to', value: '5to'},
      {label: '6to', value: '6to'}
    ]
    semesters:SelectItem[]= [
      {label: 'par', value: 'par'},
      {label: 'impar', value: 'impar'}
    ]
// Courses postulation Table

    postulationCourses:IPostulationCoevanCourse[]
    numerationCourses:number = 1

    addEmptyCourse(){
      this.numerationCourses++
      let emptyCourse:IPostulationCoevanCourse = {
        order: this.numerationCourses,
        number_credits: 0,
        course_code: '',
        unsa_course_name: '',
        year: '',
        semester: '',
        destination_university_course_name: ''
      }
      this.postulationCourses.push(emptyCourse)
    }

    deleteCourse(row:number){
      this.postulationCourses.splice(row,1)
      this.numerationCourses--
    }

    savePostulation(){

    }
    constructor(
        private route:ActivatedRoute,
        private postulacionService:PostulacionService,
        private facultiesService:FacultiesService,
        private programaProfesionalService:ProgramaProfesionalService,
        private cycleService: CycleService,
        private academicYearService:AcademicYearService,
        private genDocumentCoevanService: GenDocumentCoevanService,
        private resoucesService:ResourcesService,
        private store:Store<IAppState>
    ) {

      this.userImage$ = new Observable<string|undefined>();
      this.faculties$ = new Observable<IFacultyResponse[]>()
      this.programs$ = new Observable<IProfessionalProgramsResponse[]>()
      this.cycles$ = new Observable<ICycleResponse[]>()
      this.academicYears$ = new Observable<IAcademicYearResponse[]>()

      this.picture$ = new Observable<File[]>()
      this.picture = new File([],"")
      this.postulationCourses = [
        {
          order:1,
          number_credits:4,
          course_code:"445132",
          unsa_course_name:"Introducción al desarrollo de juegos",
          year:"3ro",
          semester:"par",
          destination_university_course_name:"Desarrollo de juegos"
        }
      ]

      const datetime = new Date()

      this.id = route.snapshot.params['id']

      this.formPostulation = new FormGroup({
        lastname: new FormControl('',Validators.required),
        name: new FormControl('',Validators.required),
        birthdate: new FormControl({},Validators.required),
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
        u_faculty: new FormControl({},Validators.required),
        u_professional_program: new FormControl({},Validators.required),
        u_current_cicle: new FormControl({},Validators.required),
        u_academic_year: new FormControl({},Validators.required),
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
        u_presentation_date : new FormControl(datetime.toLocaleString(),Validators.required),
        postulation_courses: new FormGroup({
          number_credits: new FormControl(''),
          course_code: new FormControl(''),
          unsa_course_name: new FormControl(''),
          year: new FormControl(''),
          semester: new FormControl(''),
          destination_university_course_name: new FormControl('')
        })
      })
    }

  initForm(){

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

    this.picture$ = this.store.select(profileImageStateSelector).pipe(mergeMap(resp=>{
      console.log("image test: ", resp)
      return this.resoucesService.getImageToFile(resp+"?r="+Math.floor(Math.random()*100000)).pipe(map(data=>{
        console.log("image test: ", data)
        this.picture = data.data
        return [data.data]
      }))
    }))

  }



  testfile(image:any){
    console.log(image)
  }


  async getImage(){
    let tempImage:any = ""
    await new Promise((resolve,reject)=>{
      let reader=new FileReader()
      reader.onloadend = ()=>  {
        tempImage = reader.result
        console.log("what is in image: ",tempImage)
          resolve(tempImage)
      }
      reader.onerror = reject
      reader.readAsDataURL(this.picture)
    })

    return tempImage;
  }

  async generateDoc(){
    console.log("intentando imprimir")
    let imageInfo:any = ''

    imageInfo = await this.getImage()

    console.log("what is in image: ", imageInfo)

    let testData:IPostulationCoevanDocFormat={
      photo: imageInfo,
      lastname: this.formPostulation.value["lastname"],
      name: this.formPostulation.value["name"],
      birth_date: this.formPostulation.value["birthdate"],
      dni: this.formPostulation.value["dni"].toString(),
      city_region_postulant: this.formPostulation.value["cityregion"],
      cui: this.formPostulation.value["cui"].toString(),
      address: this.formPostulation.value["address"],
      phone: this.formPostulation.value["mobilephone"].toString(),
      email: this.formPostulation.value["institutionalemail"],
      emergency_contact: this.formPostulation.value["contactnumber"].toString(),
      university_origin: {
        id:1,
        name:"Universidad Nacional de San Agustín",
        acronym:"UNSA",
        logo:"https://upload.wikimedia.org/wikipedia/commons/3/3a/LOGO_UNSA.png"
      },
      web_page: this.formPostulation.controls["u_webpage"].value,
      city_region_university: this.formPostulation.controls["u_cityregion"].value,
      faculty: (this.formPostulation.value["u_faculty"] as IFacultyResponse),
      professional_program: (this.formPostulation.value["u_professional_program"] as IProfessionalProgramsResponse),
      current_cicle: (this.formPostulation.value["u_current_cicle"] as ICycleResponse),
      academic_year: (this.formPostulation.value["u_academic_year"] as IAcademicYearResponse),
      mean_grades: this.formPostulation.value["u_grades_mean"],
      total_credits: this.formPostulation.value["u_total_credits"],
      coordinator: this.formPostulation.controls["u_program_coordinator"].value,
      coordinator_charge: this.formPostulation.controls["u_charge"].value,
      coordinator_email: this.formPostulation.controls["u_email"].value,
      modality: {
        id:1,
        name:'Virtual'
      },
      semester: {
        id:1,
        name:'2022-B'
      },
      university_target: {
        id:1,
        name:"Universidad Nacional de Ingeniería",
        acronym:"UNI",
        logo:"https://upload.wikimedia.org/wikipedia/commons/3/3a/LOGO_UNSA.png"
      },
      academic_network: {
        id:1,
        name:"Red Peruana de Universidades",
        acronym:"RPU",
        description:"Es una red peruana de universidades",
        logo:"https://2.bp.blogspot.com/_BSRFkkxuSEI/SxQfTMOP2nI/AAAAAAAAFfk/V1atsKgvGsM/s1600/logoRPU.jpg"
      },
      courses: this.postulationCourses
    }
    console.log("form data:",testData)
    this.genDocumentCoevanService.generateDocumentPostulation(testData)
  }

  photoLoaded(event:any){
    console.log("image loaded:",event.files)
    this.picture = event.files[0]
  }


}
