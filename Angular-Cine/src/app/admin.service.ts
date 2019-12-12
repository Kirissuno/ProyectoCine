import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Admin } from './admin';
import { catchError } from 'rxjs/operators'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = "http://localhost:8080/filmografia/admin";
  constructor(private http:HttpClient, private router:Router) { }

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

  getAdmin(usuario: String): Observable<Admin>{
    return this.http.get<Admin>(`${this.baseUrl}/${usuario}`);
  }

  getAdmins(): Observable<Admin[]>{
    return this.http.get<Admin[]>(`${this.baseUrl}s`);
  }

  deleteAdmin(usuario:String): Observable<any>{
    return this.http.delete(`${this.baseUrl}/d/${usuario}`)
  }

  addAdmin(admin:Admin): Observable<Admin>{
    return this.http.post<Admin>(`${this.baseUrl}s`, admin);  
  }

}
