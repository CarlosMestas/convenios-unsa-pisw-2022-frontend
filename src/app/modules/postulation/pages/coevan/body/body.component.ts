
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  items: MenuItem[] = [];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Postulación',
        routerLink: 'postulacion',
      },
      {
        label: 'Inicialización',
        routerLink: 'seat',
      },
      {
        label: 'Seguimiento',
        routerLink: 'payment',
      },
      {
        label: 'Confirmation',
        routerLink: 'confirmation',
      },
    ];
  }
}
