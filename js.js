const num1 = Math.floor(Math.random()*10)
const num2 = Math.floor(Math.random()*10)

const question1 = document.getElementById("question");

const input1 = document.getElementById("input");

const formE1 = document.getElementById("form");

const score1 = document.getElementById("score"); 

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}
  
score1.innerText = `score: ${score}`

question1.innerText = `What is ${num1} multiply by ${num2} ? `;

 const correctAns = num1 * num2;

formE1.addEventListener("submit", ()=>{
    const userAns = +input1.value
    if(userAns === correctAns){
        score++;
        updateLocalStorage() 
    }
    else{
        score--;
        updateLocalStorage()
    }
});
 function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
 }