
/*const colors = ["A", "B", "C","D","E","F",1,2,3,4,5,6,7,8,9,0]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",()=>{
    let randomColor = "#";
    for(let i =0 ; i < 6; i++){
        randomColor += colors[getRandomNumber()]
    }
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}*/

const colors = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click",()=>{
    let randomColor = "#"
    for(i = 0; i < 6; i++){
        randomColor += colors[getRandomNumber()]
    }

    document.body.style.backgroundColor= randomColor;
    color.textContent = randomColor;
})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}