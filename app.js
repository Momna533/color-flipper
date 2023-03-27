/*
const colors = ["red", "green", "blue"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",()=>{
    const randomColor = getRandomNumber();
    document.body.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}*/

const colors = ["red","green","blue","black"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click",()=>{
    const randomColor = getRandomNumber();
    document.body.style.backgroundColor= colors[randomColor];
    color.textContent = colors[randomColor];
})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}