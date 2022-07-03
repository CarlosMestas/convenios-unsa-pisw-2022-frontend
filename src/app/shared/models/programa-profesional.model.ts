import { IProgramaProfesional } from './../interfaces/programa-profesiona.interface';
export class ProgramaProfesional implements IProgramaProfesional{
  programaProfesionalId: number;
  programaProfesionalName: string;
  programaProfesionalStatus: number;
  constructor(
      programaProfesionalId: number,
      programaProfesionalName: string,
      programaProfesionalStatus: number
    ){
    this.programaProfesionalId = programaProfesionalId;
    this.programaProfesionalName = programaProfesionalName;
    this.programaProfesionalStatus = programaProfesionalStatus;
  }
}
