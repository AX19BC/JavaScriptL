// declaration //
        var player = 0;
        var computer = 0;
        let buttons = document.querySelectorAll("button");
        let playerSelection = "";
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
function playerRound (playerSelection, computerSelection){
    var player = 0;
    var computer = 0;

    if (playerSelection === computerSelection ){
        console.log("Draw");
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER" ||
    playerSelection === "SCISSORS" && computerSelection === "ROCK" ||
    playerSelection === "PAPER" && computerSelection === "SCISSORS"){
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

function declareWinner(){
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

// tha main game. It last 5 round // 
        
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                let player = 0;
                let computer = 0;
              const computerSelection = getComputerChoice();
              const img = button.querySelector("img");
              playerSelection = img.alt.toUpperCase();
          
              switch (playerRound(playerSelection,computerSelection)){
                case 0:
                    break;
                case 1:
                    player++;
                    break;
                case 2:
                    computer++;
                    break;
              }

              if (player === 5 || computer === 5) {
                declareWinner();
              }
          
            });
            
          });

        

        




