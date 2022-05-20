//lynge
var elems = document.getElementsByClassName("box");
for(let i = 0; i < elems.length; i++)
{
  fixtag(elems[i]);
}

var elems = document.getElementsByClassName("expandbox");
for(let i = 0; i < elems.length; i++)
{
  fixtagtoo(elems[i]);
}

function fixtag(elem){
    cl = elem.classList;
    tagbox = elem.getElementsByTagName("div")[2];
    tagbox.innerHTML = "";
    for(let i = 1; i < cl.length; i++){
        tagbox.innerHTML += "<div class='tag smalltext'>" + cl[i] + "</div>";
    }
}

function fixtagtoo(elem){
    cl = elem.classList;
    tagbox = elem.getElementsByTagName("div")[5];
    tagbox.innerHTML = "";
    for(let i = 1; i < cl.length; i++){
        tagbox.innerHTML += "<div class='tag smalltext'>" + cl[i] + "</div>";
    }
}

function filter(){
    let filval = document.getElementById("filter").value;
    let boxes = document.getElementsByClassName("box");
    if(filval !== ""){
        for(let i = 0; i < boxes.length; i++){
            boxes[i].style.display = "none";
        }
        let toshow = document.getElementsByClassName(filval);
        for(let i = 0; i < toshow.length; i++){
            toshow[i].style.display = "grid";
        }
    }else{
        for(let i = 0; i < boxes.length; i++){
            boxes[i].style.display = "grid";
        }
    }
}

let alltags = [];

function updatetags(){
    let boxes = document.getElementsByClassName("box");
    
    for(let i = 0; i < boxes.length; i++){
        let tags = boxes[i].classList;
        for(let i = 1; i < tags.length; i++){
            if(!alltags.includes(tags[i])){
                alltags.push(tags[i]);
            }
        }
    }
    let options = document.getElementById("tags");
    options.innerHTML = "";
    for(let i = 0; i < alltags.length; i++){
        options.innerHTML += "<option value='" + alltags[i] + "'>";
    }
}

document.getElementById("filter").addEventListener("blur", filter, false);
updatetags();