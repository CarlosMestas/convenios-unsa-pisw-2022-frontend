import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {faQuestion} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent implements OnInit {
  @Input() url:string|null
  @Input() icon:IconDefinition
  @Input() label:string
  @Input() collapsed: boolean
  constructor() {
    this.url=null
    this.icon = faQuestion //default icon
    this.label = ''
    this.collapsed = true
  }

  ngOnInit(): void {
  }

}
