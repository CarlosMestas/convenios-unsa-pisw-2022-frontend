import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/ngrx/app.state';
import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ENUMConvocationType} from '../../../../shared/enum/convocation-type.enum';
import {ConvocationService} from "../../../../core/services/convocation/convocation.service";
import { ConvocatoriaRoutingModule } from '../../convocatoria.routes';
import {convocationFetchSuccessAction} from "../../../../ngrx/actions/convocation/convocation.actions";

@Component({
  selector: 'app-new-convocation',
  templateUrl: './new-convocation.component.html',
  styleUrls: ['./new-convocation.component.scss']
})
export class NewConvocationComponent implements OnInit {
  public convocationForm: FormGroup
  typeSelectedConv: number
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
    let dateStart:Date = this.convocationForm.value["dateStart"]
    let dateEnd:Date = this.convocationForm.value["dateEnd"]

    const formData = new FormData()
    formData.append("title",this.convocationForm.value["title"])
    formData.append("correlative",this.convocationForm.value["correlative"])
    formData.append("type",this.convocationForm.value["type"])
    formData.append("description",this.convocationForm.value["description"])
    formData.append("start_date",dateStart.getFullYear()+"-"+(dateStart.getMonth()+1)+"-"+dateStart.getDate())
    formData.append("end_date",dateEnd.getFullYear()+"-"+(dateEnd.getMonth()+1)+"-"+dateEnd.getDate())
    formData.append("base",this.fileBase,this.fileBase.name)
    formData.append("afiche",this.fileAfiche,this.fileAfiche.name)

    this.convocatory.registerConvocation(formData).subscribe(data =>{
      this.store.dispatch(convocationFetchSuccessAction({convocation: data.data}))
      console.log("ERROR?", data)
    })
    //envío del formulario de convocation
    this.router.navigate(["../"+ConvocatoriaRoutingModule.ROUTES_VALUES.ROUTE_CONVOCATORIA_NEW_DETAIL],{relativeTo: this.activatedRoute})
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

}
