import { User } from './../../models/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-user-info',
  templateUrl: './sidenav-user-info.component.html',
  styleUrls: ['./sidenav-user-info.component.scss']
})
export class SidenavUserInfoComponent implements OnInit {

  @Input() user: User ;
  @Input() collapsed: boolean ;
  constructor() {
    this.user = {} as User
    this.collapsed = true;
  }

  ngOnInit(): void {
  }

  get existUser():boolean{
    return this.user != {} as User
  }
}
