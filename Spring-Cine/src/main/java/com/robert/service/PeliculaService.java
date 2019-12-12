package com.robert.service;

import java.util.List;

import com.robert.model.Pelicula;

public interface PeliculaService {
	public List<Pelicula> getAll();
	public Pelicula findByTitulo(String titulo);
	public void createNewPeli(Pelicula pelicula);
	public void deleteByTitulo(String titulo);
	public void updatePeli(Pelicula pelicula);
	public List<Pelicula> pelisDirector(String director);
}
