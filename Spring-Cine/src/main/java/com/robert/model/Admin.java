package com.robert.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.sun.istack.NotNull;

@Entity
@Table(name="admins")
public class Admin {
	
	@Id
	@NotNull
	@NotEmpty
	private String usuario;
	@NotNull
	@NotEmpty
	private String contrasena;
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Admin(String usuario, String contrasena) {
		super();
		this.usuario = usuario;
		this.contrasena = contrasena;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getContrasena() {
		return contrasena;
	}
	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}
	
	

}
