import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculaService } from '../pelicula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-peli',
  templateUrl: './nueva-peli.component.html',
  styleUrls: ['./nueva-peli.component.css']
})
export class NuevaPeliComponent implements OnInit {
  pelicula:Pelicula;

  constructor(private peliService:PeliculaService, private router: Router) {
    this.pelicula = new Pelicula();
   }

  ngOnInit() {
  }

  save(){
    this.peliService.crearPeli(this.pelicula)
      .subscribe(() => this.iraLista());
  }

  onSubmit(){
    this.save();
  }

  iraLista(){
    this.router.navigate(['filmografia'])
  }

}
