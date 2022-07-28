import { Component, OnInit } from '@angular/core';
import {UserDataPostulationRoutingModule} from "../user-data-postulation.routes";
import {ActivatedRoute} from "@angular/router";
import {IPostulacion}from './../../../shared/interfaces/postulacion.interface';
import { PostulacionService } from './../../../core/services/postulacion/postulacion.service';
import {Step} from "../../../shared/interfaces/step.interface";

@Component({
  selector: 'app-user-data-postulation-body',
  templateUrl: './user-data-postulation-body.component.html',
  styleUrls: ['./user-data-postulation-body.component.scss']
})
export class UserDataPostulationBodyComponent implements OnInit {
      postulacion:IPostulacion;
      id:number;
      rutaApply = UserDataPostulationRoutingModule.ROUTES_VALUES.ROUTE_POSTULACION_VERIFY_DATA
      steps:Step[] = []

      constructor(
          private route:ActivatedRoute,
          private postulacionService:PostulacionService
      ) {
        this.steps = [
          {
            stepName:"Verificar Información",
            stepLink:"verificacion"
          },
          {
            stepName:"Llenar Ficha",
            stepLink:"llenar-ficha"
          },
          {
            stepName:"Cargar Archivos",
            stepLink:"cargar-archivos"
          }
        ]

        this.id = route.snapshot.params['id'],
        this.postulacion={} as IPostulacion;
        }


  ngOnInit(): void {
    this.postulacionService.getPostulacion(this.id).subscribe(resp =>{
      this.postulacion = resp.data[0]
      console.log("------postulacion detalle----------")
      //console.log(this.postulacion.postulacionTelefono)
    })
  }
      }
