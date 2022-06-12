import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-of-table-programs',
  templateUrl: './of-home-table-programs.html',
  styleUrls: ['./of-home-table-programs.scss']
})
export class OfHomeTablePrograms implements OnInit {
  prefix:string;
  constructor() {
    this.prefix = 'of-home-table-programs'
  }
  ngOnInit(): void {

  }

}
