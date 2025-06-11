let msg = '';
fetch('http://localhost:3000/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome: "Carlos" })
})
.then(response => {
    if (!response.ok) {
        throw new Error('Erro na requisição: ' + response.status);
    }
    return response.json();
})
.then(data => {
    console.log(data);
    if (data && data.mensagem) {
        msg = data.mensagem;
    }
})
.catch(error => {
    console.error('Erro:', error);
    msg = error.message;
});

// é impresso nulo: por causa do assíncrono
console.log('Mensagem:', msg);

