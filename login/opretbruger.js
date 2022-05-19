opretknap = document.getElementById("opretknap");


function gemData(){
  fornavn = document.getElementById("fornavn").value;
  efternavn = document.getElementById("efternavn").value;
  brugernavn = document.getElementById("brugernavn").value;
  kode = document.getElementById("kode").value;
  email = document.getElementById("email").value;

  sessionStorage.setItem('name', fornavn);
  sessionStorage.setItem('lastname', efternavn);
  sessionStorage.setItem('username', brugernavn);
  sessionStorage.setItem('password', kode);
  sessionStorage.setItem('email', email);

  console.log(sessionStorage.getItem('password'));
  console.log(sessionStorage.getItem('name'));
  console.log(sessionStorage.getItem('username'));
  console.log(sessionStorage.getItem('password'));
  console.log(sessionStorage.getItem('email'));

  document.getElementById('login-container').style.display = 'flex';
  document.getElementById('opret-bruger-container').style.display = 'none';
}

opretknap.addEventListener("click", gemData);
