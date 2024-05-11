drop database if exists shop;
create database shop;

use shop;

create table Clothes(
	ClothesID int auto_increment primary key,
    ClothesName nvarchar(255),
    ClothesQuantity smallint
);
create table TypeOfClothes(
	TypeOfClothes int auto_increment primary key,
    TypeName nvarchar(255),
    ClothesID int,
    foreign key (ClothesID) references Clothes(ClothesID)
);
create table Relatives(
	RelativesID int auto_increment primary key,
    RelativesName nvarchar(50),
    RelativesAge smallint
);