import { IPerfil } from './../interfaces/perfil.interface';
export class Perfil implements IPerfil{
  perfilId: number;
  perfilName: string;
  perfilLastname: string;
  perfilPhone: string;
  usuariosId: number;
  tipoUsuarioId: number;
  programaProfesionalId: number;
  semestreId: number;
  tipoDocumentoId: number;
  perfilDocument: string;
  perfilAddress: string;
  perfilStatus: string;
  perfilDateCreated: string;
  perfilDateModified: string;
  constructor(
    perfilId:number,
    perfilName:string,
    perfilLastname:string,
    perfilPhone:string,
    usuariosId:number,
    tipoUsuarioId:number,
    programaProfesionalId: number,
    semestreId: number,
    tipoDocumentoId: number,
    perfilDocument: string,
    perfilAddress: string,
    perfilStatus: string,
    perfilDateCreated: string,
    perfilDateModified: string
    ){
    this.perfilId = perfilId ,
    this.perfilName= perfilName,
    this.perfilLastname = perfilLastname ,
    this.perfilPhone = perfilPhone,
    this.usuariosId = usuariosId,
    this.tipoUsuarioId = tipoUsuarioId,
    this.programaProfesionalId = programaProfesionalId,
    this.semestreId = semestreId,
    this.tipoDocumentoId = tipoDocumentoId,
    this.perfilDocument = perfilDocument,
    this.perfilAddress = perfilAddress,
    this.perfilStatus = perfilStatus,
    this.perfilDateCreated = perfilDateCreated,
    this.perfilDateModified = perfilDateModified
  }
}
