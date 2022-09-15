
const computerSelection = getComputerChoice();
game ();


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  

function getComputerChoice () {
    const rndInt = randomIntFromInterval(0, 2);
    let elements= ["rock", "paper", "scissors"];
    return elements[rndInt];
}


function playerRound (playerSele, computerSelection){
    var player = 0;
    var computer = 0;
    if (playerSele === "ROCK" && computerSelection === "rock"){
        console.log("Draw");
    }
    else if (playerSele === "ROCK" && computerSelection === "paper"){
        console.log("Paper wins. You are loser of this round!");
        computer = computer +1;
    }
    else {
        console.log("Rock wins. You are winner of this round!");
        player= player +1;
    }

    if (player > computer){
        return 1;
    }
    else if (player < computer){
        return 2;
    }
}


function toUpperCase (playerSelection) {
    return playerSelection.toUpperCase();
}

function game () {
    
    for (let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Insert your chooise");
        const playerSele = toUpperCase(playerSelection)
        console.log(playerRound(playerSele,computerSelection));
    }
        const resoult = playerRound();
        
    if (resoult ===1 ){
        console.log("YOU LOSE THE GAME :( ! try again! ");
    }
    else if (resoult >= 2){
        console.log("CONGRATULATION!!! YOU WIN A GAME!");
    }

}



