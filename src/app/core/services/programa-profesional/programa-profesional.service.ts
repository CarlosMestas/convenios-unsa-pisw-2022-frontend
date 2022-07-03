import { IProgramaProfesional } from './../../../shared/interfaces/programa-profesiona.interface';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, Subject } from "rxjs";
import { ProgramaProfesionalHelper } from './programa-profesional.helper';

@Injectable({
  providedIn:'root'
})

export class ProgramaProfesionalService extends ProgramaProfesionalHelper{


  private programaProfesional$:BehaviorSubject<IProgramaProfesional | null>;
  constructor(
    private router:Router,
    protected override http:HttpClient
  ){
    super(http)
    this.programaProfesional$ = new BehaviorSubject<IProgramaProfesional | null>(null);
  }

}
