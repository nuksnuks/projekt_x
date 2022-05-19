opretknap = document.getElementById("opretknap");


function gemData(){
  fornavn = document.getElementById("fornavn").value;
  efternavn = document.getElementById("efternavn").value;
  brugernavn = document.getElementById("brugernavn").value;
  kode = document.getElementById("kode").value;
  email = document.getElementById("email").value;

  sessionStorage.setItem('name', fornavn);
  console.log(sessionStorage.getItem('name'));

  sessionStorage.setItem('lastname', efternavn);
  console.log(sessionStorage.getItem('password'));

  sessionStorage.setItem('username', brugernavn);
  console.log(sessionStorage.getItem('username'));

  sessionStorage.setItem('password', kode);
  console.log(sessionStorage.getItem('password'));

  sessionStorage.setItem('email', email);
  console.log(sessionStorage.getItem('email'));

  document.getElementById('login-container').style.display = 'flex';
  document.getElementById('opret-bruger-container').style.display = 'none';
}

opretknap.addEventListener("click", gemData);
