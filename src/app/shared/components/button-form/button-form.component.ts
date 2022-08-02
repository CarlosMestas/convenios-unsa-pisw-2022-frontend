import { Component, Input, OnInit, OnChanges, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-button-form',
  templateUrl: './button-form.component.html',
  styleUrls: ['./button-form.component.scss']
})
export class ButtonFormComponent implements OnInit {
  @Input() text:string;
  @Input() color:string;
  @Input() background:string;
  @Input() bordercolor:string;
  style={}
  constructor() {
    this.text = ''
    this.color = '#FFFFFF'
    this.background = '#440114de'
    this.bordercolor = '#440114de'

    this.style = {
      'color':this.color,
      'background-color':this.background,
      'border':`solid 1px ${this.bordercolor}`
    }
  }
  ngOnInit(): void {
    this.style = {
      'color':this.color,
      'background-color':this.background,
      'border':`solid 1px ${this.bordercolor}`
    }
  }

}
