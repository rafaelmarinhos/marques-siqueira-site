import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '../../../node_modules/angularfire2/firestore';
import { AssociadoModel } from '../models/associado.model';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html'
})
export class EquipeComponent implements OnInit {

  private funcionariosColecao: AngularFirestoreCollection<AssociadoModel>;
  funcionarios: Observable<AssociadoModel[]>;

  constructor(public DB: AngularFirestore, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.funcionariosColecao = this.DB.collection<AssociadoModel>('funcionarios', ref => ref.where('tipo', '==', params['tipo']));
      this.funcionarios = this.funcionariosColecao.valueChanges();
    });
  }
}
