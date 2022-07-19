import { ITipoDocumento } from './../../../../shared/interfaces/tipo-documento.interface';
import { TipoDocumentoService } from './../../../../core/services/tipo-documento/tipo-documento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  typesDocument:ITipoDocumento[]|null = null
  constructor(
    private tipoDocumentoService:TipoDocumentoService
  ) { }

  ngOnInit(): void {
    this.tipoDocumentoService.fetchDocuments().subscribe( documents => {
      this.typesDocument = documents.data
    })
  }

}
