import { Step } from './../../../shared/interfaces/step.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-body',
  templateUrl: './user-body.component.html',
  styleUrls: ['./user-body.component.scss']
})
export class UserBodyComponent implements OnInit {
  steps:Step[] = []
  constructor() {
    this.steps = [
      {
        stepName:"Información General",
        stepLink:"informacion-general-usuario"
      },
      {
        stepName:"Información Académica",
        stepLink:"informacion-academica-usuario"
      },
      {
        stepName:"Finalización",
        stepLink:"informacion-registrada-usuario"
      }
    ]
  }

  ngOnInit(): void {

  }

}
