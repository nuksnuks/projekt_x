sessionStorage.setItem('name', 'admin');
sessionStorage.setItem('lastname', 'admin');
sessionStorage.setItem('username', 'admin');
sessionStorage.setItem('password', 'admin');
sessionStorage.setItem('email', 'admin');

opretbruger = document.getElementById('opretbruger-knap');

function display1(){
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('opret-bruger-container').style.display = 'flex';
}

opretbruger.addEventListener('click', display1);
