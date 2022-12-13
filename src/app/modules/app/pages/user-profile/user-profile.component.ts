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
import {IUserIdentificationType} from "../../../../shared/interfaces/user-identification-type.interface";
import {IUserIdentification} from "../../../../shared/interfaces/user-identification.interface";
import {UserIdentification} from "../../../../shared/models/user-identification";
import {TypeIdentification} from "../../../../shared/models/type-user-identification.model";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public profileForm: FormGroup
  profile:IProfile
  email$: Observable<string|null>
  isEdit:boolean
  typesProfile:IProfileType[] = [];
  typesIdentification:IUserIdentificationType[] = [];
  birthdate:string = ""
  img:string=""
  constructor(
    private profileService:ProfileService,
    private authService:AuthService,
    private typeProfileService: TypeProfileService,
    private typeUserIdentificationService: TypeUserIdentificationService,
    private store:Store<IAppState>,
  ){
    this.profile = {} as IProfile
    this.email$ = new Observable<string|null>()
    this.isEdit = true
    this.profileForm = new FormGroup({
      name: new FormControl( '',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.maxLength(100)]),
      datepicker: new FormControl('',[Validators.required]),
      typeUser: new FormControl('',[Validators.required]),
      valueIdentification: new FormControl('',[Validators.required, Validators.maxLength(8)]),
      phone: new FormControl(''),
      typeUserIdentification: new FormControl('',[Validators.required]),

    })
  }
  ngOnInit(): void {

    this.email$ = this.store.select(userEmailStateSelector)

    this.store.select(profileProfileStateSelector).subscribe(profile=>{
      if(profile!= null) this.profile = profile
      if (profile?.profile_created == 1){
        this.profileForm.controls['name'].reset(profile?.name);
        this.profileForm.controls['lastname'].reset(profile?.last_name);
        this.profileForm.controls['address'].reset(profile?.address);
        // @ts-ignore
        this.profileForm.controls['datepicker'].reset(this.convertDate(profile.birthdate));
        this.profileForm.controls['typeUserIdentification'].setValue(profile?.identification.type.id);
        this.profileForm.controls['valueIdentification'].reset(profile?.identification.value);
        this.profileForm.controls['phone'].reset( profile?.phone);
        this.profileForm.controls['typeUser'].setValue(profile?.type.id);
        this.disabledForm()
      }
    })

      this.typeProfileService.fetchTypeProfile().subscribe(resp =>{
        this.typesProfile = resp.data
      })

      this.typeUserIdentificationService.fetchTypeUserIdentification().subscribe(resp =>{
        this.typesIdentification = resp.data
      })
  }
  convertDate(_cadena: string):any {
    let startDate = new Date()
    startDate.setFullYear(Number(_cadena.slice(0,4)))
    startDate.setDate(Number(_cadena.slice(8,10)))
    startDate.setMonth(Number(_cadena.slice(5,7))-1)
    return startDate
  }
    submitProfile():void{
    let profileUpdate: IProfile = this.profile;
      let typeIdent: IUserIdentificationType =  new TypeIdentification(0, '')
      let userIdent: IUserIdentification = new UserIdentification(0, '', typeIdent)
    if(profileUpdate!=null){
      profileUpdate.name = this.profileForm.value["name"]
      profileUpdate.last_name = this.profileForm.value["lastname"]
      profileUpdate.address = this.profileForm.value["address"]
      profileUpdate.phone = this.profileForm.value["phone"]
      let date:Date = this.profileForm.value["datepicker"]
      profileUpdate.birthdate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()
      profileUpdate.profile_created= 1
      profileUpdate.type = this.profileForm.value["typeUser"]
      typeIdent.id = this.profileForm.value["typeUserIdentification"]
      userIdent.value = this.profileForm.value["valueIdentification"]
      userIdent.type = typeIdent
      profileUpdate.identification = userIdent

      this.profileService.updateProfile(profileUpdate).subscribe(data =>{
      })
      this.disabledForm()
    }

  }
  receiveMessage($event: any) {
    this.img = $event
  }
  editProfile():void{
    this.isEdit = true
    this.profileForm.enable()
  }
  disabledForm():void{
    this.isEdit = false
    this.profileForm.disable()
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
