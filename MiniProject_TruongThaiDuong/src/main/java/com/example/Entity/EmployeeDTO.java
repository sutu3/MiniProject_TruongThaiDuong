package com.example.Entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
@Data
@NoArgsConstructor
public class EmployeeDTO {
	@NonNull
	private Integer employeeID;
	@NonNull
	private String employeeName;
	@NonNull
	private Integer departmentID;
}
