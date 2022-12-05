import { convocationFetchRequestAction } from '../../../ngrx/actions/convocation/convocation.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConvocatoriaRoutingModule } from '../convocatoria.routes';
import { IAppState } from 'src/app/ngrx/app.state';

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

  }

}
