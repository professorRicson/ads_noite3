CREATE DATABASE formulario;

CREATE TABLE mensagens (
    id INTEGER PRIMARY KEY auto_increment,
    nome varchar(150) NOT NULL,
    telefone varchar(12),
    email varchar(150)
    endereco varchar(150),
    mensagem text
);
