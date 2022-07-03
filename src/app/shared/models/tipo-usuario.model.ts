import { ITipoUsuario } from './../interfaces/tipo-usuario.interface';
export class TipoUsuario implements ITipoUsuario{
  tipoUsuarioId: number;
  tipoUsuarioName: string;
  tipoUsuarioStatus: number;
  constructor(
    tipoUsuarioId:number,
    tipoUsuarioName:string,
    tipoUsuarioStatus:number
    ){
    this.tipoUsuarioId=tipoUsuarioId,
    this.tipoUsuarioName=tipoUsuarioName,
    this.tipoUsuarioStatus=tipoUsuarioStatus
  }

}
