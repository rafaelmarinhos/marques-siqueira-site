import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { NoticiaModel } from '../models/noticia.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-noticias-detalhe',
  templateUrl: './noticias-detalhe.component.html'
})
export class NoticiasDetalheComponent implements OnInit {

  private noticiaDocument: AngularFirestoreDocument<NoticiaModel>;
  noticia: Observable<NoticiaModel>;

  constructor(private route: ActivatedRoute, public DB: AngularFirestore) {
    this.noticiaDocument = this.DB.doc<NoticiaModel>('/noticias/' + this.route.snapshot.params['id']);
    this.noticia = this.noticiaDocument.valueChanges();
  }

  ngOnInit() {
  }
}
