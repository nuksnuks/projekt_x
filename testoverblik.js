//lynge

function test(){
    sessionStorage.clear
    let x = sessionStorage.getItem("name");
    x += "," + document.getElementById("filter").value;
    sessionStorage.name = x;

    let y = sessionStorage.getItem("name").split(",")
    console.log(y);
}


var elems = document.getElementsByClassName("box");
for(let i = 0; i < elems.length; i++)
{
  fixtag(elems[i]);
}

function fixtag(elem){
    cl = elem.classList;
    tagbox = elem.getElementsByTagName("div")[2];
    tagbox.innerHTML = "";
    for(let i = 1; i < cl.length; i++){
        tagbox.innerHTML += "<div class='tag smalltext'>" + cl[i] + "</div>";
    }
}

function exfixtag(elem){
    boxtags = elem.parentElement.getElementsByTagName("div")[0].classList;
    elem.className = "expandbox";
    for(let i = 1; i < boxtags.length; i++){
        elem.classList.add(boxtags[i]);
    }

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
    let ebs = document.getElementsByClassName("expandbox");
    for(let i = 0; i < ebs.length; i++){
        ebs[i].style.display = "none";
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

function expand(elem) {
    if(elem.classList[0] == "box"){
        let eb = elem.parentElement.getElementsByClassName("expandbox")[0];
        exfixtag(eb);
        elem.style.display = "none";
        eb.style.display = "grid";
    }else{
        let eb = elem.parentElement.parentElement;
        let box = eb.parentElement.getElementsByClassName("box")[0];
        eb.style.display = "none";
        box.style.display = "grid";
    }
}

function addbox(){
    let all = document.getElementById("allbox");
    let toadd = document.getElementById("hidden").innerHTML;
    all.innerHTML += toadd;
}

document.getElementById("filter").addEventListener("blur", filter, false);
updatetags();