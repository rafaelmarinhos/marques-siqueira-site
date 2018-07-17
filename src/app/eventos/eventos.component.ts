import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '../../../node_modules/angularfire2/firestore';
import { EventoModel } from '../models/evento.model';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html'
})
export class EventosComponent implements OnInit {

  private eventosColecao: AngularFirestoreCollection<EventoModel>;
  eventos: Observable<EventoModel[]>;

  constructor(public DB: AngularFirestore) {

    // TODO: Ordenar por data de criação
    this.eventosColecao = DB.collection<EventoModel>('eventos');
    this.eventos = this.eventosColecao.valueChanges();
  }

  ngOnInit() {
  }
}
