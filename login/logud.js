knap = document.getElementById("logud");

function logOut(){
 localStorage.clear();
}

knap.addEventListener("click", logOut)
