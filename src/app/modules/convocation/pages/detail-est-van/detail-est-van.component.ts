import { IConvocationCoevanResponseDetail } from 'src/app/shared/interfaces/convocation-coevan.interface';
import { Subscription } from 'rxjs';
import { ConvocationService } from 'src/app/core/services/convocation/convocation.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-detail-est-van',
  templateUrl: './detail-est-van.component.html',
  styleUrls: ['./detail-est-van.component.scss']
})
export class DetailEstVanComponent implements OnInit,OnDestroy {
  @Input() idConvocation!:number
  private unsubscribe: Subscription[] = [];
  convocationDetailData:IConvocationCoevanResponseDetail
  constructor(
    private convocationService:ConvocationService
  ) {
    this.convocationDetailData = {} as IConvocationCoevanResponseDetail
  }

  ngOnInit(): void {
    const sub1 = this.convocationService.getConvocationCoevanDetail(this.idConvocation).subscribe(data=>{
      this.convocationDetailData = data.data
      console.log("convocation coevan detail: ", data.data)
      sub1.unsubscribe()
    })
    this.unsubscribe.push(sub1)
  }
  ngOnDestroy(): void {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }
  downloadDoc(){
    console.log("download")
  }

  openLink(){
    console.log("link")
  }
}
