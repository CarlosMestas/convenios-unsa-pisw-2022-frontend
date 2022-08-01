import { ITipoDocumento } from './../interfaces/tipo-documento.interface';
export class TipoDocumento implements ITipoDocumento{
  documentId: number;
  documentName: string;
  documentStatus: string;
  constructor(
    documentId: number,
    documentName: string,
    documentStatus: string
    ){
    this.documentId = documentId,
    this.documentName = documentName,
    this.documentStatus = documentStatus
  }
}
