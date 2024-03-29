import { IPostulationCoevanCourse } from '../../../shared/interfaces/postulation.interface';

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { GenDocumentCoevanHelper } from './gen-doc-coevan.helper';

import jsPDF from 'jspdf'
import autoTable, { RowInput } from 'jspdf-autotable'
import { IPostulationCoevanDocFormat } from 'src/app/shared/interfaces/postulation-coevan.interface';



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

  generateDocumentPostulation(testData:IPostulationCoevanDocFormat){

    //------TEST DATA

    // let testData:IPostulationCoevanDocFormat = {
    //   lastname: 'Valdivia Pérez',
    //   name: 'Jaimito',
    //   birth_date: '',
    //   dni: '',
    //   city_region_postulant: '',
    //   cui: '',
    //   address: '',
    //   phone: '',
    //   email: '',
    //   emergency_contact: '',
    //   university_origin: '',
    //   web_page: '',
    //   city_region_university: '',
    //   faculty:{
    //     id:0,
    //     name:"Producción y servicios",
    //     acronym:""
    //   } ,
    //   professional_program:{
    //     id:0,
    //     name:'Escuela Profesional de Ingeniería de Sistemas',
    //     acronym:'',
    //     faculty: 1
    //   } ,
    //   current_cicle: {
    //     id:0,
    //     description:''
    //   },
    //   academic_year: {
    //     id:0,
    //     description:''
    //   },
    //   mean_grades: 0,
    //   total_credits: 0,
    //   coordinator: '',
    //   coordinator_cargue: '',
    //   coordinator_email: '',
    //   modality: {
    //     id:0,
    //     name:'Presencial'
    //   },
    //   semester: {
    //     id:0,
    //     name:'2022-B'
    //   },
    //   university_target: {
    //     id:0,
    //     name:'Universidad Nacional Mayor de San Marcos',
    //     acronym:'UNMSM'
    //   },
    //   academic_network: {
    //     id: 0,
    //     name:'Red Peruana de Universidades Nacionales para la Internacionalización',
    //     acronym:'RUNAI',
    //     description:''
    //   }
    // }


    // Tamaño Hoja A4 => Alto => 297 Ancho => 210 mm
    // Ancho tabla 269

    let doc = new jsPDF('p', 'mm', 'a4')

    let currentY=this.sangria_top
    let currentX=this.sangria_left
    currentY = currentY + this.headerSize + this.space_between_components
    /*-------------------------TITLE----------------------------- */


    let D_TITLE = "PROGRAMA DE INTERCAMBIO ESTUDIANTIL " + (testData.academic_network.name).toUpperCase() + " - " + (testData.academic_network.acronym).toUpperCase() +
    " FORMULARIO DE POSTULACIÓN " + testData.modality.name + " " + testData.semester.name


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
    this.setFontPrimaryValue(doc)
    this.genCellText(testData.lastname, currentX, currentY, cellWidth - currentCellWidthOccupied - imageCellWidth, cellHeight,doc)

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
    // doc.addImage('../../../../assets/images/pdf/foto-student.jpg', "JPEG", currentX, currentY + verticalPaddingImage, imageWidth, imageHeight)



    doc.addImage(testData.photo, "JPEG", currentX, currentY + verticalPaddingImage, imageWidth, imageHeight)

    currentY = currentY + cellHeight
    currentX = this.sangria_left

    // -------------------- Nombres label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Nombres", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- Nombres Value -------------------------

    this.setFontPrimaryValue(doc)
    this.genCellText(testData.name, currentX, currentY, cellWidth - currentCellWidthOccupied - imageCellWidth, cellHeight,doc)

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


    this.setFontPrimaryValue(doc)
    this.genCellText(testData.dni, currentX, currentY, cellWidth - currentCellWidthOccupied - imageCellWidth, cellHeight,doc)

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


    this.setFontPrimaryValue(doc)
    this.genCellText(testData.cui, currentX, currentY, cellWidth - currentCellWidthOccupied - imageCellWidth, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left


    // --------------------  current Addrees label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Dirección Actual", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- Current address Value -------------------------

    this.setFontPrimaryValue(doc)
    this.genCellText(testData.address, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left


    // -------------------- telephone label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Tf./ Cel", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- telephone Value -------------------------

    this.setFontPrimaryValue(doc)
    tempCellWidth = this.genCellTextWidthAuto(testData.phone, currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- Institutional email label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Correo Institucional", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- Institutional email Value -------------------------


    this.setFontPrimaryValue(doc)
    this.genCellText(testData.email, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left

    // --------------------  emergency contact label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Contacto en caso de Emergencia", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- emergency contact Value -------------------------

    this.setFontPrimaryValue(doc)
    this.genCellText(testData.emergency_contact, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

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

    this.setFontPrimaryValue(doc)
    this.genCellText(testData.university_origin.name, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left


    // -------------------- webpage label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Página web", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- webpage Value -------------------------

    this.setFontPrimaryValue(doc)
    tempCellWidth = this.genCellTextWidthAuto(testData.web_page, currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- city/region label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Ciudad/Región", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- city/region Value -------------------------


    this.setFontPrimaryValue(doc)
    this.genCellText(testData.city_region_university, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left

    // --------------------  faculty label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Facultad", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- faculty Value -------------------------

    this.setFontPrimaryValue(doc)
    this.genCellText(testData.faculty.name, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left

    // --------------------  profesional Program label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Programa Profesional", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- profesional Program Value -------------------------
    this.setFontPrimaryValue(doc)
    this.genCellText(testData.professional_program.name, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left

    // -------------------- cycle label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Ciclo actual", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- cycle Value -------------------------

    this.setFontPrimaryValue(doc)
    tempCellWidth = this.genCellTextWidthAuto(testData.current_cicle.description, currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- academic year label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Año Académico", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- academic year Value -------------------------


    this.setFontPrimaryValue(doc)
    this.genCellText(testData.academic_year.description, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left


// -------------------- mean grades label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Promedio de Notas(Ranking)", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- mean grades Value -------------------------

    this.setFontPrimaryValue(doc)
    tempCellWidth = this.genCellTextWidthAuto(testData.mean_grades+"", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- credits label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Total de Créditos acumulados", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied += tempCellWidth
    currentX = currentX + tempCellWidth

    // -------------------- credits Value -------------------------


    this.setFontPrimaryValue(doc)
    this.genCellText(testData.total_credits+"", currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left


    // --------------------  coordinador institucional label -------------------------

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Coordinador Institucional", currentX, currentY, cellHeight,doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied

    // -------------------- coordinador institucional Value -------------------------

    this.setFontPrimaryValue(doc)
    this.genCellText(testData.coordinator, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

    currentY = currentY + cellHeight
    currentX = this.sangria_left


    // --------------------  charge  label -------------------------


    let chargeSplitToSize = doc.splitTextToSize(testData.coordinator_charge, cellWidth - currentCellWidthOccupied - this.leftCellPadding*2)

    let tempheight= chargeSplitToSize.length*(doc.getLineHeight()*this.pixelToMilimetresRatio) + 4

    this.setFontPrimaryLabel(doc)
    tempCellWidth = this.genCellTextWidthAuto("Cargo del Coordinador", currentX, currentY, tempheight, doc)
    currentCellWidthOccupied = tempCellWidth
    currentX = currentX + currentCellWidthOccupied


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

    this.setFontPrimaryValue(doc)
    this.genCellText(testData.coordinator_email, currentX, currentY, cellWidth - currentCellWidthOccupied, cellHeight,doc)

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





    let formatedText = GenDocumentCoevanHelper.replaceTagsAval(testData.text_aval, testData)


    this.setFontPrimaryValue(doc)

    doc.setLineHeightFactor(2)


    chargeSplitToSize = doc.splitTextToSize(formatedText, cellWidth - this.leftCellPadding*2)
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
    this.genCellText("4. REGISTRO DE CURSOS PARA RECONOCIMIENTO ACADÉMICO", currentX,currentY, cellWidth, cellHeight,doc)
    currentY = currentY + cellHeight

    currentY = this.genTableCourses(doc,currentX,currentY,cellWidth,testData.courses)

    doc.setLineHeightFactor(2)

    tempCellHeight = 0


    let coursesRespFormated:string = GenDocumentCoevanHelper.replaceTagsCourseResponsible(testData.text_courses,testData)

    doc.setLineHeightFactor(2)
    this.setFontPrimaryValue(doc)
    chargeSplitToSize = doc.splitTextToSize(coursesRespFormated, cellWidth - this.leftCellPadding*2)
    tempheight= chargeSplitToSize.length*(doc.getLineHeight()*this.pixelToMilimetresRatio) + 16

    this.genTextMultipleLines(
      chargeSplitToSize, currentX, currentY, cellWidth, tempheight,
      chargeSplitToSize.length*(doc.getLineHeight()*this.pixelToMilimetresRatio)
      ,doc)

    tempCellHeight+= tempheight + 5*cellHeight + 4*tempMargingText

    this.setFontPrimaryValue(doc)
    doc.rect(currentX,currentY,cellWidth,tempCellHeight,'S')

    currentY = currentY + tempheight + 4*cellHeight
    currentX = this.sangria_left


    doc.setLineHeightFactor(1.15)
    this.genText("Nombre y Firma del Estudiante", currentX,currentY, cellWidth, cellHeight,doc)
    currentY = currentY + cellHeight + tempMargingText

    doc.setLineHeightFactor(1.15)
    this.genText("Fecha: ", currentX,currentY, cellWidth, cellHeight,doc)
    currentY = currentY - cellHeight - tempMargingText

    currentX += cellWidth/2

    doc.setLineHeightFactor(1.15)

    chargeSplitToSize = doc.splitTextToSize("Nombre, firma y sello del Responsable Académico/Director de Escuela", (cellWidth - this.leftCellPadding*2)/2)
    this.genText(chargeSplitToSize, currentX,currentY, cellWidth, cellHeight,doc)
    currentY = currentY + cellHeight + tempMargingText

    doc.setLineHeightFactor(1.15)
    this.genText("Fecha: ", currentX,currentY, cellWidth, cellHeight,doc)
    currentY = currentY + cellHeight + tempMargingText


    //--------------


    // currentY += this.space_between_components

    // this.setFontSecondarySubSection(doc)
    // doc.setLineHeightFactor(2)
    // this.genCellText("5. DECLARACIÓN DE COMPROMISO", currentX, currentY, cellWidth, cellHeight,doc)
    // currentY = currentY + cellHeight


    //---------------------------------------------------------------------------------------------
    //----------------------DECLARACIÓN DE COMPROMISO----------------------------------------------
    //---------------------------------------------------------------------------------------------
    doc.addPage('a4', 'p')


    currentY=this.sangria_top
    currentX=this.sangria_left
    currentY = currentY + this.headerSize + this.space_between_components
    this.setFontSecondarySubSection(doc)

    this.genCellText("5. DECLARACIÓN DE COMPROMISO", currentX,currentY, cellWidth, cellHeight,doc)

    currentY = currentY + cellHeight

    tempCellHeight = 0
    let fingerprintW = cellWidth/7
    let fingerprintY = 0
    // -------------------- Body Text Declaración de compromiso Value -------------------------



    let decCompFormated:string = GenDocumentCoevanHelper.replaceTagsDecComp(testData.text_commitment, testData)

    doc.setLineHeightFactor(2)
    this.setFontPrimaryValue(doc)

    chargeSplitToSize = doc.splitTextToSize(decCompFormated, cellWidth - this.leftCellPadding*2)
    tempheight= chargeSplitToSize.length*(doc.getLineHeight()*this.pixelToMilimetresRatio) + 16
    this.genTextMultipleLines(
      chargeSplitToSize, currentX, currentY, cellWidth, tempheight,
      chargeSplitToSize.length*(doc.getLineHeight()*this.pixelToMilimetresRatio)
      ,doc)

    tempCellHeight+= tempheight + 6*cellHeight + 3*tempMargingText
    fingerprintY = currentY + tempCellHeight

    doc.rect(currentX,currentY,cellWidth,tempCellHeight,'S')


    currentY += tempCellHeight - 2.5*cellHeight

    doc.setLineHeightFactor(4)
    this.genText("Firma del postulante: ____________________________________________", currentX,currentY, cellWidth, cellHeight,doc)
    currentY = currentY + cellHeight + tempMargingText

    this.genText("Fecha: ____/____/_____", currentX,currentY, cellWidth, cellHeight,doc)
    currentY = currentY + cellHeight + tempMargingText

    currentY += - 3*cellHeight


    currentX+= cellWidth - fingerprintW - this.leftCellPadding
    fingerprintY += -fingerprintW*1.15 - this.leftCellPadding

    doc.rect(currentX,fingerprintY,fingerprintW,fingerprintW*1.15,'S')





//----------------------------------------------------------------------------------------------
    // ------------------------------------------- All headers and footers -------------------------
    //----------------------------------------------------------------------------------------------




    this.setHeaderAndFooter(
      doc,
      testData.university_origin.logo,
      testData.academic_network.logo,
      testData.university_target.logo
      )


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
    doc.rect(x, y, width, height,'FD')
    doc.text(text, x + this.leftCellPadding, y + height/2 + textHeight/2 - spaceBetweenLines/2,{align:"left"})
  }

  private genText(text:string, x:number,y:number,width:number,height:number, doc:jsPDF){
    const textHeight = doc.getLineHeight()*this.pixelToMilimetresRatio
    const spaceBetweenLines = textHeight - doc.getFontSize()*this.pixelToMilimetresRatio
    doc.text(text, x + this.leftCellPadding, y + height/2 + textHeight/2 - spaceBetweenLines/2,{align:"left"})
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

  async setHeaderAndFooter(doc:jsPDF,universityOriginLogo:string, academicNetworkLogo:string, universityTargetLogo:string,){
    //encabezado altura


    let spaceImage = (this.docWidth-this.sangria_left*2)/3
    let verticalPaddingImage = 2
    let imageHeight = this.headerSize - verticalPaddingImage*2


    for(let i = 1 ;i<=doc.getNumberOfPages(); i++){

      //------initial loop config
      let currentX:number = this.sangria_left + spaceImage * 1/2
      let currentY:number = this.sangria_top


      //---------------pagination 1,2,3,....
      doc.setPage(i)
      let xpagination = this.docWidth/2
      let ypagination = this.docHeight - this.sangria_top
      this.setFontPrimaryValue(doc)
      doc.text(""+i,xpagination,ypagination,{align:'justify'})


      // - ----------- IMAGE 1 ---------------

      await this.getImgUrl(doc,currentX,currentY, imageHeight ,universityOriginLogo,(doc:jsPDF,dataUri:string,x:number,w:number,h:number)=>{
        doc.addImage(dataUri,x - w/2,currentY,w,h)
      })



      currentX += spaceImage


      // - ----------- IMAGE 2 ---------------


      await this.getImgUrl(doc,currentX,currentY, imageHeight ,academicNetworkLogo,(doc:jsPDF,dataUri:string,x:number,w:number,h:number)=>{
        doc.addImage(dataUri,x - w/2,currentY,w,h)
      })

      currentX += spaceImage
      // - ----------- IMAGE 3 ---------------
      await this.getImgUrl(doc,currentX,currentY, imageHeight ,universityTargetLogo,(doc:jsPDF,dataUri:string,x:number,w:number,h:number)=>{
        doc.addImage(dataUri,x - w/2,currentY,w,h)
      })



    }
    doc.save("doc.pdf")

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
      dataRow.push(row.target_university_course_name)
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



   getImgUrl(doc:jsPDF,x:number,y:number,h:number,url:string,cb:(doc:jsPDF,dataUri:string,x:number,w:number,height:number)=>void){

    return new Promise((resolve,reject)=>{
      let img=new Image()
      img.setAttribute("crossOrigin","anonymous")
      img.crossOrigin="anonymous";//getting images from external domain
      img.onload = ()=>  {
        var canvas = document.createElement('canvas')
        var ctx = canvas.getContext('2d')
          canvas.width = img.naturalWidth
          canvas.height = img.naturalHeight
          ctx!.fillStyle = '#FFF'
          ctx?.fillRect(0,0, canvas.width,canvas.height)
          ctx?.drawImage(img,0,0)

          resolve(
            cb(doc,canvas.toDataURL('image/jpeg'),x,(h/canvas.height)*canvas.width,h)
          )
      }
      img.onerror = reject
      img.src = url + "?allowmeread"
    })
  }





}

