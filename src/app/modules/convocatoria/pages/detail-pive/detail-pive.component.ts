import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/ngrx/app.state';
import { convocationDocumentsStateSelector } from 'src/app/ngrx/selectors/convocation/convocation.selector';
import { IDocument } from 'src/app/shared/interfaces/documents-convocation/document.interface';

@Component({
  selector: 'app-detail-pive',
  templateUrl: './detail-pive.component.html',
  styleUrls: ['./detail-pive.component.scss']
})
export class DetailPiveComponent implements OnInit {

  documents$:Observable<IDocument[]>
  constructor(
    private store:Store<IAppState>
  ) {

    this.documents$ = new Observable<IDocument[]>();
  }

  ngOnInit(): void {

    this.documents$ = this.store.select(convocationDocumentsStateSelector)
  }

}
