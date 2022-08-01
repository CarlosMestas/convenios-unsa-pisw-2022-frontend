import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  prefix:string;
  constructor() {
    this.prefix = 'search-bar'
  }
  ngOnInit(): void {
  }


}
