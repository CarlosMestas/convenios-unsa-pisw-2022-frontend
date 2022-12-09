import { PostulationRoutingModule } from './../../postulation/postulation.routes';
import { convocationFetchRequestAction } from '../../../ngrx/actions/convocation/convocation.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAppState } from 'src/app/ngrx/app.state';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  id:number;
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
