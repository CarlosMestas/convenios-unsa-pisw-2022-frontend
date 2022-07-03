import { ITipoDocumento } from './../interfaces/tipo-documento.interface';
export class TipoDocumento implements ITipoDocumento{
  tipoConvocatoriaId: number;
  tipoConvocatoriaName: string;
  tipoConvocatoriaStatus: number;
  constructor(
    tipoConvocatoriaId: number,
    tipoConvocatoriaName: string,
    tipoConvocatoriaStatus: number
    ){
    this.tipoConvocatoriaId = tipoConvocatoriaId,
    this.tipoConvocatoriaName = tipoConvocatoriaName,
    this.tipoConvocatoriaStatus = tipoConvocatoriaStatus
  }
}
