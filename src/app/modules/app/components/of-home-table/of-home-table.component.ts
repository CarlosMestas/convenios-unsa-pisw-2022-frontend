import { ModalityConvocationService } from './../../../../core/services/convocation/modality-convocation.service';
import { TypeConvocationService } from './../../../../core/services/convocation/type-convocation.service';
import { IConvocationField, IModalityConvocationResponse, ITypeConvocationResponse } from './../../../../shared/interfaces/convocation.interface';
import { IConvocation, IConvocationResponse } from 'src/app/shared/interfaces/convocation.interface';
import { map, Observable } from 'rxjs';
import { ConvocationService } from './../../../../core/services/convocation/convocation.service';
import { Component, Input, OnInit } from '@angular/core';
import { ConvocatoriaRoutingModule } from '../../../convocation/convocatoria.routes';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from '../../app.routes';

export interface ConvElement {
  id: number;
  name: string;
  correlative: string;
  position: number;
  bases: string;
  preliminary: string;
  news: string;
  final: string;
}
const CONV_DATA: ConvElement[] = [
  {
    position: 1,
    id: 1,
    correlative: 'PIVE 2022-1',
    name: 'PROGRAMA DE INTERNACIONALIZACIÓN VIRTUAL PIVE 2022',
    bases: 'BASES',
    preliminary: 'PRELIMINAR',
    news: 'COMUNICADO 10-03-2022',
    final: 'RESULTADO',
  },
  {
    position: 2,
    id: 2,
    correlative: 'PIVE 2022-1',
    name: 'PROGRAMA DE INTERNACIONALIZACIÓN VIRTUAL PIVE 2022',
    bases: 'BASES',
    preliminary: 'PRELIMINAR',
    news: 'COMUNICADO 10-03-2022',
    final: 'RESULTADO',
  },
  {
    position: 3,
    id: 3,
    correlative: 'PIVE 2022-1',
    name: 'PROGRAMA DE INTERNACIONALIZACIÓN VIRTUAL PIVE 2022',
    bases: 'BASES',
    preliminary: 'PRELIMINAR',
    news: 'COMUNICADO 10-03-2022',
    final: 'RESULTADO',
  },
];

@Component({
  selector: 'app-of-home-table',
  templateUrl: './of-home-table.component.html',
  styleUrls: ['./of-home-table.component.scss'],
})
export class OfHomeTableComponent implements OnInit {
  _typeConv: String = '';
  get typeConv(): String {
    return this._typeConv;
  }
  @Input() set typeConv(newFlag: String) {
    this._typeConv = newFlag;
    this.checkDisplayColumns();
  }

  convocations$:Observable<IConvocationResponse[]>
  typesConvocation$: Observable<ITypeConvocationResponse[]>;
  modalities$: Observable<IModalityConvocationResponse[]>;
  loading: boolean = false;
  prefix: string;
  displayedColumns: IConvocationField[] = [];
  dataSource = CONV_DATA;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private convocationService:ConvocationService,
    private typeConvocationService: TypeConvocationService,
    private modalityConvocationService:ModalityConvocationService,
    ) {
    this.prefix = 'of-home-table';
    this.convocations$ = new Observable<IConvocationResponse[]>()
    this.typesConvocation$ = new Observable<ITypeConvocationResponse[]>();

    this.modalities$ = new Observable<IModalityConvocationResponse[]>();
  }
  ngOnInit(): void {

    this.typesConvocation$ = this.typeConvocationService
      .getAllTypeConvocations()
      .pipe(map((data) => data.data));

    this.modalities$ = this.modalityConvocationService
      .getAllModalityConvocations()
      .pipe(map((data) => data.data));

  }

  checkDisplayColumns(): void {
    this.convocations$ = new Observable<IConvocationResponse[]>()
    switch (this._typeConv) {
      case 'prox': {
        this.displayedColumns = []

        break;
      }
      case 'current': {
        this.loading = true
        this.displayedColumns = [
          {key:'title', label:'Título'},
          {key:'type', label:'Tipo'},
          {key:'correlative', label:'Correlativo'},
          {key:'modality', label:'Modalidad'},
          {key:'start_date', label:'Fecha Inicio'},
          {key:'end_date', label:'Fecha Finalización'}
        ];
        this.convocations$ = this.convocationService.getAllConvocationsByDate(Date.now()).pipe(map(data=>{
          this.loading = false;
          return data.data
        }))
        break;
      }
      case 'finish': {
        this.displayedColumns = [];
        break;
      }
      case 'cancel': {
        this.displayedColumns = [];
        break;
      }
    }
  }

  viewConvocation(id: any): void {
    this.router.navigate(
      [
        '../' +
          AppRoutingModule.ROUTES_VALUES.ROUTE_APP_CONVOCATORIA +
          '/' +
          id,
      ],
      { relativeTo: this.activatedRoute }
    );
  }
  returnValue(type: EventTarget | null): string {
    return (type as HTMLInputElement).value;
  }
}
