package com.robert.repository;

import java.util.List;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.robert.model.Pelicula;

@Repository
@ComponentScan("com.robert.*")
public interface PeliculaRepository extends JpaRepository<Pelicula, String> {
	
	@Query("SELECT p FROM Pelicula p WHERE LOWER(p.director) = LOWER(:nombre)")
    public List<Pelicula> findByDirector(@Param("nombre") String director);
}
