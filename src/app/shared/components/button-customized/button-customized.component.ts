import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-customized',
  templateUrl: './button-customized.component.html',
  styleUrls: ['./button-customized.component.scss']
})
export class ButtonCustomizedComponent implements OnInit {

  @Input() colorProp?: String;
  @Input() textBtn?: String;
  @Input() size?: String; //small; normal; big

  constructor() {
    this.size = 'normal'
  }

  ngOnInit(): void {
  }

}
