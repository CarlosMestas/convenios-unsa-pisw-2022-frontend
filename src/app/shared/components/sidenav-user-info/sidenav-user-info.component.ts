import { IProfile } from './../../interfaces/profile.interface';
import { ProfileService } from './../../../core/services/profile/profile.service';
import { UserData } from './../../models/user-data.model';
import { User } from './../../models/user.model';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sidenav-user-info',
  templateUrl: './sidenav-user-info.component.html',
  styleUrls: ['./sidenav-user-info.component.scss']
})
export class SidenavUserInfoComponent implements OnInit {

  @Input() user: User | null ;
  @Input() collapsed: boolean ;
  profile:IProfile|null;
  constructor(private profileService:ProfileService) {
    this.user = {} as User
    this.collapsed = true;
    this.profile = null
  }


  ngOnInit(): void {
    this.profileService.getPerfil().subscribe(data=>{
      this.profile = data
    })
  }

  get existUser():boolean{
    return this.user != {} as User
  }

}
