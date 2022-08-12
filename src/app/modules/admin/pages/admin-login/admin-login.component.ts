import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../core/services/auth/auth.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  public signInForm: FormGroup

  constructor(
    private authService:AuthService,
  ) {
    this.signInForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }
  public get email() : AbstractControl | null {
    return this.signInForm.get('email');
  }
  public get password() : AbstractControl | null {
    return this.signInForm.get('password');
  }
  submitSignIn():void{
    this.authService.userSignIn(this.signInForm.value["email"]).subscribe(data =>{
    })
  }

}
