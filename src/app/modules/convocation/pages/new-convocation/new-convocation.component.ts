import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/ngrx/app.state';
import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ENUMConvocationType} from '../../../../shared/enum/convocation-type.enum';
import {IConvocationNew} from "../../../../shared/interfaces/convocation/convocation-new.interface";
import {ConvocationService} from "../../../../core/services/convocation/convocation.service";
import { ConvocatoriaRoutingModule } from '../../convocatoria.routes';

@Component({
  selector: 'app-new-convocation',
  templateUrl: './new-convocation.component.html',
  styleUrls: ['./new-convocation.component.scss']
})
export class NewConvocationComponent implements OnInit {
  public convocationForm: FormGroup
  typeSelectedConv: number
  typeEvents: string[] = ['Simposio', 'Foro', 'Conferencia'];
  fileName = '';
  fileNameAfiche = '';
  fileBase:File = new File([''],"",)
  fileAfiche:File = new File([''],"",)

  typeConvocatory =
    [
      {
        id:1,
        name:ENUMConvocationType.PIVE
      },
      {
        id:2,
        name:ENUMConvocationType.PIVDO
      },
      {
        id:3,
        name: ENUMConvocationType.ORD_DOC_VIENEN
      },
      {
        id:4,
        name: ENUMConvocationType.ORD_DOC_VAN
      },
      {
        id:5,
        name: ENUMConvocationType.ORD_EST_VIENEN
      },
      {
        id:6,
        name: ENUMConvocationType.ORD_EST_VAN
      },
    ]
  semester = [
    {
      id:1,
      name:'2022 - II'
    },
    {
      id:2,
      name:'2022 - I'
    },
  ]
  constructor(
    private store:Store<IAppState>,
    private convocatory: ConvocationService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    this.typeSelectedConv = 1
    this.convocationForm = new FormGroup({
      title: new FormControl( '',[Validators.required]),
      correlative: new FormControl('',[Validators.required]),
      type: new FormControl('',[Validators.required]),
      description: new FormControl(''),
      semestre: new FormControl(''),
      institute: new FormControl(''),
      dateStart: new FormControl(new Date(),[Validators.required]),
      dateEnd: new FormControl(new Date(),[Validators.required]),
    })
   }
    ngOnInit() {
    }

  submitProfile():void {
    let newConvocation: IConvocationNew = {} as IConvocationNew
    newConvocation.title =  this.convocationForm.value["title"]
    newConvocation.correlative =  this.convocationForm.value["correlative"]
    newConvocation.type =  this.convocationForm.value["type"]
    newConvocation.description =  this.convocationForm.value["description"]
    let dateStart:Date = this.convocationForm.value["dateStart"]
    let dateEnd:Date = this.convocationForm.value["dateEnd"]
    newConvocation.start_date =  dateStart.getFullYear()+"-"+(dateStart.getMonth()+1)+"-"+dateStart.getDate()
    newConvocation.end_date =  dateEnd.getFullYear()+"-"+(dateEnd.getMonth()+1)+"-"+dateEnd.getDate()

    newConvocation.base = this.fileBase
    newConvocation.afiche = this.fileAfiche
    console.log("ENVIO CONV", newConvocation)
    this.convocatory.registerConvocation(newConvocation).subscribe(data =>{
      console.log("ERROR?", data)
    })
  }

  onFileSelected(event: any, id: number) {
      if(id == 1){
        this.fileBase =  event.target.files[0]
        this.fileName = this.fileBase.name;
      }
      if(id == 2) {
        this.fileAfiche =  event.target.files[0]
        this.fileNameAfiche = this.fileAfiche.name;      }


    }
  submit(){
    //envío del formulario de convocation
    this.router.navigate(["../"+ConvocatoriaRoutingModule.ROUTES_VALUES.ROUTE_CONVOCATORIA_NEW_DETAIL],{relativeTo: this.activatedRoute})
  }

}
