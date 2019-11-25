package com.robert.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robert.exception.ResourceNotFoundException;
import com.robert.model.Admin;
import com.robert.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminRepository arepo;
	
	@Override
	public Admin getAdmin(String usuario) {
		return arepo.findById(usuario).orElseThrow(() -> new ResourceNotFoundException("Admin inexistente"));
	}

}
