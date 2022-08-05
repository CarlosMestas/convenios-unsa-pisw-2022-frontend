import { IProfileType } from './../../../../shared/interfaces/profile-type.interface';
import { TypeProfileService } from './../../../../core/services/type-profile/type-profile.service';
import { IProfile } from './../../../../shared/interfaces/profile.interface';
import { ProfileService } from './../../../../core/services/profile/profile.service';
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../core/services/auth/auth.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public profileForm: FormGroup
  profile:IProfile|null
  email: string | undefined
  isPcreated: number | undefined
  isEdit:boolean
  typesProfile:IProfileType[] = [];
  birthdate:string = ""
  constructor(
    private profileService:ProfileService,
    private authService:AuthService,
    private typeProfileService: TypeProfileService
  ){
    this.profileForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.maxLength(100)]),
      birthdate: new FormControl('',[Validators.required]),
      dni: new FormControl('',[Validators.required, Validators.maxLength(8)]),
      phone: new FormControl('')
    })

    this.profile = {} as IProfile
    this.email = ''
    this.isPcreated = 0
    this.isEdit = false
  }
  ngOnInit(): void {
    this.authService.getUser().subscribe( user =>{
      this.profileService.getPerfil().subscribe(profile =>{
        this.profile = profile
        this.email = user?.email
        if (profile?.profile_created == 0){
          this.isEdit = true
        }

      })
    })

      this.typeProfileService.fetchTypeProfile().subscribe(resp =>{
        this.typesProfile = resp.data
        console.log(resp.data[0])
      })



  }
  submitProfile():void{
    // @ts-ignore
    let profileUpdate: IProfile = this.profile
    // @ts-ignore
    profileUpdate.name = this.profileForm.value["name"]
    // @ts-ignore
    profileUpdate.last_name = this.profileForm.value["lastname"]
    // @ts-ignore
    profileUpdate.address = this.profileForm.value["address"]

    // @ts-ignore
    profileUpdate.phone = this.profileForm.value["phone"]

    // @ts-ignore


    let date:any = this.profileForm.value["birthdate"]
    profileUpdate.birthdate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()

    // @ts-ignore
    profileUpdate.profile_created= 1
    console.log("Profile", profileUpdate)
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
  public get dni() : AbstractControl | null {
    return this.profileForm.get('dni');
  }
  public get number() : AbstractControl | null {
    return this.profileForm.get('number');
  }
  public get birthDate() : AbstractControl | null {
    return this.profileForm.get('birthdate')
  }

  onDate(event:any):void{
    console.log(event)
  }
}
