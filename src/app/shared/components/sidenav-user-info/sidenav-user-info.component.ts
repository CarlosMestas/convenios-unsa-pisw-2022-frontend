import { profileImageStateSelector, profileTypeDescriptionSelector } from './../../../ngrx/selectors/profile/profile.selector';
import { Store } from '@ngrx/store';
import { IUser } from './../../interfaces/user.interface';
import { Observable } from 'rxjs';
import { IProfile } from './../../interfaces/profile.interface';
import { ProfileService } from './../../../core/services/profile/profile.service';
import { User } from './../../models/user.model';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IAppState } from 'src/app/ngrx/app.state';

@Component({
  selector: 'app-sidenav-user-info',
  templateUrl: './sidenav-user-info.component.html',
  styleUrls: ['./sidenav-user-info.component.scss']
})
export class SidenavUserInfoComponent implements OnInit {
  @Input() user: IUser|null;
  @Input() collapsed: boolean ;
  profile:IProfile|null;
  userImage$:Observable<string|undefined>;
  profileType$:Observable<string|undefined>;


  constructor(
    private profileService:ProfileService,
    private store:Store<IAppState>
    ) {
    this.collapsed = true;
    this.profile = null
    this.user = null
    this.userImage$ = new Observable<string>()
    this.profileType$ = new Observable<string>()
  }


  ngOnInit(): void {
    this.profileService.getPerfil().subscribe(data=>{
      this.profile = data
    })

    this.userImage$ = this.store.select(profileImageStateSelector)
    this.profileType$ = this.store.select(profileTypeDescriptionSelector)
  }

  get existUser():boolean{
    return this.user != {} as User
  }

}
