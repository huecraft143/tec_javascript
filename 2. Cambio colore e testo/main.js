
const paragrafo = document.querySelector('.paragrafo');
const bottone = document.getElementById('bottone');

bottone.addEventListener('click', () => {
  paragrafo.classList.toggle('classe-attiva');
  paragrafo.textContent = "Ho schiacciato il bottone"
});