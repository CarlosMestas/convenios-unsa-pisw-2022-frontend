import { convocationConvocationStateSelector } from './../../../../ngrx/selectors/convocation/convocation.selector';
import { convocationFetchRequestAction } from './../../../../ngrx/actions/convocation/convocation.actions';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/ngrx/app.state';
import { IConvocation } from 'src/app/shared/interfaces/convocation.interface';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import {PrimeIcons} from 'primeng/api';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class TimelineComponent implements OnInit {


  convocation$:Observable<IConvocation|null>

  events1: any[] = [
    {status: 'Inicio Convocatoria', date: '15/10/2022 10:30', icon: "pi pi-shopping-cart", color: '#9C27B0'},
    {status: 'Entrega de Documentos', date: '15/10/2022 14:00', icon: PrimeIcons.COG, color: '#673AB7'},
    {status: 'Fin de la convocatoria', date: '15/10/2022 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},
    {status: 'Publicación de ganadores', date: '16/10/2022 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
  ];

  requirements: any[] = [
    {title: 'Haber cursado por los menos 2 años de estudios universitarios', icon: PrimeIcons.CHECK_CIRCLE},
    {title: 'Tener Excelencia Académica', icon: PrimeIcons.CHECK_CIRCLE},
    {title: 'Pertenecer al tercio superior', icon: PrimeIcons.CHECK_CIRCLE},
    {title: 'Dominar un segundo idioma', icon: PrimeIcons.CHECK_CIRCLE}
  ];
  documents: any[] = [
    {title: 'Resolución', icon: PrimeIcons.DOWNLOAD},
    {title: 'Bases', icon: PrimeIcons.DOWNLOAD}
  ];


  events2: any[]  = [
    "2020", "2021", "2022", "2023"
  ];


  constructor(
    private store:Store<IAppState>
  ) {
    this.convocation$ = new Observable<IConvocation>();
   }
    ngOnInit() {
      this.convocation$ = this.store.select(convocationConvocationStateSelector)
    }

}
