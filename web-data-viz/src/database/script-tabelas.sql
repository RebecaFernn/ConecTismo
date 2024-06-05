CREATE DATABASE conectismo;

USE conectismo;

CREATE TABLE Tipo (
	id INT PRIMARY KEY AUTO_INCREMENT,
	tipo CHAR(14)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_Tipo INT,
	FOREIGN KEY (fk_Tipo) REFERENCES Tipo(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fk_Tipo INT,
	FOREIGN KEY (fk_Tipo) REFERENCES Tipo(id)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);

insert into Tipo (tipo) values ("Neurotípico");
insert into Tipo (tipo) values ("Parente");
insert into Tipo (tipo) values ("Amigo");
insert into Tipo (tipo) values ("Interessado");

select * from Tipo;
