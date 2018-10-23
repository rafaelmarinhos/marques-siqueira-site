import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AreaAtuacaoModel } from '../models/area.model';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html'
})
export class AreasComponent implements OnInit {

  private areasColecao: AngularFirestoreCollection<AreaAtuacaoModel>;
  areas: Observable<AreaAtuacaoModel[]>;

  constructor(public DB: AngularFirestore) {

    // TODO: Ordenar por data de criação
    this.areasColecao = DB.collection<AreaAtuacaoModel>('areas');
    this.areas = this.areasColecao.valueChanges();
  }

  ngOnInit() {
  }

}
