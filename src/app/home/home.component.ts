import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AssociadoModel } from '../models/associado.model';
import { NoticiaModel } from '../models/noticia.model';
import { Constantes } from '../global/constantes';
import { ParametrosModel } from '../models/parametros.model';
import { AreaAtuacaoModel } from '../models/area.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  private noticia_home_1_UID: string;
  private noticia_home_2_UID: string;

  private funcionariosColecao: AngularFirestoreCollection<AssociadoModel>;
  funcionarios: Observable<AssociadoModel[]>;

  private areasColecao: AngularFirestoreCollection<AreaAtuacaoModel>;
  areas: Observable<AreaAtuacaoModel[]>;

  private noticia_home_1_doc: AngularFirestoreDocument<NoticiaModel>;
  noticia_home_1: Observable<NoticiaModel>;

  private noticia_home_2_doc: AngularFirestoreDocument<NoticiaModel>;
  noticia_home_2: Observable<NoticiaModel>;

  constructor(public DB: AngularFirestore) {
    this.funcionariosColecao = this.DB.collection<AssociadoModel>('funcionarios', ref => ref.where('tipo', '==', 'advogado'));
    this.funcionarios = this.funcionariosColecao.valueChanges();

    this.areasColecao = this.DB.collection<AreaAtuacaoModel>('areas', ref => ref.orderBy('nome'));
    this.areas = this.areasColecao.valueChanges();

    this.DB.doc<ParametrosModel>(`/parametros/${Constantes.parametros_id}`)
      .valueChanges()
      .subscribe(p => {
        this.noticia_home_1_doc = this.DB.doc<NoticiaModel>('/noticias/' + p.noticia_home_1);
        this.noticia_home_1 = this.noticia_home_1_doc.valueChanges();

        this.noticia_home_2_doc = this.DB.doc<NoticiaModel>('/noticias/' + p.noticia_home_2);
        this.noticia_home_2 = this.noticia_home_2_doc.valueChanges();

        this.noticia_home_1_UID = p.noticia_home_1;
        this.noticia_home_2_UID = p.noticia_home_2;
      });
  }

  ngOnInit() {
  }
}
