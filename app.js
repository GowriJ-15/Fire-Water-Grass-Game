let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
let result_div = document.querySelector(".results > p");
let body = window.document.styleSheets[0];
const rock_div = document.getElementById("f");
const paper_div = document.getElementById("w");
const scissors_div = document.getElementById("g");

function getCompchoice() {
  const choices = ['Fire', 'Water', 'Grass'];
  const randNum = Math.floor(Math.random() * 3); // Generate random # between 0-2.
  return choices[randNum]; // Returns value of array slot based on randNum
}
function win(userChoice, compChoice) {
  
  userScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = compScore;
  result_div.innerHTML = `${userChoice}  beats ${compChoice} . You win!`;
  
}
function lose(userChoice, compChoice) {
  
  compScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = compScore;
  result_div.innerHTML = `${userChoice} falls to ${cpuChoice}. CPU wins!`;
}
function draw(userChoice, compChoice) {
  
  result_div.innerHTML = `It's a draw, partner.`;

}

function game(userChoice) {
  const compChoice = getCompchoice();
  switch (userChoice + compChoice) {
    case "FireGrass":
    case "WaterFire":
    case "GrassWater":
      win(userChoice, compChoice);
      break;
    case "GrassFire":
    case "FireWater":
    case "WaterGrass":
      lose(userChoice, compChoice);
      break;
    case "FireFire":
    case "WaterWater":
    case "GrassGrass":
      draw(userChoice, compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function(){
    game("Fire");
  })
  paper_div.addEventListener('click', function(){
    game("Water");
  })
  scissors_div.addEventListener('click', function(){
    game("Grass");
  })
}

