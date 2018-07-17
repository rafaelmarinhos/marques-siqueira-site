import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '../../../node_modules/angularfire2/firestore';
import { ClienteModel } from '../models/cliente.model';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  private clientesColecao: AngularFirestoreCollection<ClienteModel>;
  clientes: Observable<ClienteModel[]>;

  constructor(public DB: AngularFirestore) {
    this.clientesColecao = DB.collection<ClienteModel>('clientes', ref => ref.orderBy('nome'));
    this.clientes = this.clientesColecao.valueChanges();
  }

  ngOnInit() {
  }
}
