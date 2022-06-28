import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  items: any [] = [];
  constructor(
    private router:Router,
    ) {
    this.items = [
      {
        img: "https://img.freepik.com/vector-gratis/gestion-tiempo-metodo-calendario-planificacion-citas-organizador-negocios-gente-dibujando-marca-personajes-dibujos-animados-horario-trabajo-trabajo-equipo-colegas_335657-2096.jpg?w=2000",
        title: "Cronograma de Eventos"
      },
      {
        img: "https://img.freepik.com/vector-gratis/banner-brillante-respuestas-preguntas-plano-dibujos-animados_81522-4229.jpg?w=2000",
        title: "Preguntas Frecuentes"
      },
      {
        img: "https://c8.alamy.com/compes/2j3ne8h/hombre-en-aventura-de-vacaciones-turismo-internacional-recorrido-turistico-mundial-programa-de-intercambio-de-estudiantes-turista-con-mochila-viajando-al-extranjero-vector-2j3ne8h.jpg",
        title: "Portal de Movilidad Estudiantil"
      }
    ]
  }

  ngOnInit(): void {
  }


}
