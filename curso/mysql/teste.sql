SELECT AVG(salario) AS media_salarial
FROM MovCuritiba
WHERE tipomovimentacao = 1
  AND cbo2002ocupacao IN (CBO1, CBO2, CBO3);