localStorage.setItem('name', 'admin');
localStorage.setItem('lastname', 'admin');
localStorage.setItem('username', 'admin');
localStorage.setItem('password', 'admin');
localStorage.setItem('email', 'admin');

opretbruger = document.getElementById('opretbruger-knap');

const data[0] = []; //brugere
const data[1] = []; //tjenester
const data[2] = []; // pris
const data[3] = []; //forfalden dato
const data[4] = ['licens', 'abonnement', 'prøveperiode']; // type

function display1(){
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('opret-bruger-container').style.display = 'flex';
}

opretbruger.addEventListener('click', display1);
