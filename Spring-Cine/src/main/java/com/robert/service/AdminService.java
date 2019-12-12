package com.robert.service;


import java.util.List;

import com.robert.dto.AdminDTO;

public interface AdminService {

	public List<AdminDTO> getAllAdmins();
	public AdminDTO getAdmin(String usuario);
	public void addAdmin(AdminDTO admin);
	public void deleteAdmin(String usuario);
	
}
