import { AppRoutingModule } from './../../app.routes';
import { ProfileService } from './../../../../core/services/profile/profile.service';
import { DialogYesNoComponent } from './../../../../shared/components/dialog-yes-no/dialog-yes-no.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
//Import Services
import { AuthService } from './../../../../core/services/auth/auth.service';

//General imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public signInForm: FormGroup
  private googleAuthServiceInitialized:boolean

  constructor(
    private router:Router,
    private authService:AuthService,
    private matDialog:MatDialog,
    private profileService:ProfileService
  )
  {
    this.googleAuthServiceInitialized = false;
    this.signInForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
    //this part suscribe to service to know if google Auth is configured and initialized
    this.authService.isGoogleAuthServiceInitialized().subscribe(isInitialized =>{
      this.googleAuthServiceInitialized = isInitialized;
      this.renderButtonSignIn();
    })

  }

  /**
   * this functions shows a button if the property 'googleAuthServiceInitialized' is true
   */
  renderButtonSignIn(): void{
    if(this.googleAuthServiceInitialized){
      // @ts-ignore
      google.accounts.id.renderButton(
        document.getElementById("signInDiv") as HTMLElement,
        {
          theme:'filled_blue',
          size:'large',
          width: 270,
          text:'continue_with'
        }
      )
    }
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
