import { IProfile } from './../../../../shared/interfaces/profile.interface';
import { ProfileService } from './../../../../core/services/profile/profile.service';
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../core/services/auth/auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profile:IProfile|null
  email: string | undefined
  isPcreated: number | undefined

  constructor(
    private profileService:ProfileService,
    private authService:AuthService
  ){
    this.profile = null
    this.email = ''
    this.isPcreated = 0
  }
  ngOnInit(): void {
    this.authService.getUser().subscribe( user =>{
      this.profileService.getPerfil().subscribe(profile =>{
        this.profile = profile
        this.email = user?.email
        this.isPcreated = profile?.profile_created
      })
    })
  }

  convocTypeList: string[] = ['Ordinario', 'Extraordinario'];

}
