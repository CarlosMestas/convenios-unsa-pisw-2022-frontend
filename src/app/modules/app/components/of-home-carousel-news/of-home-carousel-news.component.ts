import { IConvocationResponseDetail } from './../../../../shared/interfaces/convocation.interface';
import { Subscription } from 'rxjs';
import { ConvocationService } from './../../../../core/services/convocation/convocation.service';

import { SidenavService } from './../../../../core/services/sidenav/sidenav.service';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-of-home-carousel-news',
  templateUrl: './of-home-carousel-news.component.html',
  styleUrls: ['./of-home-carousel-news.component.scss']
})
export class OfHomeCarouselNewsComponent implements OnInit, OnDestroy {
  prefix:string;
  heightCarousel:number;
  widthCarousel:number;
  screenWidth:number = 0
  collapsed:boolean = true
  convocations:IConvocationResponseDetail[]
  private unsubscribe: Subscription[] = [];

  constructor(
    private sidenavService:SidenavService,
    private convocationService:ConvocationService
  ) {

    this.convocations = []
    this.prefix = 'of-home-carousel-news'
    this.screenWidth = (window.innerWidth - 40 - 20 - (this.collapsed?80:256))*(2/3)
    this.widthCarousel = this.screenWidth
    this.heightCarousel = this.screenWidth*(9/16)
  }

  ngOnInit(): void {
    this.sidenavService.collapsed$.subscribe(data=>{
      this.collapsed = data.collapsed
    })

    const sub1 = this.convocationService.getAllConvocationsByDate(13).subscribe(data=>{
      this.convocations = data.data
      sub1.unsubscribe()
    })
    this.unsubscribe.push(sub1)
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }

  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth = (window.innerWidth - 40 - 20 - (this.collapsed?80:256))*(2/3)
    this.widthCarousel = this.screenWidth
    this.heightCarousel = this.screenWidth*(9/16)

  }
}
