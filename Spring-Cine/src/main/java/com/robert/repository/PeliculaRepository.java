package com.robert.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robert.model.Pelicula;

public interface PeliculaRepository extends JpaRepository<Pelicula, String> {
	
    public List<Pelicula> findByDirector(String director);
	
}
