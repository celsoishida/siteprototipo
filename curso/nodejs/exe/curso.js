fetch('http://localhost:5002/cursosufpr', {
    method: 'GET' })
.then(response => response.json())
.then(data => console.log(data));

// outra versão:
async function getUsuarios() {
    const response = await fetch('http://localhost:5002/cursosufpr');
    const contentType = response.headers.get('content-type');
    const data = await response.json();
    console.log(data);
}
getUsuarios();
