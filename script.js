let random=parseInt(Math.random()*100+1)
const userinput=document.querySelector('#guessField')
const submit=document.querySelector('#subt')
const prevGuesses=document.querySelector('.guesses')
const lastGuesses=document.querySelector('#lastGuesses')
const lowHigh=document.querySelector('.lowHigh')
const p=document.querySelector('p')
const result=document.querySelector('.result')

const para=document.createElement('p')

let guesses=[]
let count=0



let playGame=true

if(playGame){
submit.addEventListener('click',function(e){
    e.preventDefault()
const guess=parseInt(userinput.value)
validateGuess(guess);

});
}

function validateGuess(guess){
if(isNaN(guess)){
    alert("Please enter a valid number")
}
else if(guess<1 || guess>100){
    alert("Please enter a number between 1 and 100")
}
else{
    guesses.push(guess)
    if(count==9){
        displayGuess(guess)
        displayMessage(`Game Over! The number was ${random}`)
        endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
}


}


function checkGuess(guess){
if(guess==random){
    displayMessage(`You Guessed it Right! The number was ${random}`)
    endGame()
}
else if(guess<random){
    displayMessage(`Number is Tooo low!`)
}
else{
    displayMessage(`Number is Tooo High!`)
}

}

function displayGuess(guess){
userinput.value=''
prevGuesses.innerHTML+=` ${guess}, `
count++;
lastGuesses.innerHTML=`${10-count}`;

}

function displayMessage(message){
lowHigh.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
userinput.value=''
userinput.setAttribute('disabled','')
para.classList.add('button')
para.innerHTML=`<h2 id="newGame">Start New Game</h2>`
result.appendChild(para);
playGame=false;
newGame();


}

function newGame(){
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
random=parseInt(Math.random()*100+1)
guesses=[]
count=0
prevGuesses.innerHTML=''
lastGuesses.innerHTML=`${10-count}`;
lowHigh.innerHTML='';
userinput.removeAttribute("disabled")
result.removeChild(para)
playGame=true;




})





}

