

let sum1 = document.getElementsByClassName("ab")[0].innerHTML;
let sum2 = document.getElementsByClassName("ab")[1].innerHTML;
let sum3 = document.getElementsByClassName("ab")[2].innerHTML;
let allnumbers = [sum1, sum2, sum3];
console.log(allnumbers)

let sum=0;
for (let i =0;i<allnumbers.length;i++) {
sum += parseInt(allnumbers[i])
}
console.log(sum)
console.log(document.getElementsByClassName("item3")[0])
document.getElementsByClassName("item3")[0].innerHTML += sum