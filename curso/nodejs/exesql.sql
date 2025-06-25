
select Campus, Nome
from Curso 
where Id < 10
order by Campus;


INSERT INTO Usuario (Nome, Email, CPF, DDD, Telefone, DataNiver, Obs)
VALUES ('Ana Silva', 'ana.silva@example.com', '12345678901', 11, 987654321, '1990-05-12', null);
;

UPDATE Usuario
SET Telefone = 912345678, Obs = 'Telefone atualizado em 2025'
WHERE Id = 4;

DELETE FROM Usuario
WHERE Id = 5;
