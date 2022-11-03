
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { GenDocumentCoevanHelper } from './gen-doc-coevan.helper';

import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Injectable({
  providedIn:'root'
})
export class GenDocumentCoevanService extends GenDocumentCoevanHelper{


  constructor(protected override http:HttpClient){
    super(http)
  }

  generateDocumentPostulation(postulation: number){

    // Tamaño Hoja A4 => Alto => 297 Ancho => 210 mm
    // Ancho tabla 269
    let parte_2 = 4
    let doc = new jsPDF('p', 'mm', 'a4')

    let docWidth=210
    let docHeight = 297

    let sangria_left = 14
    let sangria_top = 4
    let space_between_components = 8
    let current_height=sangria_top
    /*-------------------------LOGOS----------------------------- */
    let logos_width = 32
    let logos_height = 18
    doc.addImage('../../../../assets/images/pdf/LOGO_UNSA.png', "JPEG", sangria_left, sangria_top, logos_width, logos_height)
    current_height = current_height + logos_height + space_between_components
    /*-------------------------TITLE----------------------------- */
    let program_name = "Red peruana de universidades nacionales para la internacionalización"
    let network_acronym = "RUNAI"
    let type = "Formulario de postulación"
    let modality = "presencial"
    let correlative = "2022-2(VAN)"

    let D_TITLE = "PROGRAMA DE INTERCAMBIO ESTUDIANTIL " + program_name.toUpperCase() + " - " + network_acronym.toUpperCase() +
    " FORMULARIO DE POSTULACIÓN " + modality + " " + correlative


    doc.setFontSize(12)
    doc.setFont("Helvetica", "bold")
    doc.setTextColor(20, 179, 169);

    let splitTitle = doc.splitTextToSize(D_TITLE, 180);

    console.log("title dimensions : ",splitTitle,12)
    doc.text(splitTitle, docWidth/2, current_height,{align:"center"})

    doc.setFont('Helvetica', 'normal');

    doc.setFontSize(10)
    doc.setFont("Helvetica", "normal")
    doc.setDrawColor(168, 178, 189);
    doc.line(14, parte_2 + 40, 194, parte_2 + 40);
    doc.save("receta.pdf")
  }
}

