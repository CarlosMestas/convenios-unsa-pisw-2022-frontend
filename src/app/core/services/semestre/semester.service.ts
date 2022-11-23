import { ISemester } from '../../../shared/interfaces/semester.interface';
import { SemesterHelper } from './semester.helper';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, Subject } from "rxjs";

@Injectable({
  providedIn:'root'
})

export class SemesterService extends SemesterHelper{

  constructor(
    private router:Router,
    protected override http:HttpClient
  ){
    super(http)
  }
}
