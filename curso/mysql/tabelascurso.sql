use caged;
CREATE TABLE Regiao (
    Id      INT PRIMARY KEY,
    Descricao   VARCHAR(50) NOT NULL
);

INSERT INTO Regiao (Id, Descricao)
VALUES 
    (1, 'Norte'),
    (2, 'Nordeste'),
    (3, 'Sudeste'),
    (4, 'Sul'),
    (5, 'Centro-Oeste'),
    (9, 'Não identificado');

CREATE TABLE Estado (
    Id      INT PRIMARY KEY,
    Descricao   VARCHAR(50) NOT NULL
);
INSERT INTO Estado (Id, Descricao)
VALUES 
    (11, 'Rondônia'),
    (12, 'Acre'),
    (13, 'Amazonas'),
    (14, 'Roraima'),
    (15, 'Pará'),
    (16, 'Amapá'),
    (17, 'Tocantins'),
    (21, 'Maranhão'),
    (22, 'Piauí'),
    (23, 'Ceará'),
    (24, 'Rio Grande do Norte'),
    (25, 'Paraíba'),
    (26, 'Pernambuco'),
    (27, 'Alagoas'),
    (28, 'Sergipe'),
    (29, 'Bahia'),
    (31, 'Minas Gerais'),
    (32, 'Espírito Santo'),
    (33, 'Rio de Janeiro'),
    (35, 'São Paulo'),
    (41, 'Paraná'),
    (42, 'Santa Catarina'),
    (43, 'Rio Grande do Sul'),
    (50, 'Mato Grosso do Sul'),
    (51, 'Mato Grosso'),
    (52, 'Goiás'),
    (53, 'Distrito Federal'),
    (99, 'Não identificado');

CREATE TABLE Racacor (
    Id      INT PRIMARY KEY,
    Descricao   VARCHAR(50) NOT NULL
);

INSERT INTO Racacor (Id, Descricao)
VALUES 
    (1, 'Branca'),
    (2, 'Preta'),
    (3, 'Parda'),
    (4, 'Amarela'),
    (5, 'Indígena'),
    (6, 'Não informada'),
    (9, 'Não Identificado');

CREATE TABLE Sexo (
    Id      INT PRIMARY KEY,
    Descricao   VARCHAR(50) NOT NULL
);

INSERT INTO Sexo (Id, Descricao)
VALUES 
    (1, 'Homem'),
    (3, 'Mulher'),
    (9, 'Não Identificado');
CREATE TABLE TipoMovimentacao (
    Id      INT PRIMARY KEY,
    Descricao   VARCHAR(100) NOT NULL
);

INSERT INTO TipoMovimentacao (Id, Descricao)
VALUES 
    (10, 'Admissão por primeiro emprego'),
    (20, 'Admissão por reemprego'),
    (25, 'Admissão por contrato trabalho prazo determinado'),
    (31, 'Desligamento por demissão sem justa causa'),
    (32, 'Desligamento por demissão com justa causa'),
    (33, 'Culpa Recíproca'),
    (35, 'Admissão por reintegração'),
    (40, 'Desligamento a pedido'),
    (43, 'Término contrato trabalho prazo determinado'),
    (45, 'Desligamento por Término de contrato'),
    (50, 'Desligamento por aposentadoria'),
    (60, 'Desligamento por morte'),
    (70, 'Admissão por transferência'),
    (80, 'Desligamento por transferência'),
    (90, 'Desligamento por Acordo entre empregado e empregador'),
    (97, 'Admissão de Tipo Ignorado'),
    (98, 'Desligamento de Tipo Ignorado'),
    (99, 'Não Identificado');


create database cursomysql;
use cursomysql;
CREATE TABLE autores (
    id        INT AUTO_INCREMENT PRIMARY KEY,
    nome            VARCHAR(100) NOT NULL,
    nacionalidade   VARCHAR(50) DEFAULT 'Desconhecida',
    data_nascimento DATE null
);
INSERT INTO autores (nome, nacionalidade, data_nascimento)
VALUES 
  ('Machado de Assis', 'Brasileira', '1839-06-21'),
  ('José Saramago', 'Portuguesa', '1922-11-16'),
  ('Isabel Allende', 'Chilena', '1942-08-02'),
  ('Clarice Lispector', 'Brasileira', '1920-12-10');

INSERT INTO autores (nome, nacionalidade, data_nascimento) VALUES
('Agostinho de Hipona', 'Argelino (Império Romano)', '0354-11-13'),
('Tomás de Aquino', 'Italiana', '1225-01-28'),
('Martinho Lutero', 'Alemã', '1483-11-10'),
('João Calvino', 'Francesa', '1509-07-10'),
('John Bunyan', 'Britânica', '1628-11-30'),
('Blaise Pascal', 'Francesa', '1623-06-19'),
('C. S. Lewis', 'Britânica', '1898-11-29'),
('Dietrich Bonhoeffer', 'Alemã', '1906-02-04'),
('Oswald Chambers', 'Britânica', '1874-07-24'),
('Watchman Nee', 'Chinesa', '1903-11-04');

CREATE TABLE livros (
    id        INT AUTO_INCREMENT PRIMARY KEY,
    titulo          VARCHAR(255) NOT NULL,
    ano_publicacao  INT,
    isbn            VARCHAR(13) UNIQUE, -- ISBN deve ser único
    autor_id        INT, -- Chave estrangeira para a tabela autores
    FOREIGN KEY (autor_id) REFERENCES autores(id)
);
INSERT INTO livros (titulo, ano_publicacao, isbn, autor_id)
VALUES 
  ('Dom Casmurro', 1899, '9788563560241', 1),
  ('Memorial do Convento', 1982, '9788535914849', 2),
  ('A Casa dos Espíritos', 1982, '9788532528773', 3),
  ('A Hora da Estrela', 1977, '9788535922103', 4),
  ('Quincas Borba', 1891, '9788577992742', 1);
  
CREATE TABLE Cliente ( id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(100) NOT NULL, email varchar(200) not null );
INSERT INTO Cliente (nome, email) VALUES 
('Ana Souza', 'ana.souza@email.com'),
('Carlos Lima', 'carlos.lima@email.com'),
('Fernanda Oliveira', 'fernanda.oliveira@email.com');
INSERT INTO Client (nome, email) VALUES
('José Saramago', 'jose.saramago@email.com'),
('C. S. Lewis', 'cs.lewis@email.com'),
('Blaise Pascal', 'blaise.pascal@email.com'),
('Isabel Allende', 'isabel.allende@email.com');

