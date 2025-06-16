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