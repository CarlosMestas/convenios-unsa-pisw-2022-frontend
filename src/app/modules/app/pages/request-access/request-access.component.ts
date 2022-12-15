import { AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {ExternalStudentsService} from "../../../../core/services/external-students/external-students.service";
import {IExternalStudent} from "../../../../shared/interfaces/external-student.interface";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.scss'],
  providers: [MessageService]

})
export class RequestAccessComponent implements OnInit {
  public requestForm: FormGroup
  text=""

  constructor(
    private externalStudent: ExternalStudentsService,
    private messageService: MessageService
  ) {
    this.requestForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      document: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  public get name() : AbstractControl | null {
    return this.requestForm.get('name');
  }
  public get lastname() : AbstractControl | null {
    return this.requestForm.get('lastname');
  }

  public get email() : AbstractControl | null {
    return this.requestForm.get('email');
  }
  public get password() : AbstractControl | null {
    return this.requestForm.get('password');
  }

  submitSignIn() {
    let requestAux = {} as IExternalStudent
    requestAux.name = this.requestForm.value["name"]
    requestAux.lastname =  this.requestForm.value["lastname"]
    requestAux.email = this.requestForm.value["email"]
    requestAux.justification = this.requestForm.value["document"]
    this.externalStudent.sendRequest(requestAux).subscribe(r=>{
      if (r.error){
        this.messageService.add({key: 'tl', severity: 'error', summary: 'Error en el envío', detail: 'El correo ya fue usado para una solicitud'});
      }else{
        this.messageService.add({key: 'tl', severity: 'success', summary: 'Solicitud enviada con éxito', detail: ''});
        this.clear()
      }
    })
  }
  change(event: any){
    this.text = event.target.value;
  }
  clear(){
    this.requestForm.reset();
    this.text = ""
  }
}
