import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatListOption } from '@angular/material/list';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { eventTypesGetAllRequestAction } from 'src/app/ngrx/actions/convocation/event-type.actions';
import { requirementsGetAllRequestAction } from 'src/app/ngrx/actions/convocation/requirement.actions';
import { IAppState } from 'src/app/ngrx/app.state';
import { eventTypesListableStateSelector } from 'src/app/ngrx/selectors/convocation/event-type.selector';
import { requirementsListableStateSelector } from 'src/app/ngrx/selectors/convocation/requirement.selector';
import { IRequestSaveConvocationDetailPIVE } from 'src/app/shared/interfaces/convocation/request-transactions.interface';
import { IListable } from 'src/app/shared/interfaces/listable.interface';
import { IRequirement } from 'src/app/shared/interfaces/requirements/requirement.interface';
import { ITypeEvent } from 'src/app/shared/interfaces/type-event/type-event.interface';
import { Requirement } from 'src/app/shared/models/requirement.model';
import { EventType } from 'src/app/shared/models/TypeEvent.model';

@Component({
  selector: 'app-new-convocation-detail',
  templateUrl: './new-convocation-detail.component.html',
  styleUrls: ['./new-convocation-detail.component.scss']
})
export class NewConvocationDetailComponent implements OnInit {


  reqNewConvocation: IRequestSaveConvocationDetailPIVE

  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });
  eventTypes: ITypeEvent[] = [
    {
      id:1,
      name:"Simposium"
    },
    {
      id:2,
      name:"Conferencia"
    },
    {
      id:3,
      name:"Seminario"
    },
    {
      id:4,
      name:"Congreso"
    }
  ];

  requirements: IRequirement[] = [
    {
      id:1,
      description:"No Haber participado en una movilidad PIVE"
    },
    {
      id:2,
      description:"Pertenecer al tercio superior"
    },
    {
      id:3,
      description:"Tener nivel de inglés avanzado"
    },
    {
      id:4,
      description:"Haber participado en alguna exposición"
    }
  ];
  eventTypesList$:Observable<IListable[]>
  requirementsList$:Observable<IListable[]>
  constructor(
    private _formBuilder: FormBuilder,
    private store:Store<IAppState>
    ) {
    this.reqNewConvocation={
      idConvocation:1,
      requirements:[],
      eventTypes:[]
    }
    this.requirementsList$=new Observable<IListable[]>()
    this.eventTypesList$=new Observable<IListable[]>()
  }

  ngOnInit(): void {
    this.store.dispatch(requirementsGetAllRequestAction())
    this.store.dispatch(eventTypesGetAllRequestAction())
    this.requirementsList$ = this.store.select(requirementsListableStateSelector)
    this.eventTypesList$ = this.store.select(eventTypesListableStateSelector)
  }
  setUpRequirements(requirements:number[]){
    this.reqNewConvocation.requirements=requirements
  }
  setUpEventTypes(eventTypes:number[]){
    this.reqNewConvocation.eventTypes=eventTypes
  }
  submitConvocationDetail(){
    console.log(this.reqNewConvocation)
  }
}
