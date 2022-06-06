import { Component, OnInit } from '@angular/core';
import {faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tooltip-red-small',
  templateUrl: './tooltip-red-small.component.html',
  styleUrls: ['./tooltip-red-small.component.scss']
})
export class TooltipRedSmallComponent implements OnInit {
  faInfoCircle = faInfoCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
