// function computer choise is saive din to const computerSelection //
const computerSelection = getComputerChoice();
game ();

// random computer pick //
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return "ROCK"
      case 1:
        return "PAPER"
      case 2:
        return "SCISSORS"
    }
}

// looking who wins and count each win --> each time return winner//
function playerRound (playerSele, computerSelection){
    var player = 0;
    var computer = 0;

    if (playerSele === computerSelection ){
        console.log("Draw");
    }
    else if (playerSele === "ROCK" && computerSelection === "PAPER" ||
            playerSele === "SCISSORS" && computerSelection === "ROCK" ||
            playerSele === "PAPER" && computerSelection === "SCISSORS"){
        console.log("You are loser of this round!");
        computer++;
    }
    else {
        console.log("You are winner of this round!");
        player++;
    }

    if (computer === player){
        return 0;
    }
    else if (player > computer) {
        return 1;
    }
    else {
        return 2;
    }
}

// player selection convert to upper case //
function toUpperCase (playerSelection) {
    return playerSelection.toUpperCase();
}


// tha main game. It last 5 round // 
function game () {

        var player = 0;
        var computer = 0;

    for (let i = 0; i < 5; i++){
        
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Insert your chooise");
        const playerSele = toUpperCase(playerSelection)
       
        // every round count player score and add +1//
    switch (playerRound(playerSele,computerSelection)){
        case 0:
            break;
        case 1:
            player++;
            break;
        case 2:
            computer++;
            break;
    }
    }
//end of loop//
        

// looks who have bigger score and declare a winner //
    if (player > computer){
        console.log("YOU win this game Congratulation!");
    }

    else if (computer > player){
        console.log("YOU lose this game BOOOOO!");
    }

    else if (computer === player){
        console.log("It's a draw try again and win this PC.");
    }
}



