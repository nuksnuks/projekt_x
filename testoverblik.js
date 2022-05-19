function fixtag(elem){
    cl = elem.classList;
    tagbox = elem.getElementsByTagName("div")[2];
    tagbox.innerHTML = "";
    for(let i = 1; i < cl.length; i++){
        tagbox.innerHTML += "<div class='tag smalltext'>" + cl[i] + "</div>";
    }
}