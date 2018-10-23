import { Component, OnInit } from '@angular/core';
import { AssociadoModel } from '../models/associado.model';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipe-detalhe',
  templateUrl: './equipe-detalhe.component.html'
})
export class EquipeDetalheComponent implements OnInit {

  private equipeDocument: AngularFirestoreDocument<AssociadoModel>;
  equipe: Observable<AssociadoModel>;

  constructor(private route: ActivatedRoute, public DB: AngularFirestore) {
    this.equipeDocument = this.DB.doc<AssociadoModel>('/funcionarios/' + this.route.snapshot.params['id']);
    this.equipe = this.equipeDocument.valueChanges();
  }

  ngOnInit() {
  }
}
