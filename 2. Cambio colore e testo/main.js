
const paragrafo = document.querySelector('.classe-base');
const bottone = document.getElementById('bottone');

bottone.addEventListener('click', () => {
  paragrafo.classList.toggle('classe-base')
  paragrafo.classList.toggle('classe-attiva');
  paragrafo.textContent = "Ho schiacciato il bottone"
});