import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '../../../node_modules/angularfire2/firestore';
import { AssociadoModel } from '../models/associado.model';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html'
})
export class EquipeComponent implements OnInit {

  private funcionariosColecao: AngularFirestoreCollection<AssociadoModel>;
  funcionarios: Observable<AssociadoModel[]>;

  constructor(public DB: AngularFirestore) {
    this.funcionariosColecao = DB.collection<AssociadoModel>('funcionarios');
    this.funcionarios = this.funcionariosColecao.valueChanges();
  }

  ngOnInit() {
  }
}
