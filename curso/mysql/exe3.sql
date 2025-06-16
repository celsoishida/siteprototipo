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

SELECT AVG(salario) AS media_salarial_programadores
FROM MovCuritiba
WHERE cbo2002ocupacao in (317105, 317110, 317120);