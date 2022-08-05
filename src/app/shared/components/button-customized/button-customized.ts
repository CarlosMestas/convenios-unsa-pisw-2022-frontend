import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-customized',
  templateUrl: './button-customized.html',
  styleUrls: ['./button-customized.scss']
})
export class ButtonCustomized implements OnInit {
  @Input() colorProp?: String;
  @Input() textBtn?: String;
  @Input() size?: String; //small; normal; big

  constructor() {
    this.size = 'normal'
  }

  ngOnInit(): void {
  }

}
