opretknap = document.getElementById("opretknap");


function gemData(){
  fornavn = document.getElementById("fornavn").value;
  efternavn = document.getElementById("efternavn").value;
  brugernavn = document.getElementById("brugernavn").value;
  kode = document.getElementById("kode").value;
  email = document.getElementById("email").value;

  localStorage.setItem('name', fornavn);
  localStorage.setItem('lastname', efternavn);
  localStorage.setItem('username', brugernavn);
  localStorage.setItem('password', kode);
  localStorage.setItem('email', email);

  document.getElementById('login-container').style.display = 'flex';
  document.getElementById('opret-bruger-container').style.display = 'none';
}

opretknap.addEventListener("click", gemData);
