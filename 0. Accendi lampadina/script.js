let lampadinaAccesa = false;

function accendiLampadina() {
    const lampadina = document.getElementById('lampadina');
    const bottone = document.getElementById('bottone');
    if (lampadinaAccesa){
    lampadina.src = "spenta.jpg";
    bottone.textContent = 'Accendi lampadina';
    lampadinaAccesa = false
    }
    else{
      lampadina.src = "accesa.png"
      bottone.textContent = 'Spegni lampadina';
      lampadinaAccesa = true;
    }
  }