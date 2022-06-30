import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-of-home-carousel-news',
  templateUrl: './of-home-carousel-news.component.html',
  styleUrls: ['./of-home-carousel-news.component.scss']
})
export class OfHomeCarouselNewsComponent implements OnInit {

  prefix:string;
  constructor() {
    this.prefix = 'of-home-carousel-news'
  }
  ngOnInit(): void {
  }


}
