import { SidenavService } from './../../../../core/services/sidenav/sidenav.service';
import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-of-home-carousel-news',
  templateUrl: './of-home-carousel-news.component.html',
  styleUrls: ['./of-home-carousel-news.component.scss']
})
export class OfHomeCarouselNewsComponent implements OnInit {
  prefix:string;
  heightCarousel:number;
  widthCarousel:number;
  screenWidth:number = 0
  collapsed:boolean = true

  constructor(
    private sidenavService:SidenavService
  ) {
    this.prefix = 'of-home-carousel-news'
    this.screenWidth = (window.innerWidth - 40 - 20 - (this.collapsed?80:256))*(2/3)
    this.widthCarousel = this.screenWidth
    this.heightCarousel = this.screenWidth*(9/16)
  }

  ngOnInit(): void {
    this.sidenavService.collapsed$.subscribe(data=>{
      this.collapsed = data.collapsed
    })
  }

  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth = (window.innerWidth - 40 - 20 - (this.collapsed?80:256))*(2/3)
    this.widthCarousel = this.screenWidth
    this.heightCarousel = this.screenWidth*(9/16)

  }
}
