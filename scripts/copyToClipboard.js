// Função utilitária para copiar o texto após 'Descrição:' de um item de lista
function copyToClipboard(btn) {
  const li = btn.closest('li');
  if (!li) return;
  const match = li.textContent.match(/descrição:\s*(.*)/i);
  const textToCopy = match ? match[1].replace('Copiar', '').trim() : '';
  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      btn.textContent = 'Copiado!';
      setTimeout(() => btn.textContent = 'Copiar', 1500);
    });
  }
}
