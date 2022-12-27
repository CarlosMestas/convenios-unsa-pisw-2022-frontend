import { ENUMConvocationTypeAcronym } from 'src/app/shared/enum/convocation.enum';
import { IConvocationResponseDetail } from './../../../../shared/interfaces/convocation.interface';
import { AppRoutingModule } from './../../../app/app.routes';
import { IDocument } from '../../../../shared/interfaces/documents-convocation/document.interface';
import { IEventType } from '../../../../shared/interfaces/convocation/event-type.interface';
import { IRequirement } from '../../../../shared/interfaces/requirements/requirement.interface';
import {
  convocationConvocationStateSelector,
  convocationRequirementsStateSelector,
  convocationTypeStateSelector,
} from '../../../../ngrx/selectors/convocation/convocation.selector';
import { convocationFetchRequestAction } from '../../../../ngrx/actions/convocation/convocation.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/ngrx/app.state';
import { IConvocation } from 'src/app/shared/interfaces/convocation.interface';
import { Observable, map } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { ConvocatoriaRoutingModule } from '../../convocatoria.routes';
import { convocationDocumentBannerStateSelector } from 'src/app/ngrx/selectors/convocation/document.selector';
import { UrlService } from 'src/app/core/services/url/url.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  id: number;
  convocation$: Observable<IConvocationResponseDetail | null>;

  TYPE_COEVAN:ENUMConvocationTypeAcronym = ENUMConvocationTypeAcronym.COEVAN
  TYPE_COEVIENEN:ENUMConvocationTypeAcronym = ENUMConvocationTypeAcronym.COEVIENEN
  TYPE_CODVAN:ENUMConvocationTypeAcronym = ENUMConvocationTypeAcronym.CODVAN
  TYPE_CODVIENEN:ENUMConvocationTypeAcronym = ENUMConvocationTypeAcronym.CODVIENEN
  TYPE_PIVE:ENUMConvocationTypeAcronym = ENUMConvocationTypeAcronym.PIVE
  TYPE_PIVDO:ENUMConvocationTypeAcronym = ENUMConvocationTypeAcronym.PIVDO


  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private urlService:UrlService
  ) {
    this.convocation$ = new Observable<IConvocationResponseDetail>();

    this.id = activatedRoute.parent?.snapshot.params['id'];
  }
  ngOnInit() {
    this.convocation$ = this.store.select(convocationConvocationStateSelector).pipe(map(data=>{
      console.log("convocatoriaaa", data)
      return data
    }));
  }

  apply() {
    this.router.navigate(
      ['../../../' + AppRoutingModule.ROUTES_VALUES.ROUTE_APP_APPLY + '/' + this.id],
      { relativeTo: this.activatedRoute }
    );
  }
  back(){
    console.log(this.urlService.getPreviousUrl())
    this.router.navigate(["/"+AppRoutingModule.ROUTES_VALUES.ROUTE_APP_HOME])
  }
}
