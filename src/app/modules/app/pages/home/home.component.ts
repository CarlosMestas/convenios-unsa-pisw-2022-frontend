import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  prefix:string;
  constructor() {
    this.prefix = 'home-component'
  }

  ngOnInit(): void {
  }

}
