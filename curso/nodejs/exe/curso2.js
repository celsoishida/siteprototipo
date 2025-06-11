// Listar apenas o campo 'descricao'
fetch('http://localhost:5002/cursosufpr', {
    method: 'GET'
})
.then(response => response.json())
.then(data => {
    if (Array.isArray(data)) {
        console.log('Lista de descrições:');
        const descricoes = data.map(item => item.descricao);
        console.log(descricoes);
    } else {
        console.log(data.descricao);
    }
});

// outra versão:
async function getUsuarios() {
    const response = await fetch('http://localhost:5002/cursosufpr');
    const data = await response.json();
    if (Array.isArray(data)) {
        const descricoes = data.map(item => item.descricao);
        console.log('Lista de descrições:');
        console.log(descricoes);
    } else {
        console.log(data.descricao);
    }
}
getUsuarios();
