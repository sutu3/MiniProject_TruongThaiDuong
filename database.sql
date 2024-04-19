drop database if exists Company;
create database Company;
Use Company;
drop table if exists Department;
create table Department(
	DepartmentID int auto_increment primary key,
    DepartmentName nvarchar(30)
);
drop table if exists Employee;
create table Employee(
	EmployeeID int auto_increment primary key,
    EmployeeName nvarchar(50),
   DepartmentID int
);

insert into department(DepartmentName)
values("Duong");
   -- foreign key (DepartmentID) references department(DepartmentID)

insert into Employee(EmployeeName,DepartmentID)
values("Thai",1);

insert into Employee(EmployeeName,DepartmentID)
values("Truong",1);