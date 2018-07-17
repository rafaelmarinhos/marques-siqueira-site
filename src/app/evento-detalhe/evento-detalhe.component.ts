import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '../../../node_modules/angularfire2/firestore';
import { EventoModel } from '../models/evento.model';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html'
})
export class EventoDetalheComponent implements OnInit {

  private eventoDocument: AngularFirestoreDocument<EventoModel>;
  evento: Observable<EventoModel>;

  constructor(private route: ActivatedRoute, public DB: AngularFirestore) {
    console.log(this.route.snapshot.params['id']);

    this.eventoDocument = this.DB.doc<EventoModel>('/eventos/' + this.route.snapshot.params['id']);
    this.evento = this.eventoDocument.valueChanges();
  }

  ngOnInit() {
  }
}
