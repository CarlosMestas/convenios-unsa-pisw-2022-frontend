import { Observable } from 'rxjs';
import { IAppState } from 'src/app/ngrx/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { dialogNotificationDataStateSelector } from 'src/app/ngrx/selectors/notification/dialog-notification.selector';
import { IDialogNotification } from '../../interfaces/notification.interface';
import { dismissNotificationAction } from 'src/app/ngrx/actions/notifications/dialog-notifications.actions';

@Component({
  selector: 'app-dialog-notification',
  templateUrl: './dialog-notification.component.html',
  styleUrls: ['./dialog-notification.component.scss']
})
export class DialogNotificationComponent implements OnInit {

  dataNotification$:Observable<IDialogNotification>
  constructor(
    private store:Store<IAppState>
  ) {
    this.dataNotification$ = new Observable<IDialogNotification>()
  }

  ngOnInit(): void {
    this.dataNotification$ = this.store.select(dialogNotificationDataStateSelector)
  }
  agree():void{
    this.store.dispatch(dismissNotificationAction())
  }
}
