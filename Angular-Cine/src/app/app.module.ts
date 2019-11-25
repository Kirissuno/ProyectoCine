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

@NgModule({
  declarations: [
    AppComponent,
    ListarPelisComponent,
    IndexComponent,
    DetallesPeliComponent,
    BuscarDirectorComponent,
    ListaDirectorComponent,
    LoginComponent,
    NuevaPeliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
