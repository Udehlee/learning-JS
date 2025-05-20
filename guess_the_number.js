//console-based game
//user has 4 attempts to get the secret number

let guess;
let attempts = 4;
let secretNumber = randomNumber(1,9)

function randomNumber(min,max){
    return Math.floor(Math.random * (max - min + 1) + min)
}

for (i=0; i<=attempts; i++){
    guess = parseInt(prompt(`attempt {i}: guess a number between 1 and 9`));

    if (guess === secretNumber){
        alert("correct! you win")
        break;
    }else if (guess < secretNumber){
        alert("too low")
    }else{
        alert("too high")
    }

    if (i === attempts){
    alert(`oboy! out of attempts! the number was ${secretNumber}.`);
    }
}