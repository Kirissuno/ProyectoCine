import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaService } from '../pelicula.service';
import { Pelicula } from '../pelicula';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-detalles-peli',
  templateUrl: './detalles-peli.component.html',
  styleUrls: ['./detalles-peli.component.css']
})
export class DetallesPeliComponent implements OnInit {
  titulo: String;
  pelicula: Pelicula;
  logeado: boolean;

  constructor(private adminService:AdminService, private router:Router, private route:ActivatedRoute, private pservice:PeliculaService) {
    this.logeado = this.adminService.logeado;
   }

  ngOnInit() {
    this.pelicula = new Pelicula();
    this.titulo = this.route.snapshot.params['titulo'];
    this.pservice.getPeli(this.titulo)
      .subscribe(data=>{
        this.pelicula = data;
      })
  }

  updatePeli(){
    this.pservice.updatePeli(this.pelicula)
      .subscribe(() => this.lista());
  }

  onSubmit(){
    this.updatePeli();
  }

  lista(){
    this.router.navigate(['filmografia']);
  }

}
