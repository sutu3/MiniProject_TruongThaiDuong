package com.example.Form;


import java.util.List;

import com.example.Entity.Employee;
import com.example.Entity.EmployeeDTO;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class DepartmentForm {
	private String name;
	private int id;
	private List<EmployeeDTO> employees;


}
