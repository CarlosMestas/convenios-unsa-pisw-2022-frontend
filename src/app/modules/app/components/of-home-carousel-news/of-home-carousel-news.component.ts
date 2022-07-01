import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-of-home-carousel-news',
  templateUrl: './of-home-carousel-news.component.html',
  styleUrls: ['./of-home-carousel-news.component.scss']
})
export class OfHomeCarouselNewsComponent implements OnInit {
  prefix:string;
  heightCarousel:number=430;
  widthCarousel:number=760;
  screenWidth:number = 0

  constructor() {
    this.prefix = 'of-home-carousel-news'
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth = window.innerWidth

    if(this.screenWidth > 1366){
      this.widthCarousel = 760
      this.heightCarousel = 430
    } else if(this.screenWidth <= 1366 && this.screenWidth > 1024){
      this.widthCarousel = 500
      this.heightCarousel = 300
    } else if(this.screenWidth <= 1024){
      this.widthCarousel = 400
      this.heightCarousel = 220
    }
  }
}
