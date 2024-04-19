package com.example.Controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Entity.Department;
import com.example.Entity.DepartmentDTO;
import com.example.Form.DepartmentForm;
import com.example.Service.IDepartmentService;

@RestController
@RequestMapping("/api/department")
public class DepartmentController {
	@Autowired
	private IDepartmentService service;
	
	@Autowired
	private ModelMapper modelMapper;
	@GetMapping
	public List<DepartmentDTO> getAllDepartment() {
		List<Department> list= service.getAllDepartments();
		List<DepartmentDTO> dtos= modelMapper.map(list, new TypeToken<List<DepartmentDTO>>(){}.getType());
		return dtos;
	}
	@GetMapping(value = "/{id}")
	public DepartmentDTO getDepartmentbyID(@PathVariable(name = "id") int id) {
		Department department = service.getDepartmentByID(id);

		DepartmentDTO dto = modelMapper.map(department, DepartmentDTO.class);
		return dto;
	}
	@PostMapping("/create")
	public void createEmployee(@RequestBody DepartmentForm form) {
		service.createDepartment(form);
	}

	@PutMapping(value = "/update/{id}")
	public void updateDepartmentById(@PathVariable(name = "id") int id, @RequestBody DepartmentForm form) {
		form.setId(id);
		service.updateDepartmentByID(form);
	}

	@DeleteMapping(value = "/delete/{id}")
	public void deleteDepartmentById(@PathVariable(name = "id") int id) {

		service.deleteDepartmentByID(id);
	}
}
