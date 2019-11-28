package com.robert.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.robert.model.Admin;

@Repository
public interface AdminRepository extends CrudRepository<Admin, String> {

	
	
}
