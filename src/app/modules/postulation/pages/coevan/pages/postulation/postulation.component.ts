import { AppRoutingModule } from './../../../../../app/app.routes';
import { IConvocationResponseDetail } from './../../../../../../shared/interfaces/convocation.interface';
import { IDocumentResponseDetail } from './../../../../../../shared/interfaces/convocation-document.interface';
import { ConvocationService } from './../../../../../../core/services/convocation/convocation.service';
import { ENUMPostulationCoevanStatus } from 'src/app/shared/enum/convocation.enum';
import { AuthHelper } from './../../../../../../core/services/auth/auth.helper';
import { IUniversityResponse } from './../../../../../../shared/interfaces/university.interface';
import { IPostulationCoevan, IPostulationCoevanDocFormat } from './../../../../../../shared/interfaces/postulation-coevan.interface';
import { PostulationService } from '../../../../../../core/services/postulacion/postulation.service';
import { IPostulationCoevanCourse } from '../../../../../../shared/interfaces/postulation.interface';
import { ProgramaProfesionalService } from '../../../../../../core/services/programa-profesional/programa-profesional.service';
import { IAppState } from 'src/app/ngrx/app.state';
import { profileImageStateSelector } from '../../../../../../ngrx/selectors/profile/profile.selector';
import { mergeMap, Subscription, of } from 'rxjs';
import { FacultiesService } from 'src/app/core/services/faculties/faculties.service';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { IFacultyResponse } from 'src/app/shared/interfaces/convocation/faculties.interface';
import { IProfessionalProgramResponse } from 'src/app/shared/interfaces/professional-program.interface';
import { ICycleResponse } from 'src/app/shared/interfaces/cycle.interface';
import { CycleService } from 'src/app/core/services/cycle/cycle.service';
import { IAcademicYearResponse } from 'src/app/shared/interfaces/academic-year.interface';
import { AcademicYearService } from 'src/app/core/services/academic-year/academic-year.service';
import { GenDocumentCoevanService } from 'src/app/core/services/postulacion/gen-doc-coevan.service';
import { SelectItem } from 'primeng/api';
import { ResourcesService } from 'src/app/core/services/postulacion/resources.service';
import { Store } from '@ngrx/store';
import { IConvocationCoevanResponseDetail } from 'src/app/shared/interfaces/convocation-coevan.interface';

@Component({
  selector: 'app-postulation',
  templateUrl: './postulation.component.html',
  styleUrls: ['./postulation.component.scss']
})
export class PostulationComponent implements OnInit, OnDestroy {
    private unsubscribe: Subscription[] = [];
    id:number;
    convocationId:number
    faculties:IFacultyResponse[]
    programs:IProfessionalProgramResponse[]
    cycles:ICycleResponse[]
    academicYears:IAcademicYearResponse[]

    convocationCoevan:IConvocationCoevanResponseDetail
    convocationGeneral:IConvocationResponseDetail

