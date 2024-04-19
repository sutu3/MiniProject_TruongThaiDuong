package com.example.Controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Entity.Department;
import com.example.Entity.Employee;
import com.example.Entity.EmployeeDTO;
import com.example.Form.EmployeeForm;
import com.example.Service.IDepartmentService;
import com.example.Service.IEmployeeService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RequestMapping("/api/employee")
@RestController
public class EmployeeControl {
	@Autowired
	private IEmployeeService Service;
	
	@Autowired
	private ModelMapper modelMapper;


	@GetMapping(value = "/{id}")
	public EmployeeDTO getEmployeebyID(@PathVariable(name = "id") int id) {
		Employee employee = Service.getEmployeeByID(id);

		EmployeeDTO dto = modelMapper.map(employee, EmployeeDTO.class);
		return dto;
	}

	@GetMapping
	public List<EmployeeDTO> getAllEmployee() {
		List<Employee> list = Service.getAllEmployees();
		List<EmployeeDTO> dtos = modelMapper.map(list, new TypeToken<List<EmployeeDTO>>() {
		}.getType());
		return dtos;
	}

	@PostMapping("/create")
	public void createEmployee(@RequestBody EmployeeForm form) {
		Service.createEmployee(form);
	}

	@PutMapping(value = "/update/{id}")
	public void updateEmployeeById(@PathVariable(name = "id") int id, @RequestBody EmployeeForm form) {
		form.setId(id);
		Service.updateEmployeeByID(form);
	}

	@DeleteMapping(value = "/delete/{id}")
	public void deleteEmployeeById(@PathVariable(name = "id") int id) {

		Service.deleteEmployeeByID(id);
	}
}
