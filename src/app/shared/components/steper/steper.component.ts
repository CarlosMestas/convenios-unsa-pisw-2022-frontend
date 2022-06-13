import { Step } from './../../interfaces/step.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-steper',
  templateUrl: './steper.component.html',
  styleUrls: ['./steper.component.scss']
})
export class SteperComponent implements OnInit {
  @Input () steps: Step[] =[]
  constructor() { }
  ngOnInit(): void {
  }

}
