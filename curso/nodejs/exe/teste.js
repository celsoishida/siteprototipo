const express = require('express');
const app = express();
const port = 3000;

// Rota básica
app.get('/', (req, res) => {
    res.json({ mensagem: "Olá, mundo! Bem-vindo à minha API básica em Node.js!" });
});

app.get('/segundo', (req, res) => {
    res.json({ nomevar: "Teste bem sucedido! Segundo",
                data: new Date().toISOString()
     });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
