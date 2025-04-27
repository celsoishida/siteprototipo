// Carregar o cabeçalho dinamicamente
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;

        // Destacar o item do menu correspondente à página atual
        const currentPage = window.location.pathname.split('/').pop().split('.').shift();
        const activeLink = document.querySelector(`nav a[data-page="${currentPage}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    })
    .catch(error => console.error('Erro ao carregar o cabeçalho:', error));
