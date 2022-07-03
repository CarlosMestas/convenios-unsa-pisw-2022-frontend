import { ISemestre } from './../../../shared/interfaces/semestre.interface';
import { SemestreHelper } from './semestre.helper';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, Subject } from "rxjs";

@Injectable({
  providedIn:'root'
})

export class SemestreService extends SemestreHelper{
  private semestre$:BehaviorSubject<ISemestre | null>;
  constructor(
    private router:Router,
    protected override http:HttpClient
  ){
    super(http)
    this.semestre$ = new BehaviorSubject<ISemestre | null>(null);
  }
}
