-- Informações e dicionário de dados para a tabela Movimentacao (Novo CAGED)
--
-- graudeinstrucao:
-- 1 = Analfabeto
-- 2 = Fundamental incompleto
-- 3 = Fundamental completo
-- 4 = Médio incompleto
-- 5 = Médio em andamento
-- 6 = Médio completo
-- 7 = Superior incompleto
-- 8 = Superior completo
-- 9 = Especialização
-- 10 = Mestrado
-- 11 = Doutorado
--
-- tipomovimentacao:
-- 1 = Admissão
-- 2 = Desligamento
--
-- sexo:
-- 1 = Masculino
-- 2 = Feminino
--
-- Exemplos de códigos CBO para programador: 317105, 317110, 317120

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
    horascontratuais DECIMAL(5,2),
    racacor INT,
    sexo INT,
    tipoempregador INT,
    tipoestabelecimento INT,
    tipomovimentacao INT,
    tipodedeficiencia INT,
    indtrabintermitente INT,
    indtrabparcial INT,
    salario DECIMAL(10,2),
    tamestabjan INT,
    indicadoraprendiz INT,
    origemdainformacao INT,
    competenciadec INT,
    indicadordeforadoprazo INT,
    unidadesalariocodigo INT,
    valorsalariofixo DECIMAL(10,2)
);

-- Exemplos de registros (Novo CAGED fictícios)
INSERT INTO Movimentacao VALUES
(202401, 1, 41, 4106902, 'A', 1234, 1, 317105, 1, 6, 22, 44.00, 1, 1, 1, 1, 1, 0, 0, 0, 3500.00, 10, 0, 1, 202401, 0, 1, 3500.00),
(202401, 1, 41, 4106902, 'A', 1234, 1, 317110, 1, 8, 28, 44.00, 2, 2, 1, 1, 1, 0, 0, 0, 4200.00, 12, 0, 1, 202401, 0, 1, 4200.00),
(202401, 1, 41, 4106902, 'A', 1234, -1, 317120, 1, 10, 35, 44.00, 1, 1, 1, 1, 2, 0, 0, 0, 5000.00, 15, 0, 1, 202401, 0, 1, 5000.00),
(202401, 1, 41, 4106902, 'A', 1234, 1, 212415, 1, 11, 42, 44.00, 2, 2, 1, 1, 1, 0, 0, 0, 8000.00, 20, 0, 1, 202401, 0, 1, 8000.00),
(202401, 1, 41, 4106902, 'A', 1234, 1, 252105, 1, 6, 51, 44.00, 1, 1, 1, 1, 1, 0, 0, 0, 2500.00, 8, 0, 1, 202401, 0, 1, 2500.00);

-- Observação: adapte os códigos e valores conforme o dicionário de dados oficial do Novo CAGED.
