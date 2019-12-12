package com.robert.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robert.dto.AdminDTO;
import com.robert.exception.ResourceNotFoundException;
import com.robert.model.Admin;
import com.robert.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminRepository arepo;
	
	@Override
	public List<AdminDTO> getAllAdmins(){
		List<Admin> adminsBD = arepo.findAll();
		List<AdminDTO> adminsASacar = new ArrayList<AdminDTO>();
		for(Admin admin : adminsBD) {
			adminsASacar.add(new AdminDTO(admin.getUsuario(), admin.getContrasena()));
		}
		return adminsASacar;
	}
	
	@Override
	public AdminDTO getAdmin(String usuario) {
		Optional<Admin> adminBD = arepo.findById(usuario);
		AdminDTO adminASacar = new AdminDTO();
		if(adminBD.isPresent()) {
			adminASacar.setUsuario(adminBD.get().getUsuario());
			adminASacar.setContrasena(adminBD.get().getContrasena());
		}
		return adminASacar;
	}

	@Override
	public void addAdmin(AdminDTO admin) {
		Admin adminACrear = new Admin(admin.getUsuario(), admin.getContrasena());
		arepo.save(adminACrear);
	}

	@Override
	public void deleteAdmin(String usuario) {
		Optional<Admin> adminBD = arepo.findById(usuario);
		if(adminBD.isPresent()) {
			Admin adminABorrar = adminBD.get();
			arepo.delete(adminABorrar);		
		}else {
			throw new ResourceNotFoundException("Admin a borrar inexistente");
		}
	}

}
