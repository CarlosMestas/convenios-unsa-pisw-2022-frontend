import { Router } from '@angular/router';
import { AppRoutingModule } from './../../app.routes';
import { DialogYesNoComponent } from './../../../../shared/components/dialog-yes-no/dialog-yes-no.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProfileService } from './../../../../core/services/profile/profile.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from './../../../../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signUpForm: FormGroup
  private googleAuthServiceInitialized:boolean

  constructor(
    private authService:AuthService,
    private profileService:ProfileService,
    private matDialog:MatDialog,
    private router:Router
  ) {
    this.googleAuthServiceInitialized = false;
    this.signUpForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required]),
      repeatPassword: new FormControl('',[Validators.required])
    })
  }
  ngOnInit(): void {
    this.authService.isGoogleAuthServiceInitialized().subscribe(isInitialized =>{
        this.googleAuthServiceInitialized = isInitialized;
        this.renderButtonSignUp();
      })
      this.authService.signupStatus().subscribe(status=>{
        if(status){
          if(this.profileService.getProfileValue!=null&&this.profileService.getProfileValue!=undefined){
            const config = new MatDialogConfig()
            config.disableClose = true
            config.width = '40%'
            const dialogRef=this.matDialog.open(DialogYesNoComponent,config)
            dialogRef.afterClosed().subscribe(result => {
              this.authService.setSignUpStatus(false)
              if(result == true){
                this.router.navigate(["/"+AppRoutingModule.ROUTES_VALUES.ROUTE_APP_USER_PROFILE])
              }else if(result == false){
                this.router.navigate(["/"+AppRoutingModule.ROUTES_VALUES.ROUTE_APP_HOME])
              }else{
                this.router.navigate(["/"+AppRoutingModule.ROUTES_VALUES.ROUTE_APP_HOME])
              }
            });
          }
        }
      })
  }
  renderButtonSignUp(){
    if(this.googleAuthServiceInitialized){
      // @ts-ignore
      google.accounts.id.renderButton(
        document.getElementById("signUpDiv") as HTMLElement,
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
    return this.signUpForm.get('email');
  }
  public get password() : AbstractControl | null {
    return this.signUpForm.get('password');
  }
  public get repeatPassword() : AbstractControl | null{
    return this.signUpForm.get('repeatPassword');
  }

  submitSignUp():void{
    this.authService.userSignUp(this.signUpForm.value["email"],this.signUpForm.value["password"]).subscribe(data =>{

    })
  }
}
