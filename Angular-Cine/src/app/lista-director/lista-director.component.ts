import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../pelicula';
import { PeliculaService } from '../pelicula.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-director',
  templateUrl: './lista-director.component.html',
  styleUrls: ['./lista-director.component.css']
})
export class ListaDirectorComponent implements OnInit {
  peliculas: Observable<Pelicula[]>
  nombres: String[] = [];
  mostrar = false;
  nombre : String;

  constructor(private peliService:PeliculaService, private router:Router, private route:ActivatedRoute) { 
    this.nombres = this.peliService.registro;
  }

  ngOnInit() {
    this.cargarLista();
  }

  cargarLista(){
    this.nombre = this.route.snapshot.params['nombre'];
    this.peliculas = this.peliService.getListaPelisDirector(this.nombre);

  }

  realizarBusqueda(){
    this.router.navigate(['filmografias']);
  }

  borrarBusqueda(){
    this.peliService.borrarReg();
    this.realizarBusqueda();
  }

  finalizarBusqueda(){
    this.mostrar = true;
  }

  volverIndex(){
    this.router.navigate([''])
  }

}
