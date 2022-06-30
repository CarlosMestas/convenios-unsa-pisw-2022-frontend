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
    private authService:AuthService
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
    this.authService.normalUserSignUp(this.signUpForm.value["email"],this.signUpForm.value["password"]).subscribe(data =>{
      console.log(data.data)
    })
  }
}
