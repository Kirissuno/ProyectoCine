package com.robert.repository;

import java.util.List;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.robert.model.Pelicula;

@Repository
@ComponentScan("com.robert.*")
public interface PeliculaRepository extends JpaRepository<Pelicula, String> {
	
    public List<Pelicula> findByDirector(String director);
	
}
