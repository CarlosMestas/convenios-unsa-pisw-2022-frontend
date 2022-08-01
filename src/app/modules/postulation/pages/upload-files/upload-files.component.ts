import { Component, OnInit } from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickView() {
    alert('Cargar constancia de Ranking')
  }
}
