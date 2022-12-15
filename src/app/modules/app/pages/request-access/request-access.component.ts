import { AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {ExternalStudentsService} from "../../../../core/services/external-students/external-students.service";
import {IExternalStudent} from "../../../../shared/interfaces/external-student.interface";

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.scss']
})
export class RequestAccessComponent implements OnInit {
  public signInForm: FormGroup
  //uploadedFiles: any[] = [];

  constructor(
    private externalStudent: ExternalStudentsService,
  ) {
    this.signInForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      document: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }
/*
  onBasicUpload(event: any) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }

  }*/
  public get name() : AbstractControl | null {
    return this.signInForm.get('name');
  }
  public get lastname() : AbstractControl | null {
    return this.signInForm.get('lastname');
  }

  public get email() : AbstractControl | null {
    return this.signInForm.get('email');
  }
  public get password() : AbstractControl | null {
    return this.signInForm.get('password');
  }
  public get document() : AbstractControl | null {
    return this.signInForm.get('document');
  }


  submitSignIn() {
    let requestAux = {} as IExternalStudent
    requestAux.name = this.signInForm.value["name"]
    requestAux.lastname =  this.signInForm.value["lastname"]
    requestAux.email = this.signInForm.value["email"]
    requestAux.justification = this.signInForm.value["document"]
    this.externalStudent.sendRequest(requestAux).subscribe(r=>{
      console.log("ver sms", r)
    })
  }
}
