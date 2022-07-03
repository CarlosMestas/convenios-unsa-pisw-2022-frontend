import { UserData } from './../../../../shared/models/user-data.model';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from './../../../../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-data',
  templateUrl: './verify-data.component.html',
  styleUrls: ['./verify-data.component.scss']
})
export class VerifyDataComponent implements OnInit {

  user: UserData|null
  constructor( private authService: AuthService ) {
    this.user = null;
  }

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      this.user = user
    })
  }

}
