knap = document.getElementById("logud");

function logOut(){
  sessionStorage.clear();
}

knap.addEventListener("click", logOut)
