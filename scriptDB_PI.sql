CREATE DATABASE	dbPosteEletronico;
use dbPosteEletronico;

CREATE TABLE prestador (
	id_prestador int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(255) NOT NULL,
    sobrenome varchar(255) NOT NULL,
    celular varchar(11) NOT NULL,
    email varchar(255) NOT NULL UNIQUE,
    senha varchar(255) NOT NULL
);

CREATE TABLE contratante (
	id_contratante int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(255) NOT NULL,
    sobrenome varchar(255) NOT NULL,
    celular varchar(11) NOT NULL,
    email varchar(255) NOT NULL UNIQUE,
    senha varchar(255) NOT NULL
);

CREATE TABLE servico (
	id_servico int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_servico varchar(255) NOT NULL,
    descricao_servico varchar(255) DEFAULT '',
    id_prestador int NOT NULL,
    FOREIGN  KEY (id_prestador) REFERENCES prestador(id_prestador)
);

CREATE TABLE contrataServico (
	id_prestacao int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dt_inicio date NOT NULL,
    dt_prev_fim date NOT NULL,
    dt_fim date,
    id_contratante int NOT NULL,
    id_servico int NOT NULL,
    FOREIGN  KEY (id_contratante) REFERENCES contratante(id_contratante),
    FOREIGN  KEY (id_servico) REFERENCES servico(id_servico)
);

insert into prestador (nome, sobrenome, celular, email, senha)
values ("Lucas", "Silva", "119", "lucassilva@email.com", "123456");

DROP TABLE prestador, contratante, servico, contrataServico;

delete from prestador where id_prestador = 10;
	
select * from servico where id_prestador = 1;
select * from servico;

select * from prestador where email = "joãopedros@email.com" and senha = "123456"