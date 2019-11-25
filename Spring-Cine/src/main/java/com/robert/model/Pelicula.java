package com.robert.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.sun.istack.NotNull;

@Entity
@Table(name="pelicula")
public class Pelicula implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String director;
	@Id
	@NotNull
	private String titulo;
	@NotNull
	private Date fecha;
	
	public Pelicula(String director, String titulo, Date fecha) {
		super();
		this.director = director;
		this.titulo = titulo;
		this.fecha = fecha;
	}
	public Pelicula() {
		super();
	}
	public String getDirector() {
		return director;
	}
	public void setDirector(String director) {
		this.director = director;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public Date getFecha() {
		return fecha;
	}
	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	
	

}
