import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-of-home-carousel-news',
  templateUrl: './of-home-carousel-news.html',
  styleUrls: ['./of-home-carousel-news.scss']
})
export class OfHomeCarouselNews implements OnInit {
  prefix:string;
  constructor() {
    this.prefix = 'of-home-carousel-news'
  }
  ngOnInit(): void {
  }

}
