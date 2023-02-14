import { SCRData } from './../../../shared/interfaces/coevan/winner.interface';
import { jsPDF } from 'jspdf';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenDocumentHelper } from './gen-doc.helper';

@Injectable({
  providedIn:"root"
})
export class GenDocumentService extends GenDocumentHelper{
  constructor(protected override http:HttpClient){
    super(http)
  }

  sangria_left:number = 30
  sangria_top:number = 6
  headerHeight:number = 20

  docWidth=210
  docHeight = 297

  leftCellPadding = 3
  pixelToMilimetresRatio = 0.26458333
  fontSizeForm = 10
  fontSizeTitle = 12
  space_between_components = 8
  lineHeightFactor = 1.5

  //238, 44, 44   color red
  //20, 179, 169  color jade green

  generateScholarshipRequest(scrData:SCRData){
    let doc = new jsPDF('p', 'mm', 'a4')

    let currentY=this.sangria_top
    let currentX=this.sangria_left
    currentY = currentY + this.headerHeight + this.space_between_components


    doc.setFillColor(219, 19, 19);





    doc.setLineHeightFactor(this.lineHeightFactor)

    //Title

    let D_TITLE = "\"Año del Fortalecimiento de la Soberanía Nacional\""


    this.setFontStyle(doc,this.fontSizeForm,"Helvetica", "italic",238, 44, 44)
    currentY = currentY + this.drawText(doc,D_TITLE,this.docWidth/2,currentY,this.docWidth - 2*this.sangria_left,this.fontSizeForm,this.lineHeightFactor,"center")

    currentY = currentY +this.space_between_components

    // doc.setDrawColor(40, 40, 40);
    // doc.rect(currentX,currentY-this.space_between_components,this.docWidth-2*this.sangria_left,this.space_between_components)

    // Topic
    let D_SUBJECT = "Solicito: Constancia de Becario <UNIVERSITY_ACADEMIC_SEMESTER>"

    D_SUBJECT = GenDocumentHelper.replaceTagsSubject(D_SUBJECT,scrData)

    this.setFontStyle(doc,this.fontSizeForm,"Helvetica", "normal",27, 27, 27)
    currentY = currentY + this.drawText(doc,D_SUBJECT,this.docWidth - this.sangria_left,currentY,this.docWidth - 2*this.sangria_left,this.fontSizeForm,this.lineHeightFactor,"right")

    currentY = currentY +this.space_between_components


    //TARGET LABEL
    let D_TARGET_LABEL = "SEÑORES"

    this.setFontStyle(doc,this.fontSizeForm,"Helvetica", "normal",27, 27, 27)

    currentY = currentY + this.drawText(doc,D_TARGET_LABEL,this.sangria_left,currentY,this.docWidth - 2*this.sangria_left,this.fontSizeForm,this.lineHeightFactor,"left")

    currentY = currentY +this.space_between_components


    //TARGET VALUE
    let D_TARGET_VALUE = "OFICINA UNIVERSITARIA DE COOPERACIÓN CONVENIOS, RELACIONES INTERNACIONALES, BECAS Y PASANTÍAS."

    this.setFontStyle(doc,this.fontSizeForm,"Helvetica", "normal",27, 27, 27)

    currentY = currentY + this.drawText(doc,D_TARGET_VALUE,this.sangria_left,currentY,this.docWidth - 2*this.sangria_left,this.fontSizeForm,this.lineHeightFactor,"left")

    currentY = currentY +this.space_between_components


    //PRESENTATION VALUE
    let D_PRESENTATION_VALUE= "Yo, <STUDENT_NAME> <STUDENT_LASTNAME>, identificado con DNI <STUDENT_DNI> domiciliado en <STUDENT_ADDRESS>, estudiante del <PROFESSIONAL_PROGRAM> de la <UNIVERSITY_ORIGIN_ACRONYM> con cui <STUDENT_CUI>, año <STUDENT_ACADEMIC_YEAR>, semestre <STUDENT_ACADEMIC_SEMESTER>, con el debido respeto expongo lo siguiente:"

    this.setFontStyle(doc,this.fontSizeForm,"Helvetica", "normal",27, 27, 27)

    D_PRESENTATION_VALUE = GenDocumentHelper.replaceTagsPresentation(D_PRESENTATION_VALUE,scrData)

    currentY = currentY + this.drawText(doc,D_PRESENTATION_VALUE,(this.docWidth/2),currentY,(this.docWidth - 2*this.sangria_left)/2,this.fontSizeForm,this.lineHeightFactor,"justify")

    currentY = currentY +this.space_between_components


    //BODY VALUE

    let D_BODY_VALUE= "Mediante el presente documento solicito la constancia de becario que me acredita como ganador de una beca académica para desarrollar cursos <MODALITY>es en la carrera <UNIVERSITY_TARGET_CAREER> de la <UNIVERSITY_TARGET_LONG_NAME>, a través del Programa de Intercambio Educativo <MODALITY> <ACADEMIC_NETWORK_ACRONYM>, durante el semestre académico <UNIVERSITY_ACADEMIC_SEMESTER>, ello para diferentes trámites a realizar para posterior regularización académica dentro de la universidad."
    this.setFontStyle(doc,this.fontSizeForm,"Helvetica", "normal",27, 27, 27)

    D_BODY_VALUE = GenDocumentHelper.replaceTagsBody(D_BODY_VALUE,scrData)

    currentY = currentY + this.drawText(doc,D_BODY_VALUE,this.sangria_left,currentY,(this.docWidth - 2*this.sangria_left),this.fontSizeForm,this.lineHeightFactor,"justify")

    currentY = currentY +this.space_between_components


    //ENDING
    let D_ENDING_VALUE= "Agradeciendo anticipadamente la expedición de dicha constancia."
    this.setFontStyle(doc,this.fontSizeForm,"Helvetica", "normal",27, 27, 27)

    currentY = currentY + this.drawText(doc,D_ENDING_VALUE,this.sangria_left,currentY,(this.docWidth - 2*this.sangria_left),this.fontSizeForm,this.lineHeightFactor,"left")

    currentY = currentY +this.space_between_components

    //DATE
    let D_DATE_VALUE= "Arequipa ___ de ________ del ____"
    this.setFontStyle(doc,this.fontSizeForm,"Helvetica", "normal",27, 27, 27)

    currentY = currentY + this.drawText(doc,D_DATE_VALUE,this.docWidth - this.sangria_left,currentY,(this.docWidth - 2*this.sangria_left),this.fontSizeForm,this.lineHeightFactor,"right")

    currentY = currentY + 3*this.space_between_components


    //LINE

    let D_LINE= "___________________"

    this.setFontStyle(doc,this.fontSizeForm,"Helvetica", "normal",27, 27, 27)

    currentY = currentY + this.drawText(doc,D_LINE,this.docWidth/2,currentY,(this.docWidth - 2*this.sangria_left)/4,this.fontSizeForm,this.lineHeightFactor,"center")

    currentY = currentY


    //SIGN
    let D_SIGN_LABEL= "Nombres completos, Celular, Correo Electrónico"

    this.setFontStyle(doc,this.fontSizeForm,"Helvetica", "normal",27, 27, 27)

    currentY = currentY + this.drawText(doc,D_SIGN_LABEL,this.docWidth/2,currentY,(this.docWidth - 2*this.sangria_left)/4,this.fontSizeForm,this.lineHeightFactor,"center")

    currentY = currentY + 2*this.space_between_components

    //headers and footers
    this.setHeaderAndFooter(doc)

    doc.save("doc.pdf")
  }

