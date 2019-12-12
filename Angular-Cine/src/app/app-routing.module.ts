import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPelisComponent } from './listar-pelis/listar-pelis.component';
import { IndexComponent } from './index/index.component';
import { DetallesPeliComponent } from './detalles-peli/detalles-peli.component';
import { BuscarDirectorComponent } from './buscar-director/buscar-director.component';
import { ListaDirectorComponent } from './lista-director/lista-director.component';
import { LoginComponent } from './login/login.component';
import { NuevaPeliComponent } from './nueva-peli/nueva-peli.component';
import { Error404Component } from './error404/error404.component';


const routes: Routes = [
  {path: "filmografia", component: ListarPelisComponent},
  {path: "filmografia/nueva", component: NuevaPeliComponent},
  {path: "filmografia/:titulo", component: DetallesPeliComponent},
  {path: "filmografias", component: BuscarDirectorComponent},
  {path: "filmografias/:nombre", component: ListaDirectorComponent},
  {path: "login", component: LoginComponent},
  {path: "", component: IndexComponent},
  {path: "**", component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
