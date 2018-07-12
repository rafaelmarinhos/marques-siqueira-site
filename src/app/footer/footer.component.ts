import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { InformacoesGeraisModel } from '../models/informacoes.model';
import { Observable } from 'rxjs/Observable';
import { Constantes } from '../global/constantes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  private informacoesGeraisDoc: AngularFirestoreDocument<InformacoesGeraisModel>;
  informacoesGerais: Observable<InformacoesGeraisModel>;

  constructor(public DB: AngularFirestore) {
    this.informacoesGeraisDoc = this.DB.doc<InformacoesGeraisModel>(`/informacoes-gerais/${Constantes.informacoes_gerais_id}`);
    this.informacoesGerais = this.informacoesGeraisDoc.valueChanges();
  }

  ngOnInit() {
  }

}
