import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.scss']
})
export class SearchBar implements OnInit {
  prefix:string;
  constructor() {
    this.prefix = 'search-bar'
  }
  ngOnInit(): void {
  }

}
