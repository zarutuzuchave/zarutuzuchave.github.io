// Captura o local do fundo onde os corações vão surgir
const heartBg = document.getElementById('heartBg');
const symbols = ['💜','💗','💕','💖','💓','🌸','✨','💝'];

// Loop para gerar 28 corações em posições e tamanhos aleatórios
for (let i = 0; i < 28; i++) {
  const span = document.createElement('span');
  span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  span.style.left = `${Math.random() * 100}%`;
  span.style.fontSize = `${0.9 + Math.random() * 1.4}rem`;
  span.style.animationDuration = `${7 + Math.random() * 10}s`;
  span.style.animationDelay = `${Math.random() * 12}s`;
  heartBg.appendChild(span);
}

// Função que é chamada quando clica no botão ou na lupa
function realizarPesquisa() {
    // Pega o valor exato que o usuário digitou na sua div
    const termo = document.getElementById('campo-pesquisa').value;
    
    // Confere se o usuário não deixou em branco
    if (termo.trim() !== '') {
        // Cria o link de pesquisa do Google
        const urlGoogle = 'https://www.google.com/search?q=' + encodeURIComponent(termo);
        // Muda a página para o Google
        window.location.href = urlGoogle;
    }
}

// Configuração extra: permite que a pesquisa aconteça ao apertar a tecla "Enter"
document.getElementById('campo-pesquisa').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        realizarPesquisa();
    }
});