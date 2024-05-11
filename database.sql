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
    DepartmentID int,
    foreign key (DepartmentID) references Department(DepartmentID)
);

drop table if exists Relatives;
create table Relatives(
	RelativesID int auto_increment primary key,
    RelativesName nvarchar(50),
    RelativesAge smallint,
    EmployeeID int,
	foreign key (EmployeeID) references Employee(EmployeeID)

);

insert into department(DepartmentName)
values("Duong");

insert into Employee(EmployeeName,DepartmentID)
values("Thai",1);

insert into Employee(EmployeeName,DepartmentID)
values("Truong",1);
insert into Relatives(RelativesName,RelativesAge,EmployeeID)
value("Nguyễn Văn B",18,79)