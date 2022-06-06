import { Component, OnInit } from '@angular/core';
import {faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tooltip-white-small',
  templateUrl: './tooltip-white-small.component.html',
  styleUrls: ['./tooltip-white-small.component.scss']
})
export class TooltipWhiteSmallComponent implements OnInit {
  faInfoCircle=faInfoCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
