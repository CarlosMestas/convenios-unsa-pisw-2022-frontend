import { Component, OnInit } from '@angular/core';
import {PrimeIcons} from 'primeng/api';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  events1: any[] = [
    {status: 'Inicio Convocatoria', date: '15/10/2022 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0'},
    {status: 'Entrega de Documentos', date: '15/10/2022 14:00', icon: PrimeIcons.COG, color: '#673AB7'},
    {status: 'Fin de la convocatoria', date: '15/10/2022 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},
    {status: 'Publicación de ganadores', date: '16/10/2022 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
  ];

  events2: any[]  = [
    "2020", "2021", "2022", "2023"
  ];
  constructor() {

   }
    ngOnInit() {

    }

}
