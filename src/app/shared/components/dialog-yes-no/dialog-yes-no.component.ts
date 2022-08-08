import { Router } from '@angular/router';
import { AppRoutingModule } from './../../../modules/app/app.routes';
import { dialogProfileNotConfiguredDismissAction } from './../../../ngrx/actions/profile/profile.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IAppState } from 'src/app/ngrx/app.state';

@Component({
  selector: 'app-dialog-yes-no',
  templateUrl: './dialog-yes-no.component.html',
  styleUrls: ['./dialog-yes-no.component.scss']
})
export class DialogYesNoComponent implements OnInit {

  constructor(
    private store:Store<IAppState>,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  yes():void{
    this.store.dispatch(dialogProfileNotConfiguredDismissAction())
    this.router.navigate(["/"+AppRoutingModule.ROUTES_VALUES.ROUTE_APP_USER_PROFILE])
  }
  no():void{
    this.store.dispatch(dialogProfileNotConfiguredDismissAction())
    this.router.navigate(["/"+AppRoutingModule.ROUTES_VALUES.ROUTE_APP_HOME])
  }
}
