import { IPostulationCoevanCourse } from './../../../shared/interfaces/postulacion.interface';

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { GenDocumentCoevanHelper } from './gen-doc-coevan.helper';

import jsPDF from 'jspdf'
import autoTable, { RowInput } from 'jspdf-autotable'

interface IFormRowItem{
  label:string,
  value:string
}



@Injectable({
  providedIn:'root'
})
export class GenDocumentCoevanService extends GenDocumentCoevanHelper{

  sangria_left:number = 22
  sangria_top:number = 6
  headerSize:number = 20

  docWidth=210
  docHeight = 297

  leftCellPadding = 3
  pixelToMilimetresRatio = 0.26458333
  fontSizeForm = 10
  fontSizeTitle = 12

  space_between_components = 8
  constructor(protected override http:HttpClient){
    super(http)
  }

  generateDocumentPostulation(postulationCourses: IPostulationCoevanCourse[]){

    // Tamaño Hoja A4 => Alto => 297 Ancho => 210 mm
    // Ancho tabla 269

    let doc = new jsPDF('p', 'mm', 'a4')

    let currentY=this.sangria_top
    let currentX=this.sangria_left
    currentY = currentY + this.headerSize + this.space_between_components
    /*-------------------------TITLE----------------------------- */
    let program_name = "Red peruana de universidades nacionales para la internacionalización"
    let network_acronym = "RUNAI"
    let type = "Formulario de postulación"
    let modality = "presencial"
    let correlative = "2022-2(VAN)"

    let D_TITLE = "PROGRAMA DE INTERCAMBIO ESTUDIANTIL " + program_name.toUpperCase() + " - " + network_acronym.toUpperCase() +
    " FORMULARIO DE POSTULACIÓN " + modality + " " + correlative


    doc.setFontSize(this.fontSizeTitle)
    doc.setFont("Helvetica", "bold")
    doc.setTextColor(20, 179, 169);

    let splitTitle = doc.splitTextToSize(D_TITLE, this.docWidth - 2*this.sangria_left);

    doc.text(splitTitle, this.docWidth/2, currentY,{align:"center"})

    currentY = currentY + (splitTitle.length*12*0.264583) +this.space_between_components

    //--------------------------------------------------------------------
    // -------------------- Información personal -------------------------
    //--------------------------------------------------------------------

    const cellHeight = 9
    const cellWidth = this.docWidth - this.sangria_left*2
    const imageCellWidth = cellWidth*0.2
    const imageCellHeight = cellHeight*4
    let currentCellWidthOccupied = 0

    this.setFontSecondarySubSection(doc)
    this.genCellText("Información Personal", currentX,currentY, cellWidth, cellHeight,doc)

    currentY = currentY + cellHeight

    // -------------------- Lastname Label-------------------------

    this.setFontPrimaryLabel(doc)

    let tempCellWidth = this.genCellTextWidthAuto("Apellidos", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- Lastname Value -------------------------
    let lastname = "Valdivia Pérez"
    this.setFontPrimaryValue(doc)
    this.genCellText(lastname, currentX, currentY, cellWidth - currentCellWidthOccupied - imageCellWidth, cellHeight,doc)

    currentX = currentX + cellWidth - currentCellWidthOccupied - imageCellWidth
    // -------------------- Image Cell -------------------------

    doc.rect(currentX,currentY,imageCellWidth,imageCellHeight)

    // -------------------- Image Value -------------------------

    let imageProperties = doc.getImageProperties('../../../../assets/images/pdf/foto-student.jpg')
    let ratioImageWidthHeight = imageProperties.width/imageProperties.height
    let verticalPaddingImage = 1
    let imageHeight = imageCellHeight - verticalPaddingImage*2
    let imageWidth = ratioImageWidthHeight*imageHeight
    currentX = currentX + ((imageCellWidth - imageWidth)/2)
    doc.addImage('../../../../assets/images/pdf/foto-student.jpg', "JPEG", currentX, currentY + verticalPaddingImage, imageWidth, imageHeight)

    currentY = currentY + cellHeight
    currentX = this.sangria_left

    // -------------------- Nombres label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Nombres", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- Nombres Value -------------------------

    let name = "Jaimito"
    this.setFontPrimaryValue(doc)
    this.genCellText(name, currentX, currentY, cellWidth - currentCellWidthOccupied - imageCellWidth, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left

    // -------------------- Birthdate label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Fecha de Nacimiento", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- Birthdate Value -------------------------
    let birthdate = new Date()
    let birdateFormat = birthdate.toLocaleDateString()
    this.setFontPrimaryValue(doc)
    tempCellWidth = this.genCellTextWidthAuto(birdateFormat, currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- DNI label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("DNI", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- DNI Value -------------------------

    let dni = "76229465"
    this.setFontPrimaryValue(doc)
    this.genCellText(dni, currentX, currentY, cellWidth - currentCellWidthOccupied - imageCellWidth, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left


    // -------------------- City/Region label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Ciudad/Region", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- City/Region Value -------------------------
    let cityRegion = "Arequipa/Arequipa"
    this.setFontPrimaryValue(doc)
    tempCellWidth = this.genCellTextWidthAuto(cityRegion, currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- CUI label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("CUI", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- CUI Value -------------------------

    let cui = "20170654"
    this.setFontPrimaryValue(doc)
    this.genCellText(cui, currentX, currentY, cellWidth - currentCellWidthOccupied - imageCellWidth, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left


    // --------------------  current Addrees label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Dirección Actual", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- Current address Value -------------------------
    let currentAddress = "Villa la mar 546212"
    this.setFontPrimaryValue(doc)
    this.genCellText(currentAddress, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left


    // -------------------- telephone label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Tf./ Cel", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- telephone Value -------------------------
    let phoneNumber = "958642121"
    this.setFontPrimaryValue(doc)
    tempCellWidth = this.genCellTextWidthAuto(phoneNumber, currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- Institutional email label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Correo Institucional", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- Institutional email Value -------------------------

    let institutionalEmail = "juanp@unsa.edu.pe"
    this.setFontPrimaryValue(doc)
    this.genCellText(institutionalEmail, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left

    // --------------------  emergency contact label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Contacto en caso de Emergencia", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- emergency contact Value -------------------------
    let emergencyContact = "Juana Pérez"
    this.setFontPrimaryValue(doc)
    this.genCellText(emergencyContact, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight + this.space_between_components
    currentX = this.sangria_left

    //----------------------------------------------------------------------------------------------
    // -------------------- Información Académica de universidad de origen -------------------------
    //----------------------------------------------------------------------------------------------

    // ------------------------------- SUB HEADER ----------------------------
    this.setFontSecondarySubSection(doc)
    this.genCellText("Información Académica de universidad de origen", currentX,currentY, cellWidth, cellHeight,doc)

    currentY = currentY + cellHeight

    // --------------------  Universidad de Origen label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Universidad de Origen", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- Universidad de Origen Value -------------------------
    let university = "Universidad Nacional de San Agustín"
    this.setFontPrimaryValue(doc)
    this.genCellText(university, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left


    // -------------------- webpage label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Página web", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- webpage Value -------------------------
    let webpage = "unsa.edu.pe"
    this.setFontPrimaryValue(doc)
    tempCellWidth = this.genCellTextWidthAuto(webpage, currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- city/region label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Ciudad/Región", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- city/region Value -------------------------

    let cityReg = "Arequipa/Arequipa"
    this.setFontPrimaryValue(doc)
    this.genCellText(cityReg, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left

    // --------------------  faculty label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Facultad", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- faculty Value -------------------------
    let faculty = "Producción y servicios"
    this.setFontPrimaryValue(doc)
    this.genCellText(faculty, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left

    // --------------------  profesional Program label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Programa Profesional", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- profesional Program Value -------------------------
    let professionalProgram = "Escuela Profesional de Ingeniería de Sistemas"
    this.setFontPrimaryValue(doc)
    this.genCellText(professionalProgram, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left

    // -------------------- cycle label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Ciclo actual", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- cycle Value -------------------------
    let cycle = "10mo"
    this.setFontPrimaryValue(doc)
    tempCellWidth = this.genCellTextWidthAuto(cycle, currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- academic year label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Año Académico", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- academic year Value -------------------------

    let academicYear = "5to"
    this.setFontPrimaryValue(doc)
    this.genCellText(academicYear, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left


// -------------------- mean grades label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Promedio de Notas(Ranking)", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- mean grades Value -------------------------
    let meanGrades = "14.5"
    this.setFontPrimaryValue(doc)
    tempCellWidth = this.genCellTextWidthAuto(meanGrades, currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- credits label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Total de Créditos acumulados", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- credits Value -------------------------

    let credits = "204"
    this.setFontPrimaryValue(doc)
    this.genCellText(credits, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left


    // --------------------  coordinador institucional label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Coordinador Institucional", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- coordinador institucional Value -------------------------
    let programCoordinator = "Dra. María del Pilar Guillén Núñez"
    this.setFontPrimaryValue(doc)
    this.genCellText(programCoordinator, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left


    // --------------------  charge  label -------------------------

    let charge = "Jefa de la Oficina Universitaria de Cooperación, Convenios, Relaciones Internacionales, Becas y Pasantías de la UNSA"
    let chargeSplitToSize = doc.splitTextToSize(charge, cellWidth - currentCellWidthOccupied - this.leftCellPadding*2)

    let tempheight= chargeSplitToSize.length*(doc.getLineHeight()*this.pixelToMilimetresRatio) + 4

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Cargo del Coordinador", currentX, currentY, tempheight, doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    console.log(chargeSplitToSize.length, " | ", tempheight)

    // -------------------- charge  Value -------------------------

    this.setFontPrimaryValue(doc)
    this.genCellTextMultipleLines(
      chargeSplitToSize, currentX, currentY, cellWidth - currentCellWidthOccupied, tempheight,
      chargeSplitToSize.length*(doc.getLineHeight()*this.pixelToMilimetresRatio),
      doc)

    currentY = currentY + tempheight
    currentX = this.sangria_left


    // --------------------  coordinator Email label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Correo del Coordinador", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- coordinator Email Value -------------------------
    let coordinatorEmail = "convenios@unsa.edu.pe"
    this.setFontPrimaryValue(doc)
    this.genCellText(coordinatorEmail, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight + this.space_between_components
    currentX = this.sangria_left


   //----------------------------------------------------------------------------------------------
    // ------------------------------------------- Aval institucional -------------------------
    //----------------------------------------------------------------------------------------------
    let tempCellHeight =0
    let tempMargingText = 3
    doc.addPage('a4', 'p')

    currentY=this.sangria_top
    currentX=this.sangria_left
    currentY = currentY + this.headerSize + this.space_between_components
    this.setFontSecondarySubSection(doc)

    this.genCellText("Aval institucional", currentX,currentY, cellWidth, cellHeight,doc)

    currentY = currentY + cellHeight


    // -------------------- Body Text Aval Institucional Value -------------------------
    tempCellHeight+= cellHeight

    let academicNetwork="Red Peruana de Universidades Nacionales para la Internacionalización"
    let acronym="RUNAI"
    let semester = "2022-B"
    let universityHeaded = "Universidad Nacional Mayor de San Marcos"
    let text = "La autoridad abajo firmante avala la postulación del estudiante Agustino: " + lastname + ", " + name +
    ", para que efectúe el semestre académico " + semester + ", a través del programa de intercambio estudiantil " +
    acronym + " en la " + universityHeaded + ", a desarrollarse durante el semestre académico "+ semester+", tras considerar que la Movilidad Académica a efectuar será "+
    " de gran utilidad para su desarrollo profesional, y un significativo aporte para su perfil de egresado."
    this.setFontPrimaryValue(doc)

    doc.setLineHeightFactor(2)


    chargeSplitToSize = doc.splitTextToSize(text, cellWidth - this.leftCellPadding*2)
    tempheight= chargeSplitToSize.length*(doc.getLineHeight()*this.pixelToMilimetresRatio) + 16
    this.setFontPrimaryValue(doc)
    this.genTextMultipleLines(
      chargeSplitToSize, currentX, currentY, cellWidth, tempheight,
      chargeSplitToSize.length*(doc.getLineHeight()*this.pixelToMilimetresRatio)
      ,doc)

    tempCellHeight+= tempheight + 3*cellHeight + 3*tempMargingText

    this.setFontPrimaryValue(doc)
    doc.rect(currentX,currentY,cellWidth,tempCellHeight,'S')

    currentY = currentY + tempheight
    currentX = this.sangria_left

    doc.setLineHeightFactor(4)
    this.genText("Rúbrica y Sello: ____________________________________________", currentX,currentY, cellWidth, cellHeight,doc)
    currentY = currentY + cellHeight + tempMargingText



    this.genText("Nombre Completo: _________________________________________", currentX,currentY, cellWidth, cellHeight,doc)
    currentY = currentY + cellHeight + tempMargingText


    this.genText("Cargo de la autoridad Firmante: _______________________________", currentX,currentY, cellWidth, cellHeight,doc)
    currentY = currentY + cellHeight + tempMargingText

    currentY += this.space_between_components
    currentY += this.space_between_components



    this.setFontSecondarySubSection(doc)
    this.genCellText("REGISTRO DE CURSOS PARA RECONOCIMIENTO ACADÉMICO", currentX,currentY, cellWidth, cellHeight,doc)
    currentY = currentY + cellHeight

    currentY = this.genTableCourses(doc,currentX,currentY,cellWidth,postulationCourses)

    currentY += this.space_between_components
    // doc.setLineHeightFactor(4)

    // let textRegistroCursosResponsable = "Como responsable académico de la facultad " + faculty + "/" + professionalProgram + " de la UNSA, doy mi conformidad de los cursos a llevarse de manera " + modality + " para efectos de reconocimiento o capacitación"

    // chargeSplitToSize = doc.splitTextToSize(text, cellWidth - this.leftCellPadding*2)
    // tempheight= chargeSplitToSize.length*(doc.getLineHeight()*this.pixelToMilimetresRatio) + 16
    // this.genTextMultipleLines()



    this.setFontSecondarySubSection(doc)
    doc.setLineHeightFactor(2)
    this.genCellText("Nuevo texto", currentX, currentY, cellWidth, cellHeight,doc)
    currentY = currentY + cellHeight








//----------------------------------------------------------------------------------------------
    // ------------------------------------------- All headers and footers -------------------------
    //----------------------------------------------------------------------------------------------



    this.setHeaderAndFooter(doc,"", "")

    doc.save("doc.pdf")




  }


  /**
   *
   * @param text
   * @param x
   * @param y
   * @param width cell width
   * @param height cell height
   * @param textHeight in milimetres
   * @param doc
   */
  private genCellTextMultipleLines(text:string, x:number,y:number,width:number,height:number,textHeight:number, doc:jsPDF){
    const lineHeightMM = doc.getLineHeight()*this.pixelToMilimetresRatio
    const spaceBetweenLines = lineHeightMM - doc.getFontSize()*this.pixelToMilimetresRatio
    doc.rect(x, y, width, height,'FD')
    doc.text(text, x + this.leftCellPadding, y + height/2 - textHeight/2 + lineHeightMM/2 - spaceBetweenLines/2,{align:"left"})
  }

  private genTextMultipleLines(text:string[], x:number,y:number,width:number,height:number,textHeight:number, doc:jsPDF){
    const lineHeightMM = doc.getLineHeight()*this.pixelToMilimetresRatio
    const spaceBetweenLines = lineHeightMM - doc.getFontSize()*this.pixelToMilimetresRatio

    doc.text(text, x + this.leftCellPadding, y + height/2 - textHeight/2 + lineHeightMM/2 - spaceBetweenLines/2,{align:"left"})
  }



  private genCellText(text:string, x:number,y:number,width:number,height:number, doc:jsPDF){
    const textHeight = doc.getLineHeight()*this.pixelToMilimetresRatio
    const spaceBetweenLines = textHeight - doc.getFontSize()*this.pixelToMilimetresRatio
    console.log("ceil height:", height)
    console.log("text height:", textHeight)
    console.log("final position", height/2 - textHeight/2)
    doc.rect(x, y, width, height,'FD')
    // doc.text(text, x + this.leftCellPadding, y + height/2 - textHeight/2 + spaceBetweenLines/2,{align:"left"})
    doc.text(text, x + this.leftCellPadding, y + height/2 + textHeight/2 - spaceBetweenLines/2,{align:"left"})
  }

  private genText(text:string, x:number,y:number,width:number,height:number, doc:jsPDF){
    const textHeight = doc.getLineHeight()*this.pixelToMilimetresRatio
    const spaceBetweenLines = textHeight - doc.getFontSize()*this.pixelToMilimetresRatio
    console.log("ceil height:", height)
    console.log("text height:", textHeight)
    console.log("final position", height/2 - textHeight/2)
    // doc.text(text, x + this.leftCellPadding, y + height/2 - textHeight/2 + spaceBetweenLines/2,{align:"left"})
    doc.text(text, x + this.leftCellPadding, y + height/2 + textHeight/2 - spaceBetweenLines/2,{align:"justify"})
  }
  private genCellTextWidthAuto(text:string, x:number,y:number,height:number, doc:jsPDF):number{
    const textHeight = this.fontSizeForm*this.pixelToMilimetresRatio
    let textWidth = doc.getTextWidth(text)
    let cellWidth = textWidth + this.leftCellPadding*2
    doc.rect(x, y, cellWidth, height,'FD')
    doc.text(text, x + this.leftCellPadding, y + height/2+ textHeight/2,{align:"left"})

    return cellWidth
  }



  private setFontPrimaryLabel(doc:jsPDF){
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(this.fontSizeForm)
    doc.setTextColor(40, 40, 40);
    doc.setDrawColor(40, 40, 40);
    doc.setFillColor(230, 230, 230);
  }

  private setFontPrimaryValue(doc:jsPDF){
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(this.fontSizeForm)
    doc.setTextColor(40, 40, 40);
    doc.setDrawColor(40, 40, 40);
    doc.setFillColor(255, 255, 255);
  }

  private setFontSecondarySubSection(doc:jsPDF){
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(this.fontSizeForm)
    doc.setTextColor(255, 255, 255);
    doc.setDrawColor(40, 40, 40);
    doc.setFillColor(20, 179, 169);
    // doc.setFillColor(147, 147, 147);
  }

  setHeaderAndFooter(doc:jsPDF,universidadDestinoLogo:string, academicNetworkLogo:string,){
    //encabezado altura

    let localimage = "../../../../assets/images/pdf/LOGO_UNSA.png"
    for(let i = 1 ;i<=doc.getNumberOfPages(); i++){
      doc.setPage(i)
      let imageProperties = doc.getImageProperties(localimage)
      let ratioImageWidthHeight = imageProperties.width/imageProperties.height
      let verticalPaddingImage = 2

      let imageHeight = this.headerSize - verticalPaddingImage*2
      let imageWidth = ratioImageWidthHeight*imageHeight

      doc.addImage(localimage, "JPEG", this.sangria_left, this.sangria_top,imageWidth,imageHeight)

      let xpagination = this.docWidth/2
      let ypagination = this.docHeight - this.sangria_top
      this.setFontPrimaryValue(doc)
      doc.text(""+i,xpagination,ypagination,{align:'justify'})

    }
  }

  private genTableCourses(doc:jsPDF,x:number,y:number,width:number,dataRows:IPostulationCoevanCourse[]){
    doc.setLineHeightFactor(1.15)
    let dataTable:string[][] = []
    for(let row of dataRows){
      let dataRow:string[] = []
      dataRow.push(""+row.order)
      dataRow.push(""+row.number_credits)
      dataRow.push(row.course_code)
      dataRow.push(row.unsa_course_name)
      dataRow.push(row.year)
      dataRow.push(row.semester)
      dataRow.push(row.destination_university_course_name)
      dataTable.push(dataRow)
    }

    let tableHeight = 0
    let inp:RowInput
    autoTable(doc, {
      head: [

        [
          "Nro",
          "Créditos curso UNSA",
          "Código curso UNSA",
          "Asignaturas a Reconocer y/o Convalidar en la UNSA",
          "Año",
          "Semestre",
          "Asignaturas a cursar en la UNMSM"
        ]
      ],
      body: dataTable,
      startY: y,
      margin:{left:x},
      rowPageBreak: 'auto',
      theme: 'grid',
      tableWidth:width,
      columnStyles: {
        0: { halign: 'left', fontSize:9, cellWidth: 'wrap' },
        1: { halign: 'left', fontSize:9, cellWidth: 18 },
        2: { halign: 'left', fontSize:9, cellWidth: 20 },
        3: { halign: 'left', fontSize:9, cellWidth: 50 },
        4: { halign: 'left', fontSize:9, cellWidth: 'wrap' },
        5: { halign: 'left', fontSize:9, cellWidth: 'wrap' },
        6: { halign: 'left', fontSize:9, cellWidth: 50 },
      },
      bodyStyles: { valign: 'top', fontSize: 9, cellPadding: 1, lineColor:[40, 40, 40] },
      headStyles: {
        textColor: [255, 255, 255],  fillColor: [20, 179, 169], lineWidth: .1, lineColor:[40, 40, 40], fontSize: 9, cellPadding: 1, valign: 'middle',
        halign: 'center'
      },
      didDrawPage:(HookData)=>{
        tableHeight = Number(HookData.cursor?.y)
      }
    })
    return tableHeight
  }




  // private drawRowItemsWithObstacule(dic:jsPDF,rowItems:IFormRowItem[], obstacleWidth:number,x:number,y:number){

  //   for(let rowItem of rowItems){

  //   }

  // }

}