  async setHeaderAndFooter(doc:jsPDF){

  }

  /**
   *
   * @param doc document reference
   * @param text text to write
   * @param x current position x
   * @param y current position y
   * @param width max width of the text
   * @param fontSize font size
   * @param lineHeightFactor line height of the text
   * @param align align
   */

  drawText(doc:jsPDF,text:string,x:number,y:number,width:number,fontSize:number,lineHeightFactor:number,align:"left"|"center"|"right"|"justify"){

    console.log("testK:", x)
    //adds an skip for 1 line Height according de fontsize and line Height factor
    let currentHeight:number = this.skip1TextLineHeightSpace(fontSize,lineHeightFactor)
    //splits the text
    let splittext:string[] = doc.splitTextToSize(text, width);
    //draw the text
    doc.text(splittext, x, y + currentHeight,{align,maxWidth:width})

    //eval the current Height Used
    currentHeight = (splittext.length*(fontSize*lineHeightFactor)*this.pixelToMilimetresRatio)
    // return the current Height used
    return currentHeight + ((splittext.length>1)?((splittext.length-1)*((fontSize/2)*this.pixelToMilimetresRatio)):0)
  }
/**
 *
 * @param fontSize fontsize in pixels
 * @param lineHeightFactor line height setted up for jsPDF
 * @returns
 */
  skip1TextLineHeightSpace(fontSize:number,lineHeightFactor:number){
    return fontSize*lineHeightFactor*this.pixelToMilimetresRatio
  }


  setFontStyle(doc:jsPDF,fontSize:number,font:string,style:string,r:number,g:number,b:number,){
    doc.setFontSize(fontSize)
    doc.setFont(font, style)
    doc.setTextColor(r, g, b);
  }

}
