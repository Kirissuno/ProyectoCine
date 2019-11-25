package com.robert.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robert.exception.ResourceNotFoundException;
import com.robert.model.Pelicula;
import com.robert.repository.PeliculaRepository;

@Service
public class PeliculaServiceImpl implements PeliculaService {

	@Autowired
	private PeliculaRepository prepo;
	
	@Override
	public List<Pelicula> getAll() {
		return prepo.findAll();
	}

	@Override
	public Pelicula findByTitulo(String titulo) {
		return prepo.findById(titulo).orElseThrow(() -> new ResourceNotFoundException("Pelicula a buscar no existe"));
	}

	@Override
	public void createNewPeli(Pelicula pelicula) {
		if(prepo.findById(pelicula.getTitulo()).isPresent()) {
			throw new ResourceNotFoundException("Pelicula con ese titulo ya existente");
		}else {
			prepo.save(pelicula);
		}
	}

	@Override
	public void deleteByTitulo(String titulo) {
		if(prepo.findById(titulo).isPresent()) {
			prepo.delete(findByTitulo(titulo));
		}else {
			throw new ResourceNotFoundException("Pelicula a borrar inexistente");
		}
	}

	@Override
	public void updatePeli(Pelicula pelicula) {
		Optional<Pelicula> peliBD = prepo.findById(pelicula.getTitulo());

		if(peliBD.isPresent()) {
			Pelicula peliupdate = peliBD.get();
			peliupdate.setDirector(pelicula.getDirector());
			peliupdate.setFecha(pelicula.getFecha());
			prepo.save(peliupdate);
		}else {
			throw new ResourceNotFoundException("Pelicula a actualizar inexistente");
		}
	}

	@Override
	public List<Pelicula> pelisDirector(String director) {
		return prepo.findByDirector(director);
	}

}
