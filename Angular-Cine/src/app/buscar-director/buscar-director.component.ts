import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaService } from '../pelicula.service';

@Component({
  selector: 'app-buscar-director',
  templateUrl: './buscar-director.component.html',
  styleUrls: ['./buscar-director.component.css']
})
export class BuscarDirectorComponent implements OnInit {
  nombre:String;

  constructor(private router:Router, private peliServ:PeliculaService) {
   }

  ngOnInit() {
  }

  volverIndex(){
    this.router.navigate(['']);
  }

  peliculasDirector(nombre:String){
    this.router.navigate(['filmografias', nombre])
    this.peliServ.anadirReg(nombre);
  }

}
