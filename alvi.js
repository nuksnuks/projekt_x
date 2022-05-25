let text = document.getElementById("pricehere");
let allnumbers = localStorage.getItem("tlongp");
if(allnumbers !== null){
    allnumbers = allnumbers.split(",");

    let sum=0;
    for (let i =0;i<allnumbers.length;i++) {
    sum += parseInt(allnumbers[i]);
    }

    text.innerHTML = sum + " kr.";
}else{
    text.innerHTML = "0" + " kr.";
}

