import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPelisComponent } from './listar-pelis/listar-pelis.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { DetallesPeliComponent } from './detalles-peli/detalles-peli.component';
import { BuscarDirectorComponent } from './buscar-director/buscar-director.component';
import { ListaDirectorComponent } from './lista-director/lista-director.component';
import { LoginComponent } from './login/login.component';
import { NuevaPeliComponent } from './nueva-peli/nueva-peli.component';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPelisComponent,
    IndexComponent,
    DetallesPeliComponent,
    BuscarDirectorComponent,
    ListaDirectorComponent,
    LoginComponent,
    NuevaPeliComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
