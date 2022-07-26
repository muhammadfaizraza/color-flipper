"use strict";
const colors = ["red","green","blue","rgba(122,133,200)","#f15025"]
const btn = document.getElementById("btn")
const flipper = document.querySelector(".color");

btn.addEventListener("click",()=>{

let randomNumber = getrandomNumber();
document.body.style.backgroundColor=colors[randomNumber];
flipper.textContent= colors[randomNumber]

})
function  getrandomNumber(){
return Math.floor(Math.random() * colors.length) 

}
