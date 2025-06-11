fetch('http://localhost:3000/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome: "Carlos" })
})
.then(response => response.json())
.then(data => console.log(data));

// outra versão:
async function postUsuario() {
    const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: "Carlos" })
    });
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        console.log(data);
    } else {
        const text = await response.text();
        console.error('Resposta não é JSON:', text);
    }
}
postUsuario();
