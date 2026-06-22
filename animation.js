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

// Lista de surpresas românticas para o botão "Surpresa!"
const surpresas = [
  'Você é incrível, Ana! 💜',
  'Te amo muito! 💗',
  'Você ilumina meu dia! ✨',
  'Meu coração é seu! 💖',
  'Feliz por ter você! 🌸'
];

// O que acontece quando clica no botão surpresa
document.querySelector('.btn-secondary').addEventListener('click', () => {
  alert(surpresas[Math.floor(Math.random() * surpresas.length)]);
});

// O que acontece ao digitar na pesquisa e dar Enter
document.querySelector('input').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    alert(`Pesquisando "${e.target.value}" com muito amor! 💜`);
  }
});