import { ConvocationService } from 'src/app/core/services/convocation/convocation.service';
import { IConvocationResponse, IConvocationResponseDetail } from './../../../../../shared/interfaces/convocation.interface';
import { AuthHelper } from './../../../../../core/services/auth/auth.helper';
import { PostulationCoevanRoutingModule } from './../postulation-coevan.routes';
import { Subscription } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PostulationService } from 'src/app/core/services/postulacion/postulation.service';
import { ENUMPostulationCoevanStatus } from 'src/app/shared/enum/convocation.enum';

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, OnDestroy {
  id:number
  items: MenuItem[] = [];
  private unsubscribe: Subscription[] = [];
  convocation:IConvocationResponseDetail
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postulationService:PostulationService,
    private convocationService:ConvocationService
  ) {
    this.id = activatedRoute.parent?.parent?.snapshot.params['id'];
    this.convocation = {} as IConvocationResponseDetail
    this.items = [
      {
        label: 'Postulación',
        routerLink: PostulationCoevanRoutingModule.ROUTES_VALUES.ROUTE_POSTULATION_COEVAN,
      },
      {
        label: 'Inicialización',
        routerLink: PostulationCoevanRoutingModule.ROUTES_VALUES.ROUTE_INITIALIZATION_COEVAN,
      },
      {
        label: 'Seguimiento',
        routerLink: 'payment',
      },
      {
        label: 'Confirmation',
        routerLink: 'confirmation',
      },
    ];
  }

  ngOnInit(): void {


    const subs1 = this.convocationService.getConvocation(this.id).subscribe(data=>{
      this.convocation = data.data
      subs1.unsubscribe()
    })

    const userId:number|undefined = AuthHelper.getLocalStorageSesionUser()?.id
    console.log("userid", userId, "convocation id:",this.id)
    if(userId!=null && userId!=undefined && this.id!=null && this.id!=undefined){
      const convocationSub = this.postulationService.getPostulationByConvocationUser(this.id,userId).subscribe(data=>{
        console.log("is there any error?", data)
        if(!data.error){
          data.data.post_state.id = 6
          switch(data.data.post_state.id){
            case ENUMPostulationCoevanStatus.SIN_ENVIAR:{
              this.router.navigate(["./"+PostulationCoevanRoutingModule.ROUTES_VALUES.ROUTE_POSTULATION_COEVAN + "/" + data.data.id],{relativeTo:this.activatedRoute})
              break
            }
            case ENUMPostulationCoevanStatus.ACEPTADO:{
              this.router.navigate(["./"+PostulationCoevanRoutingModule.ROUTES_VALUES.ROUTE_POSTULATION_COEVAN + "/" + data.data.id],{relativeTo:this.activatedRoute})
              break
            }
            case ENUMPostulationCoevanStatus.OBSERVADO:{
              this.router.navigate(["./"+PostulationCoevanRoutingModule.ROUTES_VALUES.ROUTE_POSTULATION_COEVAN + "/" + data.data.id],{relativeTo:this.activatedRoute})
              break
            }
            case ENUMPostulationCoevanStatus.GANADO:{
              this.router.navigate(["./"+PostulationCoevanRoutingModule.ROUTES_VALUES.ROUTE_INITIALIZATION_COEVAN + "/" + data.data.id],{relativeTo:this.activatedRoute})
              break
            }
            default :{
              break
            }
          }
        }else{
          console.log("Error no postulation")
          this.router.navigate(["./"+PostulationCoevanRoutingModule.ROUTES_VALUES.ROUTE_POSTULATION_COEVAN],{relativeTo:this.activatedRoute})
        }
        convocationSub.unsubscribe()
      })
      this.unsubscribe.push(convocationSub);
    }else{

      this.router.navigate([""])
      return
    }

    this.unsubscribe.push(subs1)

  }
/**
	 * On Destroy
	 */
	ngOnDestroy():void {
		this.unsubscribe.forEach(sb => sb.unsubscribe());
	}
}
