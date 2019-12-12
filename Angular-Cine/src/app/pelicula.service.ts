import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from './pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private baseUrl = 'http://localhost:8080/filmografia';

  registro : String[] = [];

  constructor(private http:HttpClient) { }

  anadirReg(nombre:String){
    this.registro.push(nombre);
  }

  borrarReg(){
    this.registro = [];
  }

  getListaPelis(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getListaPelisDirector(nombre:String): Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(`${this.baseUrl}s/${nombre}`);
  }

  getPeli(titulo: String): Observable<Pelicula>{
    return this.http.get<Pelicula>(`${this.baseUrl}/${titulo}`);
  }

  crearPeli(pelicula:Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, pelicula);
  }

  updatePeli(pelicula:Object, titulo:String):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${titulo}`, pelicula);
  }

  borrarPeli(titulo:String): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${titulo}`);
  }
}
