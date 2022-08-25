import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/ngrx/app.state';
import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
@Component({
  selector: 'app-new-convocation',
  templateUrl: './new-convocation.component.html',
  styleUrls: ['./new-convocation.component.scss']
})
export class NewConvocationComponent implements OnInit {
  public convocationForm: FormGroup
  typeSelectedConv$: string
  fileName = '';
  fileNameAfiche = '';

  typeConvocatory = [
    {
      id:1,
      name:'Ordinario - Estudiante'
    },
    {
      id:2,
      name:'Ordinario - Docente'
    },
    {
      id:3,
      name:'Extraordinario - Estudiante'
    },
    {
      id:4,
      name:'Extraordinario - Docente'
    }
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
    private store:Store<IAppState>
  ) {
    this.typeSelectedConv$ = 'ordinario'
    this.convocationForm = new FormGroup({
      name: new FormControl( '',[Validators.required]),
      correlative: new FormControl('',[Validators.required]),
      typeConvocat: new FormControl('',[Validators.required]),
      semestre: new FormControl('',[Validators.required]),
      institute: new FormControl('',[Validators.required]),
      dateStart: new FormControl('',[Validators.required]),
      dateEnd: new FormControl('',[Validators.required]),
    })
   }
    ngOnInit() {
    }

  submitProfile():void {
  }

  onFileSelected(event: any, id: number) {

    const file:File = event.target.files[0];
    if (file) {
      if(id == 1)
        this.fileName = file.name;
      if(id == 2)
        this.fileNameAfiche = file.name;

      const formData = new FormData();
      formData.append("thumbnail", file);
      //const upload$ = this.http.post("/api/thumbnail-upload", formData);
      //upload$.subscribe();
    }
  }
  changeType(id: number):void {
    this.typeSelectedConv$ = 'extraordinary'
  }
}
