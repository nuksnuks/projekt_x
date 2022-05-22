//Amanda//
//modalerne der åbner popups//
let ttprofil = document.getElementById("ttprofil");
let tilfoej = document.getElementById("tilfoej");
let tkonto = document.getElementById("tkonto");
//modalerne der lukker popups//
let luk = document.getElementById("luk");
let ttjeneste = document.getElementById("ttjeneste");
let tkonti = document.getElementById("tkonti");
let button = document.getElementById("ok");
let luk2 = document.getElementById("luk2");

tilfoej.onclick = function () {
  ttprofil.style.display = "block";
}
luk.onclick = function() {
  ttprofil.style.display = "none";
}
ttjeneste.onclick = function() {
  ttprofil.style.display = "none";
}
//klikken man udefor boksen, så lukker den//
window.onclick = function(event) {
  if (event.target == ttprofil) {
    ttprofil.style.display = "none";
  }
}
//2nd modal//
tkonto.onclick = function() {
  tkonti.style.display = "block";
  }

ok.onclick = function() {
  tkonti.style.display = "none"
}
luk2.onclick = function() {
  tkonti.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == tkonti) {
    tkonti.style.display = "none";
  }
}
