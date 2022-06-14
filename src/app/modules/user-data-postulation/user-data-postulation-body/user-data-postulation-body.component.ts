import { Component, OnInit } from '@angular/core';
import {Step} from "../../../shared/interfaces/step.interface";

@Component({
  selector: 'app-user-data-postulation-body',
  templateUrl: './user-data-postulation-body.component.html',
  styleUrls: ['./user-data-postulation-body.component.scss']
})
export class UserDataPostulationBodyComponent implements OnInit {

  steps:Step[] = []
  constructor() {
    this.steps = [
      {
        stepName:"Verificación de Datos Personales",
        stepLink:"verificacion-informacion-usuario"
      },
      {
        stepName:"Llenar Ficha",
        stepLink:"llenar-ficha-usuario"
      },
      {
        stepName:"Cargar Archivos",
        stepLink:"cargar-archivo-usuario"
      }
    ]
  }
  ngOnInit(): void {
  }

}
