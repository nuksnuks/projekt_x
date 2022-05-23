

let tal1 = document.getElementsByClassName("ab")[0].innerHTML;
let tal2 = document.getElementsByClassName("ab")[1].innerHTML;
let tal3 = document.getElementsByClassName("ab")[2].innerHTML;
let allnumbers = [tal1, tal2, tal3];

let sum=0;
for (let i =0;i<allnumbers.length;i++) {
sum += parseInt(allnumbers[i])
}

console.log(document.getElementsByClassName("item3")[0])
document.getElementsByClassName("item3")[0].innerHTML += sum