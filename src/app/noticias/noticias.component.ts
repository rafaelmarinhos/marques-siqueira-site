import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { NoticiaModel } from '../models/noticia.model';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html'
})
export class NoticiasComponent implements OnInit {

  private noticiasColecao: AngularFirestoreCollection<NoticiaModel>;
  noticias: Observable<NoticiaModel[]>;

  constructor(public DB: AngularFirestore) {

    // TODO: Ordenar por data de criação
    this.noticiasColecao = DB.collection<NoticiaModel>('noticias');
    this.noticias = this.noticiasColecao.valueChanges();
  }

  ngOnInit() {
  }
}
