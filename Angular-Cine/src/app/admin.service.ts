import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = "http://localhost:8080/filmografia/admin";
  constructor(private http:HttpClient) { }

  logeado: boolean = false;
  usuario:string = "";
  contrasena:string = "";

  iniciarSesion(usuario:string, contrasena:string){
    this.usuario = usuario;
    this.contrasena=contrasena;
    this.logeado = true;
  }

  cerrarSesion(){
    this.logeado = false;
    this.usuario = "";
    this.contrasena = "";
  }

  getAdmin(usuario: String): Observable<any>{
    return this.http.get(`${this.baseUrl}/${usuario}`);
  }

}
