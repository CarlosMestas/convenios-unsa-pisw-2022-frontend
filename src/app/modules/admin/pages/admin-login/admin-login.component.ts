import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../../core/services/admin/admin.service";
import {IAdmin} from "../../../../shared/interfaces/admin.interface";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../ngrx/app.state";
import {adminSignInRequestAction} from "../../../../ngrx/actions/admin/admin-auth.actions";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  public signInForm: FormGroup

  constructor(
    private adminService:AdminService,
    private store:Store<IAppState>,
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
    let userAdmin: IAdmin|null= {}as IAdmin
    userAdmin.email = this.signInForm.value["email"],
    userAdmin.password = this.signInForm.value["password"]
    this.store.dispatch(adminSignInRequestAction(userAdmin))

  }

}
