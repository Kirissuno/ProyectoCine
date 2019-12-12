package com.robert.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robert.dto.PeliculaDTO;
import com.robert.exception.ResourceNotFoundException;
import com.robert.model.Pelicula;
import com.robert.repository.PeliculaRepository;

@Service
public class PeliculaServiceImpl implements PeliculaService {

	@Autowired
	private PeliculaRepository prepo;
	
	@Override
	public List<PeliculaDTO> getAll() {
		List<Pelicula> pelisBD = prepo.findAll();
		List<PeliculaDTO> pelisDTO = new ArrayList<PeliculaDTO>();
		for(Pelicula peli : pelisBD) {
			pelisDTO.add(new PeliculaDTO(peli.getDirector(), peli.getTitulo(), peli.getFecha()));
		}
		return pelisDTO;
	}

	@Override
	public PeliculaDTO findByTitulo(String titulo) {
		Pelicula peliBD = prepo.findById(titulo).orElseThrow(() -> new ResourceNotFoundException("Pelicula a buscar no existe"));
		return new PeliculaDTO(peliBD.getDirector(), peliBD.getTitulo(), peliBD.getFecha());
	}

	@Override
	public void createNewPeli(PeliculaDTO pelicula) {
		Pelicula peliACrear = new Pelicula(pelicula.getDirector(), pelicula.getTitulo(), pelicula.getFecha());		
		if(prepo.findById(peliACrear.getTitulo()).isPresent()) {
			throw new ResourceNotFoundException("Pelicula con ese titulo ya existente");
		}else {
			prepo.save(peliACrear);
		}
	}

	@Override
	public void deleteByTitulo(String titulo) {
		Optional<Pelicula> peliBD = prepo.findById(titulo);
		if(peliBD.isPresent()) {
			Pelicula peliABorrar = peliBD.get();
			prepo.delete(peliABorrar);
		}else {
			throw new ResourceNotFoundException("Pelicula a borrar inexistente");
		}
	}

	@Override
	public void updatePeli(PeliculaDTO pelicula, String titulo) {		
		if(prepo.findById(titulo).isPresent()) {
			Pelicula peliupdate = prepo.findById(titulo).get();
			peliupdate.setDirector(pelicula.getDirector());
			peliupdate.setFecha(pelicula.getFecha());
			prepo.save(peliupdate);
		}else {
			throw new ResourceNotFoundException("Pelicula a actualizar inexistente");
		}
	}

	@Override
	public List<PeliculaDTO> pelisDirector(String director) {
		List<Pelicula> pelisBD = prepo.findByDirector(director);
		List<PeliculaDTO> pelisADevolver = new ArrayList<PeliculaDTO>();
		for(Pelicula peli : pelisBD) {
			pelisADevolver.add(new PeliculaDTO(peli.getDirector(), peli.getTitulo(), peli.getFecha()));
		}
		return pelisADevolver;
	}

}
