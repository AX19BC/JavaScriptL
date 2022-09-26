// declaration //
        let playerSelection = "";
        let buttons = document.querySelectorAll(".button");
        

// animation for h1 (fancy) title//
        const text = document.querySelector (".fancy");
        const strText = text.textContent;
        const splitText = strText.split("");
        text.textContent = "";

        for(i=0; i<splitText.length; i++){
            text.innerHTML += "<span>" + splitText[i] + "</span>";
        }

        let char = 0;
        let timer = setInterval(onTick, 50);

        function onTick(){
            const span = text.querySelectorAll("span")[char];
            span.classList.add("fade");
            char++;
            if(char === splitText.length){
                complete();
                return;
            }
        }

        function complete () {
            clearInterval(timer);
            timer = null;
        }


        

        


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
              const computerSelection = getComputerChoice();
                if (computerSelection === "SCISSORS"){
                    var seeCompChoice = document.querySelector (".scissors2");
                    seeCompChoice.style.width = '175px';
                    seeCompChoice.style.height = '175px';
                    seeCompChoice.style.backgroundColor = '#800000';
                     seeCompChoice.style.boxShadow ='0 0 1.4rem white';
                     seeCompChoice.style.transition = 'all .8s ease';
                     
                     var delayInMilliseconds = 1500; 
                    setTimeout(function() {
                        seeCompChoice.style.width = '150px';
                        seeCompChoice.style.height = '150px';
                        seeCompChoice.style.backgroundColor = '#4d0000';
                         seeCompChoice.style.boxShadow ='0 0 1.4rem #660000';
                         seeCompChoice.style.transition = 'all .8s ease';
                    }, delayInMilliseconds);
                }
                else if (computerSelection === "ROCK"){
                    var seeCompChoice = document.querySelector (".rock2");
                    seeCompChoice.style.width = '175px';
                    seeCompChoice.style.height = '175px';
                    seeCompChoice.style.backgroundColor = '#800000';
                     seeCompChoice.style.boxShadow ='0 0 1.4rem white';
                     seeCompChoice.style.transition = 'all .8s ease';

                     var delayInMilliseconds = 1500; 
                    setTimeout(function() {
                        seeCompChoice.style.width = '150px';
                        seeCompChoice.style.height = '150px';
                        seeCompChoice.style.backgroundColor = '#4d0000';
                         seeCompChoice.style.boxShadow ='0 0 1.4rem #660000';
                         seeCompChoice.style.transition = 'all .8s ease';
                    }, delayInMilliseconds);
                }
                else{
                    var seeCompChoice = document.querySelector (".paper2");
                    seeCompChoice.style.width = '175px';
                     seeCompChoice.style.height = '175px';
                     seeCompChoice.style.backgroundColor = '#800000';
                     seeCompChoice.style.boxShadow ='0 0 1.4rem white';
                     seeCompChoice.style.transition = 'all .8s ease';

                     var delayInMilliseconds = 1500; 
                    setTimeout(function() {
                        seeCompChoice.style.width = '150px';
                        seeCompChoice.style.height = '150px';
                        seeCompChoice.style.backgroundColor = '#4d0000';
                         seeCompChoice.style.boxShadow ='0 0 1.4rem #660000';
                         seeCompChoice.style.transition = 'all .8s ease';
                    }, delayInMilliseconds);
                }
              const img = button.querySelector("img");
              playerSelection = img.alt.toUpperCase();
              let computer = 0;
              let player =0;
              switch (playerRound(playerSelection,computerSelection)){
                case 0:
                    if(player === computer){
                        let winnerOfRound = document.querySelector(".winnerOfRound");
                        let playerScore = document.querySelector(".playerScoore");
                        let computerScore = document.querySelector(".computerScoore");
                        playerScore.textContent = "0";
                        computerScore.textContent = "0";
                        winnerOfRound.style.animation = "fadein 1s";
                        winnerOfRound.textContent = "It is DRAW!";
                        winnerOfRound.style.animation = "fadeout 1s";
                      }
                    break;
                case 1:
                    player++; 

                    if(player === computer){
                        let winnerOfRound = document.querySelector(".winnerOfRound");
                        let playerScore = document.querySelector(".playerScoore");
                        let computerScore = document.querySelector(".computerScoore");
                        playerScore.textContent = "0";
                        computerScore.textContent = "0";
                      }
                    else if(player > computer){
                        let winnerOfRound = document.querySelector(".winnerOfRound");
                        let playerScore = document.querySelector(".playerScoore");
                        let computerScore = document.querySelector(".computerScoore");
                        playerScore.textContent = "1";
                        computerScore.textContent = "0";
                        winnerOfRound.textContent = "You win this ROUND!";
                      }
                      
                      else {
                        let winnerOfRound = document.querySelector(".winnerOfRound");
                        let computerScore = document.querySelector(".computerScoore");
                        let playerScore = document.querySelector(".playerScoore");
                        computerScore.textContent = "1";
                        playerScore.textContent = "0";
                        winnerOfRound.textContent = "You lose this ROUND!";
                      }
                    break;
                case 2:
                    computer++;

                    if(player === computer){
                        let winnerOfRound = document.querySelector(".winnerOfRound");
                        let playerScore = document.querySelector(".playerScoore");
                        let computerScore = document.querySelector(".computerScoore");
                        playerScore.textContent = "0";
                        computerScore.textContent = "0";
                      }

                    else if(player > computer){
                        let winnerOfRound = document.querySelector(".winnerOfRound");
                        let playerScore = document.querySelector(".playerScoore");
                        let computerScore = document.querySelector(".computerScoore");
                        playerScore.textContent = 1;
                        computerScore.textContent = 0;
                        winnerOfRound.textContent = "You lose this ROUND!";
                      }
                      else {
                        let winnerOfRound = document.querySelector(".winnerOfRound");
                        let computerScore = document.querySelector(".computerScoore");
                        let playerScore = document.querySelector(".playerScoore");
                        computerScore.textContent = 1;
                        playerScore.textContent = 0;
                        winnerOfRound.textContent = "You lose this ROUND!";
                      }
                    break;
              }
              
              
              
              
            });
    
          });

          

        

        
          
          
    

