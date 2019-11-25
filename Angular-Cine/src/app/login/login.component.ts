import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logeado:boolean;
  admin:Admin;
  user :String;
  password:String;
  loginCorrecto: boolean;
  
  constructor(private adminService:AdminService, private router:Router) {
    this.logeado = this.adminService.logeado;
    this.user = this.adminService.usuario;
    this.password = this.adminService.contrasena;
  }

  ngOnInit() {
  }

  iniciarSesion(usuario:string, contrasena:string){
    this.admin = new Admin();
    this.user = usuario;
    this.password = contrasena;
    this.adminService.getAdmin(this.user)
      .subscribe(data=>{
        this.admin = data;
        if(this.admin.usuario == this.user && this.admin.contrasena == this.password){
          this.adminService.iniciarSesion(usuario, contrasena);
          this.loginCorrecto = true;
          this.router.navigateByUrl('/filmografia');
        }
      }, error => {
        this.loginCorrecto = false;
      })
  }

  cerrarSesion(){
    this.adminService.cerrarSesion();
    this.router.navigateByUrl('/filmografia');
  }

}
