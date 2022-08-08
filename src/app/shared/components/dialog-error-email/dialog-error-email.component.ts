import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/ngrx/app.state';
import { dialogUserRegisterWrongEmailDismissAction } from 'src/app/ngrx/actions/auth/user-auth.actions';

@Component({
  selector: 'app-dialog-error-email',
  templateUrl: './dialog-error-email.component.html',
  styleUrls: ['./dialog-error-email.component.scss']
})
export class DialogErrorEmailComponent implements OnInit {

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit(): void {
  }
  agree():void{
    this.store.dispatch(dialogUserRegisterWrongEmailDismissAction())
  }
}