    picture$:Observable<File[]>
    picture:File
    postulationDocument$:Observable<File[]>
    postulationDocument:File|undefined
    userImage$:Observable<string|undefined>;
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
        target_university_course_name: ''
      }
      this.postulationCourses.push(emptyCourse)
    }

    deleteCourse(row:number){
      this.postulationCourses.splice(row,1)
      this.numerationCourses--
    }
    /**
     *  to save a postulation but not to send to be review
     */
    savePostulation(){
      let userId = Number(localStorage.getItem(AuthHelper.USER_ID_ENCODED))
      let tempData:IPostulationCoevan ={
        photo: this.picture,
        id_user:Number(userId),
        id_convocation: Number(this.convocationId),
        lastname: this.formPostulation.value["lastname"],
        name: this.formPostulation.value["name"],
        birth_date: this.formPostulation.value["birthdate"],
        dni: this.formPostulation.value["dni"].toString(),
        city_region_postulant: this.formPostulation.value["cityregion"],
        cui: this.formPostulation.value["cui"].toString(),
        current_address: this.formPostulation.value["address"],
        phone: this.formPostulation.value["mobilephone"].toString(),
        email: this.formPostulation.value["institutionalemail"],
        contact_emergency_number: this.formPostulation.value["contactnumber"].toString(),
        origin_university: this.formPostulation.value["university"].id,
        web_page: this.formPostulation.controls["u_webpage"].value,
        city_region_university: this.formPostulation.controls["u_cityregion"].value,
        id_faculty: this.formPostulation.value["u_faculty"],
        id_professional_program: this.formPostulation.value["u_professional_program"],
        id_current_cicle: this.formPostulation.value["u_current_cicle"],
        id_academic_year: this.formPostulation.value["u_academic_year"],
        mean_grades: this.formPostulation.value["u_grades_mean"],
        total_credits: this.formPostulation.value["u_total_credits"],
        coordinator: this.formPostulation.controls["u_program_coordinator"].value,
        coordinator_cargue: this.formPostulation.controls["u_charge"].value,
        coordinator_email: this.formPostulation.controls["u_email"].value,
        postulation_document: this.postulationDocument,
        last_update: (new Date()).toLocaleDateString(),
        courses: this.postulationCourses,
        post_state: ENUMPostulationCoevanStatus.SIN_ENVIAR
      }
      console.log("save format:",tempData)

      let formData = new FormData()

      formData.append("photo",tempData.photo,tempData.photo.name)
      formData.append("id_convocation",tempData.id_convocation.toString())
      formData.append("id_user",tempData.id_user.toString())
      formData.append("lastname",tempData.lastname)
      formData.append("name",tempData.name)
      formData.append("birth_date",tempData.birth_date)
      formData.append("dni",tempData.dni)
      formData.append("city_region_postulant",tempData.city_region_postulant)
      formData.append("cui",tempData.cui)
      formData.append("current_address",tempData.current_address)
      formData.append("phone",tempData.phone)
      formData.append("email",tempData.email)
      formData.append("contact_emergency_number",tempData.contact_emergency_number)
      formData.append("origin_university",tempData.origin_university.toString())
      formData.append("web_page",tempData.web_page)
      formData.append("city_region_university",tempData.city_region_university)
      formData.append("id_faculty",tempData.id_faculty.toString())
      formData.append("id_professional_program",tempData.id_professional_program.toString())
      formData.append("id_current_cicle",tempData.id_current_cicle.toString())
      formData.append("id_academic_year",tempData.id_academic_year.toString())
      formData.append("mean_grades",tempData.mean_grades.toString())
      formData.append("total_credits",tempData.total_credits.toString())
      formData.append("coordinator",tempData.coordinator)
      formData.append("coordinator_cargue",tempData.coordinator_cargue)
      formData.append("coordinator_email",tempData.coordinator_email)
      if(tempData.postulation_document!=null&& tempData.postulation_document!=undefined)
        formData.append("postulation_document",tempData.postulation_document,tempData.postulation_document.name)
      formData.append("last_update",tempData.last_update)

      tempData.courses.forEach((value,index)=>{
        formData.append("courses[]", JSON.stringify({
          number_credits:value.number_credits,
          course_code:value.course_code,
          unsa_course_name:value.unsa_course_name,
          year:value.year,
          semester:value.semester,
          target_university_course_name:value.target_university_course_name
        }))

      })

      formData.append("post_state",tempData.post_state.toString())

      console.log("test form data",formData.getAll("courses[]"))

      this.postulationService.postPostulationCoevan(formData).subscribe(data=>{
        // console.log("services response postulation save:",data.msg)
      })

    }

    /**
     * send postulation to be reviewed
     */
    sendPostulation(){
      if(this.id !=null && this.id != undefined){

      }
    }

    /**
     * Remove postulation
     */
    deletePostulation(){

    }
    constructor(
        private activatedRoute:ActivatedRoute,
        private postulationService:PostulationService,
        private facultiesService:FacultiesService,
        private programaProfesionalService:ProgramaProfesionalService,
        private cycleService: CycleService,
        private academicYearService:AcademicYearService,
        private genDocumentCoevanService: GenDocumentCoevanService,
        private resoucesService:ResourcesService,
        private convocationService:ConvocationService,
        private store:Store<IAppState>,
        private router:Router
    ) {

      this.convocationCoevan = {} as IConvocationCoevanResponseDetail
      this.convocationGeneral = {} as IConvocationResponseDetail

      this.userImage$ = new Observable<string|undefined>();
      this.faculties = []
      this.programs = []
      this.cycles = []
      this.academicYears = []

      this.picture$ = new Observable<File[]>()
      this.picture = new File([],"")

      this.postulationDocument$ = of([])
      this.postulationDocument = undefined

      this.postulationCourses = [
        {
          order:1,
          number_credits:4,
          course_code:"445132",
          unsa_course_name:"Introducción al desarrollo de juegos",
          year:"3ro",
          semester:"par",
          target_university_course_name:"Desarrollo de juegos"
        }
      ]


      this.id = activatedRoute.snapshot.params['id']
      this.convocationId = activatedRoute.parent?.parent?.parent?.snapshot.params["id"]

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
        university: new FormGroup({
          id: new FormControl(1),
          name:new FormControl({
            value:'Universidad Nacional de San Agustín',
            disabled:true
          }),
          acronym:new FormControl("UNSA"),
          logo:new FormControl("https://upload.wikimedia.org/wikipedia/commons/3/3a/LOGO_UNSA.png")
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
        u_presentation_date : new FormControl((new Date()).toLocaleString(),Validators.required)
      })
    }

  /**
   * used to clean garbage data
   */
  ngOnDestroy(): void {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }


  /**
   * initialize the component
   */
  ngOnInit(): void {



    const sub1 =this.facultiesService.getAllFaculties().subscribe(data=>{
      this.faculties = data.data
      sub1.unsubscribe()
    })

    const sub2 = this.programaProfesionalService.getAllPrograms().subscribe(data=>{
      this.programs = data.data
      sub2.unsubscribe()
    })
    const sub3 = this.cycleService.getAllCycles().subscribe(data=>{
      this.cycles = data.data
      sub3.unsubscribe()
    })
    const sub4 = this.academicYearService.getAllAcademicYear().subscribe(data=>{
      this.academicYears = data.data
      sub4.unsubscribe()
    })

    const sub5 = this.convocationService.getConvocationCoevanDetail(this.convocationId).subscribe(data=>{
      this.convocationCoevan = data.data
      sub5.unsubscribe()
    })

    const sub6 = this.convocationService.getConvocation(this.convocationId).subscribe
    (data=>{
      this.convocationGeneral = data.data
      sub6.unsubscribe()
    })

    if(this.id !=undefined && this.id != null){

      this.postulationService.getPostulationById(this.id).subscribe(data=>{

        this.formPostulation.patchValue(
          {
            lastname: data.data.lastname,
            name: data.data.name,
            birthdate: new Date(data.data.birth_date),
            dni: data.data.dni,
            cityregion: data.data.city_region_postulant,
            cui: data.data.cui,
            address: data.data.current_address,
            mobilephone:data.data.phone,
            institutionalemail: data.data.email,
            contactnumber: data.data.contact_emergency_number,
            university: new FormGroup({
              id: new FormControl(data.data.origin_university.id),
              name:new FormControl(data.data.origin_university.name),
              acronym:new FormControl(data.data.origin_university.acronym),
              logo:new FormControl(data.data.origin_university.logo)
            }),
            u_webpage: data.data.web_page,
            u_cityregion: data.data.city_region_university,
            u_faculty: data.data.faculty.id,
            u_professional_program: data.data.professional_program.id,
            u_current_cicle: data.data.current_cicle.id,
            u_academic_year: data.data.academic_year.id,
            u_grades_mean: data.data.mean_grades,
            u_total_credits: data.data.total_credits,
            u_program_coordinator: data.data.coordinator,
            u_charge: data.data.coordinator_cargue,
            u_email: data.data.coordinator_email,
            u_presentation_date : data.data.last_update
          }
        )
        console.log("control:", this.formPostulation.controls)
        this.postulationCourses=[]
        data.data.courses.forEach((value,index)=>{
          this.postulationCourses.push({
            order:index,
            number_credits:value.number_credits,
            course_code:value.course_code,
            unsa_course_name:value.unsa_course_name,
            year:value.year,
            semester:value.semester,
            target_university_course_name:value.target_university_course_name
          })
        })

        this.picture$ = this.resoucesService.getImageToFile(data.data.photo+"?r="+Math.floor(Math.random()*100000)).pipe(map(data=>{
          this.picture = data.data
          return [data.data]
        }))

        this.postulationDocument$ = this.resoucesService.getPDFToFile(data.data.postulation_document).pipe(map(data=>{
          if(!data.error){
            this.postulationDocument = data.data
            return [data.data]
          }else{
            return []
          }
        }))
      })

    }else{
      this.picture$ = this.store.select(profileImageStateSelector).pipe(mergeMap(resp=>{
        return this.resoucesService.getImageToFile(resp+"?r="+Math.floor(Math.random()*100000)).pipe(map(data=>{

          if(!data.error){
            this.picture = data.data
            return [data.data]
          }else{
            return []
          }

        }))
      }))
    }

    this.unsubscribe.push(sub1);
    this.unsubscribe.push(sub2);
    this.unsubscribe.push(sub3);
    this.unsubscribe.push(sub4);
    this.unsubscribe.push(sub5);
    this.unsubscribe.push(sub6);
  }

  temptestFile(file:any){
    console.log("fileeee test:",file)
  }

  /**
   *
   * @returns return image as URL from a file
   */
  async getImage(){
    let tempImage:any = ""
    await new Promise((resolve,reject)=>{
      let reader=new FileReader()
      reader.onloadend = ()=>  {
        tempImage = reader.result
        resolve(tempImage)
      }
      reader.onerror = reject
      reader.readAsDataURL(this.picture)
    })

    return tempImage;
  }

  async generateDoc(){
    let imageInfo:any = ''

    imageInfo = await this.getImage()


    let tempData:IPostulationCoevanDocFormat={
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
        id: Number(this.formPostulation.get("university.id")?.value),
        name: this.formPostulation.get("university.name")?.value,
        acronym: this.formPostulation.get("university.acronym")?.value,
        logo: this.formPostulation.get("university.logo")?.value
      },
      web_page: this.formPostulation.controls["u_webpage"].value,
      city_region_university: this.formPostulation.controls["u_cityregion"].value,
      faculty: this.faculties.filter((value)=>value.id == this.formPostulation.value["u_faculty"])[0],
      professional_program: this.programs.filter((value)=>value.id == this.formPostulation.value["u_professional_program"])[0],
      current_cicle: this.cycles.filter((value)=>value.id == this.formPostulation.value["u_current_cicle"])[0],
      academic_year: this.academicYears.filter((value)=>value.id == this.formPostulation.value["u_academic_year"])[0],
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
      courses: this.postulationCourses,
      text_aval:this.convocationCoevan.avaltext,
      text_courses:this.convocationCoevan.coursestext,
      text_commitment:this.convocationCoevan.commitment
    }
    console.log("form data:",tempData)
    this.genDocumentCoevanService.generateDocumentPostulation(tempData)
  }

  goBack(){
    this.router.navigate([AppRoutingModule.ROUTES_VALUES.ROUTE_APP_HOME])
  }
  photoLoaded(event:any){
    this.picture = event.files[0]
  }

  downloadDocument(doc:IDocumentResponseDetail){
    this.resoucesService.downloadDocument(doc.url).subscribe(data=>{
      let a  = document.createElement('a')
      a.download = doc.type.name
      a.href = window.URL.createObjectURL(data.data)
      a.click()
    })
  }

  documentLoaded(event:any){
    this.postulationDocument = event.files[0]
  }


}
