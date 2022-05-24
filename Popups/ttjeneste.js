//Amanda//
//modalerne der åbner popups//
let ttprofil = document.getElementById("ttprofil");
let tilfoej = document.getElementById("tilfoej");
let tkonto = document.getElementById("tkonto");
//modalerne der lukker popups//
let luk = document.getElementById("luk");
let ttjeneste = document.getElementById("ttjeneste");

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
