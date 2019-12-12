package com.robert.service;

import java.util.List;

import com.robert.dto.PeliculaDTO;

public interface PeliculaService {
	public List<PeliculaDTO> getAll();
	public PeliculaDTO findByTitulo(String titulo);
	public void createNewPeli(PeliculaDTO pelicula);
	public void deleteByTitulo(String titulo);
	public void updatePeli(PeliculaDTO pelicula, String titulo);
	public List<PeliculaDTO> pelisDirector(String director);
}
