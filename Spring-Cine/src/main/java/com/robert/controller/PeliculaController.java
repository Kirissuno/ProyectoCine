package com.robert.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.robert.model.Admin;
import com.robert.model.Pelicula;
import com.robert.service.AdminService;
import com.robert.service.PeliculaService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/")
public class PeliculaController {
	@Autowired
	private PeliculaService pservice;
	@Autowired
	private AdminService aservice;
	
	@GetMapping("/filmografia")
	public List<Pelicula> getAll(){
		return pservice.getAll();
	}
	
	@GetMapping("/filmografias/{director}")
	public List<Pelicula> getPelisDirector(@PathVariable String director){
		return pservice.pelisDirector(director);
	}
	
	@GetMapping("/filmografia/{titulo}")
	public Pelicula getPeliByTitulo(@PathVariable String titulo) {
		return pservice.findByTitulo(titulo);
	}
	
	@PostMapping("/filmografia")
	public void nuevaPeli(@RequestBody Pelicula pelicula) {
		pservice.createNewPeli(pelicula);
	}
	
	@DeleteMapping("/filmografia/{titulo}")
	public void deletePeli(@PathVariable String titulo) {
		pservice.deleteByTitulo(titulo);
	}
	
	@PutMapping("/filmografia/{titulo}")
	public void updatePeli(@RequestBody Pelicula pelicula, @PathVariable String titulo) {
		pservice.updatePeli(pelicula);
	}
	
	@GetMapping("/filmografia/admin/{usuario}")
	public Admin getAdmin(@PathVariable String usuario) {
		return aservice.getAdmin(usuario);
	}
	
}
