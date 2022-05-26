

let text = document.getElementById("pricehere");
let allnumbers = localStorage.getItem("tlongp");
if(allnumbers !== null){
    allnumbers = allnumbers.split(",");

    sum(allnumbers)
}else{
    localStorage.setItem("tlongp", "1768,700")
    let allnumbers = localStorage.getItem("tlongp").split(",");

    sum(allnumbers)
}

function sum(nums){
    let sum = 0;
    for (let i =0;i<nums.length;i++) {
    sum += parseInt(nums[i]);
    }

    text.innerHTML = sum + " kr.";
}
