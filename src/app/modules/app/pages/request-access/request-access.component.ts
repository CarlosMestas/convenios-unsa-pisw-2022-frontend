import { AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.scss']
})
export class RequestAccessComponent implements OnInit {
  public signInForm: FormGroup

  constructor(
  ) {
    this.signInForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email])
    })
  }

  ngOnInit(): void {
  }

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


  submitSignIn():void{

  }
}
