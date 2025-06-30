/*
saldomovimentacao  = 1 (admissão) ou -1 (demissão)
*/
CREATE TABLE Movimentacao (
    competenciamov INT,
    regiao INT,
    uf INT,
    municipio INT,
    secao VARCHAR(10),
    subclasse INT,
    saldomovimentacao INT,
    cbo2002ocupacao INT,
    categoria INT,
    graudeinstrucao INT,
    idade INT null,
    horascontratuais DECIMAL(5,2), -- Usar DECIMAL para 44,00
    racacor INT,
    sexo INT,
    tipoempregador INT,
    tipoestabelecimento INT,
    tipomovimentacao INT,
    tipodedeficiencia INT,
    indtrabintermitente INT,
    indtrabparcial INT,
    salario DECIMAL(10,2), -- Usar DECIMAL para 1500,00
    tamestabjan INT,
    indicadoraprendiz INT,
    origemdainformacao INT,
    competenciadec INT,
    indicadordeforadoprazo INT,
    unidadesalariocodigo INT,
    valorsalariofixo DECIMAL(10,2) -- Usar DECIMAL para 1500,00
);

SELECT municipio AS cidade, secao, subclasse, idade, salario
FROM Movimentacao
WHERE uf = 41 -- 41 é o código do Paraná
    AND saldomovimentacao > 0 -- contratados
    AND salario > 100000
ORDER BY idade, municipio; 


SELECT COUNT(*) AS cientistas_dados_admitidos
FROM Movimentacao
WHERE municipio = 410690
    AND cbo2002ocupacao = 211220
    AND saldomovimentacao > 0;


SELECT AVG(salario) AS media_salarial_programadores
FROM MovCuritiba
WHERE cbo2002ocupacao in (317105, 317110, 317120);

SELECT COUNT(*) AS total_admissoes
FROM Movimentacao
WHERE saldomovimentacao = 1;


SELECT sexo,
       COUNT(*) AS qtde,
       AVG(salario) AS media_salario,
       max(salario) AS máximo
FROM Movimentacao
GROUP BY sexo;

-- Exemplos de inserção na tabela Movimentacao
INSERT INTO Movimentacao (
    competenciamov, regiao, uf, municipio, secao, subclasse, saldomovimentacao,
    cbo2002ocupacao, categoria, graudeinstrucao, idade, horascontratuais, racacor,
    sexo, tipoempregador, tipoestabelecimento, tipomovimentacao, tipodedeficiencia,
    indtrabintermitente, indtrabparcial, salario, tamestabjan, indicadoraprendiz,
    origemdainformacao, competenciadec, indicadordeforadoprazo, unidadesalariocodigo,
    valorsalariofixo
) VALUES
(202401, 1, 41, 410690, 'A', 1234, 1, 211220, 1, 6, 30, 44.00, 1, 1, 1, 1, 1, 0, 0, 0, 12000.00, 10, 0, 1, 202401, 0, 1, 12000.00),
(202401, 1, 41, 410690, 'B', 5678, 1, 317105, 2, 7, 25, 40.00, 2, 2, 2, 2, 2, 0, 0, 0, 8000.00, 20, 1, 2, 202401, 0, 2, 8000.00),
(202401, 1, 41, 410690, 'C', 9101, -1, 317110, 1, 8, 40, 44.00, 1, 1, 1, 1, 1, 0, 0, 0, 9500.00, 15, 0, 1, 202401, 0, 1, 9500.00),
(202401, 1, 41, 410690, 'D', 1121, 1, 317120, 2, 9, 35, 36.00, 2, 2, 2, 2, 2, 0, 0, 0, 7000.00, 12, 1, 2, 202401, 0, 2, 7000.00);

