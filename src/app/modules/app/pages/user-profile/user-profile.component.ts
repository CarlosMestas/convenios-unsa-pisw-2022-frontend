import { Observable } from 'rxjs';
import { userEmailStateSelector } from '../../../../ngrx/selectors/auth/user-auth.selector';
import { profileProfileStateSelector } from '../../../../ngrx/selectors/profile/profile.selector';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../ngrx/app.state';
import { IProfileType } from './../../../../shared/interfaces/profile-type.interface';
import { TypeProfileService } from './../../../../core/services/type-profile/type-profile.service';
import { IProfile } from './../../../../shared/interfaces/profile.interface';
import { ProfileService } from './../../../../core/services/profile/profile.service';
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../core/services/auth/auth.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {
  TypeUserIdentificationService
} from "../../../../core/services/type-user-identification/type-user-identification.service";
import {IUserIdentification} from "../../../../shared/interfaces/user-identification.interface";
import {IUserIdentificationType} from "../../../../shared/interfaces/user-identification-type.interface";
import { userAuthUserStateSelector } from 'src/app/ngrx/selectors/auth/user-auth.selector';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public profileForm: FormGroup
  profile:IProfile|null
  email$: Observable<string|null>
  isPcreated: number | undefined
  isEdit:boolean
  typesProfile:IProfileType[] = [];
  typesIdentification:IUserIdentificationType[] = [];
  birthdate:string = ""
  constructor(
    private profileService:ProfileService,
    private authService:AuthService,
    private typeProfileService: TypeProfileService,
    private typeUserIdentificationService: TypeUserIdentificationService,
    private store:Store<IAppState>,
  ){
    this.profile = {} as IProfile
    this.email$ = new Observable<string|null>()
    this.isPcreated = 0
    this.isEdit = false
    this.profileForm = new FormGroup({
      name: new FormControl( {value:'', disabled:!this.isEdit},[Validators.required]),
      lastname: new FormControl({value:'', disabled:!this.isEdit},[Validators.required]),
      address: new FormControl({value:'', disabled:!this.isEdit},[Validators.maxLength(100)]),
      birthdate: new FormControl('',[Validators.required]),
      typeUser: new FormControl('',[Validators.required]),
      valueIdentification: new FormControl({value:'', disabled:!this.isEdit},[Validators.required, Validators.maxLength(8)]),
      phone: new FormControl({value:'', disabled:!this.isEdit}),
      typeUserIdentification: new FormControl('',[Validators.required]),

    })
  }
  ngOnInit(): void {

    this.email$ = this.store.select(userEmailStateSelector)

    this.store.select(profileProfileStateSelector).subscribe(profile=>{
      console.log("USUARIO", profile)
      this.profile = profile
      if (profile?.profile_created == 0){
        this.isEdit = true
      }
      this.profileForm.controls['name'].reset({ value: profile?.name, disabled: !this.isEdit });
      this.profileForm.controls['lastname'].reset({ value: profile?.last_name, disabled: !this.isEdit });
      this.profileForm.controls['address'].reset({ value: profile?.address, disabled: !this.isEdit });
      this.profileForm.controls['typeUserIdentification'].setValue(profile?.identification.type.id);
      this.profileForm.controls['valueIdentification'].reset({ value: profile?.identification.value, disabled: !this.isEdit });
      this.profileForm.controls['phone'].reset({ value: profile?.phone, disabled: !this.isEdit });
      this.profileForm.controls['typeUser'].setValue(profile?.type.id);
    })

      this.typeProfileService.fetchTypeProfile().subscribe(resp =>{
        this.typesProfile = resp.data
      })

      this.typeUserIdentificationService.fetchTypeUserIdentification().subscribe(resp =>{
        this.typesIdentification = resp.data
      })
  }
  submitProfile():void{
    console.log("ds")

    // @ts-ignore
    const profileUpdate: IProfile = this.profile;
    profileUpdate.name = this.profileForm.get('name')?.value
    profileUpdate.last_name = this.profileForm.value["lastname"]
    profileUpdate.address = this.profileForm.value["address"]
    profileUpdate.phone = this.profileForm.value["phone"]

    // @ts-ignore
    let date:any = this.profileForm.value["birthdate"]
    profileUpdate.birthdate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()

    // @ts-ignore
    profileUpdate.profile_created= 1
    profileUpdate.type = this.profileForm.value["typeUser"]
    profileUpdate.identification.type = this.profileForm.value["typeUserIdentification"]
    profileUpdate.identification.value = this.profileForm.value["valueIdentification"]

    console.log("testing profileUpdate",profileUpdate)


    this.profileService.updateProfile(profileUpdate).subscribe(data =>{
      console.log("PERFIL CREADO", profileUpdate)
    })
    this.isEdit = false
  }

  editProfile():void{
    this.isEdit = true
  }
  public get name() : AbstractControl | null {
    return this.profileForm.get('name');
  }
  public get lastname() : AbstractControl | null {
    return this.profileForm.get('lastname');
  }
  public get address() : AbstractControl | null {
    return this.profileForm.get('address');
  }
  public get valueIdentification() : AbstractControl | null {
    return this.profileForm.get('valueIdentification');
  }
  public get number() : AbstractControl | null {
    return this.profileForm.get('number');
  }
  public get birthDate() : AbstractControl | null {
    return this.profileForm.get('birthdate')
  }
  public get typeUser() : AbstractControl | null {
    return this.profileForm.get('typeUser')
  }

  onDate(event:any):void{
    console.log(event)
  }
}
