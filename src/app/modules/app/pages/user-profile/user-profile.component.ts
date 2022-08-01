import { IProfile } from './../../../../shared/interfaces/profile.interface';
import { ProfileService } from './../../../../core/services/profile/profile.service';
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../core/services/auth/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profile:IProfile|null
  constructor(
    private profileService:ProfileService,
    private authService:AuthService
  ){
    this.profile = null
  }
  ngOnInit(): void {
    this.authService.getUser().subscribe( user =>{
      this.profileService.fetchProfile(Number(user?.id)).subscribe(profile =>{
        this.profile = profile.data
      })
    })
  }

  convocTypeList: string[] = ['Ordinario', 'Extraordinario'];

}
