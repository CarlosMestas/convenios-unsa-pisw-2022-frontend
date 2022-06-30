import { IConvocatoria } from './../../../shared/interfaces/convocatoria.interface';
import { ConvocatoriaService } from './../../../core/services/convocatoria/convocatoria.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConvocatoriaRoutingModule } from '../convocatoria.routes';

@Component({
  selector: 'app-convocatoria-body',
  templateUrl: './convocatoria-body.component.html',
  styleUrls: ['./convocatoria-body.component.scss']
})
export class ConvocatoriaBodyComponent implements OnInit {
  convocatoria:IConvocatoria;
  id:number;
  rutaApply = ConvocatoriaRoutingModule.ROUTES_VALUES.ROUTE_CONVOCATORIA_APPLY
  constructor(
    private route:ActivatedRoute,
    private convocatoriaService:ConvocatoriaService
  ) {
    this.id = route.snapshot.params['id'];
    this.convocatoria={} as IConvocatoria;

  }

  ngOnInit(): void {
    this.convocatoriaService.getConvocatoria(this.id).subscribe(resp =>{
      this.convocatoria = resp.data[0]
      console.log("convocatoria detaleeeee----------")
      console.log(this.convocatoria.ConvocatoriaDetail)
    })
  }

}
