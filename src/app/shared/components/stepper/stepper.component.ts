import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StepperComponent implements OnInit {
  @Input() items: MenuItem[] = [];
  constructor() {}

  ngOnInit(): void {

  }
}
