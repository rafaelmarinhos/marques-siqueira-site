import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { PremiosComponent } from './premios/premios.component';
import { ClientesComponent } from './clientes/clientes.component';
import { LinksComponent } from './links/links.component';
import { SobreVideosComponent } from './sobre-videos/sobre-videos.component';
import { EquipeComponent } from './equipe/equipe.component';
import { EquipeDetalheComponent } from './equipe-detalhe/equipe-detalhe.component';
import { AreasComponent } from './areas/areas.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiasDetalheComponent } from './noticias-detalhe/noticias-detalhe.component';
import { AreasDetalheComponent } from './areas-detalhe/areas-detalhe.component';
import { PremioDetalheComponent } from './premio-detalhe/premio-detalhe.component';
import { Environment } from './app.env';
import { EventosComponent } from './eventos/eventos.component';
import { EventoDetalheComponent } from './evento-detalhe/evento-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    SobreComponent,
    PremiosComponent,
    ClientesComponent,
    LinksComponent,
    SobreVideosComponent,
    EquipeComponent,
    EquipeDetalheComponent,
    AreasComponent,
    NoticiasComponent,
    NoticiasDetalheComponent,
    AreasDetalheComponent,
    PremioDetalheComponent,
    EventosComponent,
    EventoDetalheComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(Environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
