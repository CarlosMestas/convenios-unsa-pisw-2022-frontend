import { Component, Input, OnInit } from '@angular/core';
import {ConvocatoriaRoutingModule} from "../../../convocation/convocatoria.routes";
import {ActivatedRoute, Router} from "@angular/router";
import {AppRoutingModule} from "../../app.routes";

export interface ConvElement  {
  id: number;
  name: string;
  correlative: string;
  position: number;
  bases: string;
  preliminary: string;
  news: string;
  final: string;

}
const CONV_DATA: ConvElement [] = [
  {position: 1, id:1, correlative: 'PIVE 2022-1', name: 'PROGRAMA DE INTERNACIONALIZACIÓN VIRTUAL PIVE 2022', bases: "BASES", preliminary: 'PRELIMINAR', news: "COMUNICADO 10-03-2022", final: "RESULTADO"},
  {position: 2, id:2, correlative: 'PIVE 2022-1', name: 'PROGRAMA DE INTERNACIONALIZACIÓN VIRTUAL PIVE 2022', bases: "BASES", preliminary: 'PRELIMINAR', news: "COMUNICADO 10-03-2022", final: "RESULTADO"},
  {position: 3, id:3, correlative: 'PIVE 2022-1', name: 'PROGRAMA DE INTERNACIONALIZACIÓN VIRTUAL PIVE 2022', bases: "BASES", preliminary: 'PRELIMINAR', news: "COMUNICADO 10-03-2022", final: "RESULTADO"},
];

@Component({
  selector: 'app-of-home-table',
  templateUrl: './of-home-table.component.html',
  styleUrls: ['./of-home-table.component.scss']
})
export class OfHomeTableComponent implements OnInit {
  _typeConv: String = "";
  get typeConv(): String{
    return this._typeConv;
  }
  @Input() set typeConv(newFlag: String) {
    this._typeConv= newFlag;
    this.checkDisplayColumns();
  }

  prefix:string;
  displayedColumns: string[] = ['demo-position', 'demo-correlative', 'demo-name'];
  dataSource = CONV_DATA;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    this.prefix = 'of-home-table'
  }
  ngOnInit(): void {
  }

  checkDisplayColumns():void {
    switch (this._typeConv) {
      case 'prox': {
        this.displayedColumns = ['demo-position', 'demo-correlative', 'demo-name', 'demo-date', 'demo-bases', 'demo-details']
        break;
      }
      case 'current': {
        this.displayedColumns = ['demo-position', 'demo-correlative', 'demo-name', 'demo-bases', 'demo-news', 'demo-details']
        break;
      }
      case 'finish': {
        this.displayedColumns = ['demo-position', 'demo-correlative', 'demo-name', 'demo-bases', 'demo-preliminary', 'demo-news', 'demo-final']
        break;
      }
      case 'cancel': {
        this.displayedColumns = ['demo-position', 'demo-correlative', 'demo-name', 'demo-bases', 'demo-news']
        break;
      }
    }
  }

  see_details(id: any):void{
    console.log("ENVIANDO ID", id)
    this.router.navigate(["../"+AppRoutingModule.ROUTES_VALUES.ROUTE_APP_CONVOCATORIA+"/"+id],{relativeTo: this.activatedRoute})
  }
}
