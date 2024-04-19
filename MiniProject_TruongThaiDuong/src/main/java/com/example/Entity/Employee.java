package com.example.Entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Entity
@Table(name="Employee")
@Data
@NoArgsConstructor
public class Employee implements Serializable {

	private static final long serialVersionUID=1l;
	
	@Column(name="EmployeeID")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="EmployeeName",length = 50,updatable = true)
	private String employeeName;
	
	@ManyToOne
	@JoinColumn(name="DepartmentID")
	private Department department;





	
}
