import { convocationFetchRequestAction } from '../../../ngrx/actions/convocation/convocation.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IConvocation } from '../../../shared/interfaces/convocation.interface';
import { ConvocationService } from '../../../core/services/convocation/convocation.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConvocatoriaRoutingModule } from '../convocatoria.routes';
import { IAppState } from 'src/app/ngrx/app.state';
import { convocationConvocationStateSelector } from 'src/app/ngrx/selectors/convocation/convocation.selector';

@Component({
  selector: 'app-convocatoria-body',
  templateUrl: './convocatoria-body.component.html',
  styleUrls: ['./convocatoria-body.component.scss']
})
export class ConvocatoriaBodyComponent implements OnInit {
  id:number;
  rutaApply = ConvocatoriaRoutingModule.ROUTES_VALUES.ROUTE_CONVOCATORIA_APPLY
  constructor(
    private route:ActivatedRoute,
    private store:Store<IAppState>
  ) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.store.dispatch(convocationFetchRequestAction({id:this.id}))
    // this.convocatoriaService.getConvocatoria(this.id).subscribe(resp =>{
    //   this.convocatoria = resp.data[0]
    //   console.log("convocatoria detaleeeee----------")
    // })
  }

}
