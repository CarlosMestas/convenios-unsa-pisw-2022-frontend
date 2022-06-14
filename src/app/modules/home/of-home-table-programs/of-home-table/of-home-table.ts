import { Component, OnInit } from '@angular/core';

export interface ConvElement {
  name: string;
  correlative: string;
  position: number;
  bases: string;
  preliminary: string;
  news: string;
  final: string;
}
const CONV_DATA: ConvElement[] = [
  {position: 1, correlative: 'PIVE 2022-1', name: 'PROGRAMA DE INTERNACIONALIZACIÓN VIRTUAL PIVE 2022', bases: "BASES", preliminary: 'PRELIMINAR', news: "COMUNICADO 10-03-2022", final: "RESULTADO"},
  {position: 2, correlative: 'PIVE 2022-1', name: 'PROGRAMA DE INTERNACIONALIZACIÓN VIRTUAL PIVE 2022', bases: "BASES", preliminary: 'PRELIMINAR', news: "COMUNICADO 10-03-2022", final: "RESULTADO"},
  {position: 3, correlative: 'PIVE 2022-1', name: 'PROGRAMA DE INTERNACIONALIZACIÓN VIRTUAL PIVE 2022', bases: "BASES", preliminary: 'PRELIMINAR', news: "COMUNICADO 10-03-2022", final: "RESULTADO"},
];

@Component({
  selector: 'app-of-table',
  templateUrl: './of-home-table.html',
  styleUrls: ['./of-home-table.scss']
})
export class OfHomeTable implements OnInit {
  prefix:string;
  displayedColumns: string[] = ['demo-position', 'demo-correlative', 'demo-name', 'demo-bases', 'demo-preliminary', 'demo-news', 'demo-final'];
  dataSource = CONV_DATA;
  constructor() {
    this.prefix = 'of-home-table'
  }
  ngOnInit(): void {
  }

}
