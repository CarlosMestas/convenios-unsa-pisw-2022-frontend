import { PostulationRoutingModule } from './../postulation.routes';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConvocationService } from 'src/app/core/services/convocation/convocation.service';
import { Subscription } from 'rxjs';
import { ENUMConvocationTypeAcronym } from 'src/app/shared/enum/convocation.enum';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit, OnDestroy {
  id: number;
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016-12-11/anguar-2-unsubscribe-observables/
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private convocationService:ConvocationService
    ) {
    this.id = activatedRoute.parent?.snapshot.params['id'];
  }
  ngOnInit(): void {
    const convocationSub = this.convocationService.getConvocation(this.id).subscribe(data=>{
      switch(data.data.type.acronym){

        case ENUMConvocationTypeAcronym.COEVAN:{
          this.router.navigate(["./"+PostulationRoutingModule.ROUTES_VALUES.ROUTE_POSTULACION_COEVAN],{relativeTo:this.activatedRoute})
          console.log("route COEVAN")
          break
        }
        case ENUMConvocationTypeAcronym.COEVIENEN:{
          break
        }
        case ENUMConvocationTypeAcronym.CODVAN:{
          break
        }
        case ENUMConvocationTypeAcronym.CODVIENEN:{
          break
        }
        case ENUMConvocationTypeAcronym.PIVE:{
          break
        }
        case ENUMConvocationTypeAcronym.PIVDO:{
          break
        }
        default :{
          break
        }
      }
    })
    this.unsubscribe.push(convocationSub);
  }

  /**
	 * On Destroy
	 */
	ngOnDestroy() {
		this.unsubscribe.forEach(sb => sb.unsubscribe());
	}
}
