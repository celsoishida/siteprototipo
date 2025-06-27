CREATE TABLE Autores (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    nacionalidade VARCHAR(50),
    data_nascimento DATE,
    data_falecimento DATE
);

CREATE TABLE Livros (
    id INT PRIMARY KEY,
    titulo VARCHAR(200),
    ano_publicacao INT,
    autor_id INT,
    FOREIGN KEY (autor_id) REFERENCES Autores(id)
);

CREATE TABLE Cliente (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL
);


SELECT Autores.nome, Livros.titulo
FROM Autores
JOIN Livros ON Autores.id = Livros.autor_id;

SELECT nome FROM Cliente
UNION ALL
SELECT nome FROM autores;
