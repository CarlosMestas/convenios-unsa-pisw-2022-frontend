import { ISemestre } from './../interfaces/semestre.interface';
export class Semestre implements ISemestre{
  semestreId: number;
  semestreName: string;
  semestreStatus: number;
  constructor(
    semestreId: number,
    semestreName: string,
    semestreStatus: number
    ){
      this.semestreId = semestreId
      this.semestreName = semestreName
      this.semestreStatus = semestreStatus
  }

}
