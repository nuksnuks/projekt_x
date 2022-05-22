//Amanda//
//modalerne der åbner popups//
let fjernm = document.getElementById("fjernm");
let fjern = document.getElementById("fjern");

//modalerne der lukker popups//
let nej = document.getElementById("nej");
let fjern2 = document.getElementById("fjern2");
let ja = document.getElementById("ja");
let ok2 = document.getElementById("ok2");

// When the user clicks the button, open the modal
fjern.onclick = function() {
  fjernm.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
nej.onclick = function() {
  fjernm.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == fjernm) {
    fjernm.style.display = "none";
  }
}

//2nd modal//
ja.onclick = function() {
  fjern2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ok2.onclick = function() {
  fjern2.style.display = "none"
  fjernm.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == fjern2) {
    fjern2.style.display = "none"
    fjernm.style.display = "none"
    ;
  }
}
