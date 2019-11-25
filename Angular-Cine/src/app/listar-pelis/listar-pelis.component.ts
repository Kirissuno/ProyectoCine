import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../pelicula';
import { PeliculaService } from '../pelicula.service';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-listar-pelis',
  templateUrl: './listar-pelis.component.html',
  styleUrls: ['./listar-pelis.component.css']
})

export class ListarPelisComponent implements OnInit {
  peliculas: Observable<Pelicula[]>
  logeado :boolean;

  constructor(private adminService:AdminService, private peliService: PeliculaService, private router: Router) {
    this.logeado = this.adminService.logeado;
  }

  ngOnInit() {
    this.cargarLista();
  }

  cargarLista(){
    this.peliculas = this.peliService.getListaPelis();
  }

  detallesPeli(titulo:String){
    this.router.navigate(['filmografia', titulo])
  }

  borrarPeli(titulo:String){
    this.peliService.borrarPeli(titulo)
      .subscribe(
        data =>{
          this.cargarLista();
        }, error =>{
          console.log(error)
        }
      )
  }

  updatePeli(titulo:String){
    this.router.navigate(['filmografia', titulo])
  }

  volverIndex(){
    this.router.navigate(['']);
  }

}
