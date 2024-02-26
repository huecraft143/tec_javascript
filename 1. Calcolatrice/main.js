function sommaValore() {
    // Ottenere il riferimento all'elemento di input
    var primoNumero = document.getElementById('primo_numero');
    var secondoNumero = document.getElementById('secondo_numero');
  
    // Ottenere il valore dalla casella di testo
    var primo = parseFloat(primoNumero.value);
    var secondo = parseFloat(secondoNumero.value);
    var somma = primo + secondo;
  
    document.getElementById('somma').value = somma;
  }