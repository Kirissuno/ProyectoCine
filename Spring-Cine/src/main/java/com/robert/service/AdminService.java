package com.robert.service;

import org.springframework.stereotype.Service;

import com.robert.model.Admin;

@Service
public interface AdminService {

	public Admin getAdmin(String usuario);
	
}
