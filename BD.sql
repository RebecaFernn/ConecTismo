CREATE DATABASE conectismo;
-- drop database conectismo;
USE conectismo;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	tipo varchar(20)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(450),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE avaliacao (
	id int AUTO_INCREMENT,
	valor varchar(20),
	fk_usuario int,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
	PRIMARY KEY (id, fk_usuario)
);

 select * from usuario;

