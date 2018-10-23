import { Component, OnInit } from '@angular/core';
import { AreaAtuacaoModel } from '../models/area.model';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-areas-detalhe',
  templateUrl: './areas-detalhe.component.html'
})
export class AreasDetalheComponent implements OnInit {

  private areaDocument: AngularFirestoreDocument<AreaAtuacaoModel>;
  area: Observable<AreaAtuacaoModel>;

  constructor(private route: ActivatedRoute, public DB: AngularFirestore) {
    this.areaDocument = this.DB.doc<AreaAtuacaoModel>('/areas/' + this.route.snapshot.params['id']);
    this.area = this.areaDocument.valueChanges();
  }

  ngOnInit() {
  }
}
