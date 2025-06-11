const express = require('express');
const app = express();
const port = 3000;

// Middleware para tratamento de erros e logs
app.use(express.json());
app.use((req, res, next) => {
    console.log(`Requisição recebida em: ${req.url}`);
    next();
});

// Middleware para tratamento de erros e logs
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
});


// Rota básica
app.get('/', (req, res) => {
    res.json({ mensagem: "Olá, mundo! Bem-vindo à minha API básica em Node.js!" });
});

app.get('/segundo', (req, res) => {
    res.json({ nomevar: "Teste bem sucedido! Segundo",
                data: new Date().toISOString()
     });
});

app.post('/usuarios', (req, res) => {
    const { nome } = req.body;
    if (!nome) {
        return res.status(400).json({ error: 'Nome é obrigatório' });
    }
    // assume que será inserido no banco de dados

    res.status(201).json({ mensagem: `Usuário ${nome} criado com sucesso!` });
});


// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
