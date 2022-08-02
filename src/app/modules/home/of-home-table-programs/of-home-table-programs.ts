import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-of-table-programs',
  templateUrl: './of-home-table-programs.html',
  styleUrls: ['./of-home-table-programs.scss']
})
export class OfHomeTablePrograms implements OnInit {
  _typeConv: String = "";
  get typeConv(): String{
    return this._typeConv;
  }
  @Input() set typeConv(newFlag: String) {
    this._typeConv= newFlag;
  }
  prefix:string;
  constructor() {
    this.prefix = 'of-home-table-programs'
  }
  ngOnInit(): void {
  }
  convocTypeList: string[] = ['Ordinario', 'Extraordinario'];
  selectedType = this.convocTypeList[0]
  periodList: string[] = ['2022-I', '2021-II', '2021-I', '2020-II','2020-I'];
  selectedPeriod = this.periodList[0]
}
