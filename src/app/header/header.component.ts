import { Component, OnInit } from '@angular/core';
import { Constantes } from '../global/constantes';
import { InformacoesGeraisModel } from '../models/informacoes.model';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  private informacoesGeraisDoc: AngularFirestoreDocument<InformacoesGeraisModel>;
  informacoesGerais: Observable<InformacoesGeraisModel>;

  constructor(public DB: AngularFirestore) {
    this.informacoesGeraisDoc = this.DB.doc<InformacoesGeraisModel>(`/informacoes-gerais/${Constantes.informacoes_gerais_id}`);
    this.informacoesGerais = this.informacoesGeraisDoc.valueChanges();
  }

  ngOnInit() {
  }

}
