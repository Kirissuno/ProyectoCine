import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculaService } from '../pelicula.service';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-nueva-peli',
  templateUrl: './nueva-peli.component.html',
  styleUrls: ['./nueva-peli.component.css']
})
export class NuevaPeliComponent implements OnInit {
  pelicula:Pelicula;

  constructor(private adminService:AdminService, private peliService:PeliculaService, private router: Router) {
    this.pelicula = new Pelicula();
   }

  ngOnInit() {
    if(this.adminService.logeado === false){
      this.iraLista();
    }
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
