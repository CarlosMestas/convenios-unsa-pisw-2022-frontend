import { AppRoutingModule } from './../../../app/app.routes';
import { IDocument } from '../../../../shared/interfaces/documents-convocation/document.interface';
import { IEventType } from '../../../../shared/interfaces/convocation/event-type.interface';
import { IRequirement } from '../../../../shared/interfaces/requirements/requirement.interface';
import {
  convocationConvocationStateSelector,
  convocationRequirementsStateSelector,
  convocationTypeStateSelector,
} from '../../../../ngrx/selectors/convocation/convocation.selector';
import { convocationFetchRequestAction } from '../../../../ngrx/actions/convocation/convocation.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/ngrx/app.state';
import { IConvocation } from 'src/app/shared/interfaces/convocation.interface';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { ENUMConvocationType } from 'src/app/shared/enum/convocation-type.enum';
import { ConvocatoriaRoutingModule } from '../../convocatoria.routes';
import { convocationDocumentBannerStateSelector } from 'src/app/ngrx/selectors/convocation/document.selector';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  id: number;
  convocation$: Observable<IConvocation | null>;
  requirements$: Observable<IRequirement[]>;
  banner$: Observable<string>;
  events$: Observable<IEventType[]>;

  events1: any[] = [
    {
      status: 'Inicio Convocatoria',
      date: '15/10/2022 10:30',
      icon: 'pi pi-shopping-cart',
      color: '#9C27B0',
    },
    {
      status: 'Entrega de Documentos',
      date: '15/10/2022 14:00',
      icon: PrimeIcons.COG,
      color: '#673AB7',
    },
    {
      status: 'Fin de la convocatoria',
      date: '15/10/2022 16:15',
      icon: PrimeIcons.ENVELOPE,
      color: '#FF9800',
    },
    {
      status: 'Publicación de ganadores',
      date: '16/10/2022 10:00',
      icon: PrimeIcons.CHECK,
      color: '#607D8B',
    },
  ];

  events2: any[] = ['2020', '2021', '2022', '2023'];

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.convocation$ = new Observable<IConvocation>();
    this.requirements$ = new Observable<IRequirement[]>();
    this.events$ = new Observable<IEventType[]>();
    this.banner$ = new Observable<string>();

    this.id = activatedRoute.parent?.snapshot.params['id'];
  }
  ngOnInit() {
    this.convocation$ = this.store.select(convocationConvocationStateSelector);
    this.requirements$ = this.store.select(
      convocationRequirementsStateSelector
    );
    this.banner$ = this.store.select(convocationDocumentBannerStateSelector);
  }

  apply() {
    this.router.navigate(
      ['../../../' + AppRoutingModule.ROUTES_VALUES.ROUTE_APP_APPLY + '/' + this.id],
      { relativeTo: this.activatedRoute }
    );
  }
}
