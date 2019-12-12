import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  admins:Observable<Admin[]>;
  
  constructor(private modalService:NgbModal, private adminService:AdminService, private router:Router) {
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
        }else{
          this.loginCorrecto=false;
        }
      }, () => {
        this.loginCorrecto = false;
      },)
  }

  verAdmins(adminsModal){
    this.admins = this.adminService.getAdmins();
    this.modalService.open(adminsModal);
  }

  borrarAdmin(usuario:String){
    this.adminService.deleteAdmin(usuario).subscribe(() => {
      this.admins = this.adminService.getAdmins();
    });
  }

  crearAdmin(modal){
    this.modalService.open(modal);
  }

  
  nuevoAdmin(usuario:String, password:String, modalBueno, modalError){
    this.adminService.getAdmin(usuario).subscribe((data) => {
      if(data.usuario === null || data.contrasena === null || typeof(data) === undefined){
        this.modalService.dismissAll();
        let newAdmin = new Admin();
        newAdmin.usuario = usuario;
        newAdmin.contrasena = password;
        this.adminService.addAdmin(newAdmin).subscribe(() => this.modalService.open(modalBueno))
      }else{
        this.modalService.open(modalError);
      }
    })
    
  }

  cerrarSesion(){
    this.adminService.cerrarSesion();
    this.router.navigateByUrl('/filmografia');
  }

}
