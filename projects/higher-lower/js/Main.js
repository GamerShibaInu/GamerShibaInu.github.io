const plrAge = prompt('Wat is uw Leeftijd?', ''); // ask plr age

alert(`Uw leeftijd is ${plrAge}`); //confirms Player Age

//checks age requirements
if (plrAge >= 18) {
    alert('Welkom!');
} else if (plrAge < 18) { // if player under 18 the will be kicked from the website
    alert('WARNING A CHILD DETECTED! TERMINATION IS REQUIRED IMEDIATLY');
    window.location.replace("https://www.google.com/"); // transvers u to google if underage
}
// Text for if you lose or win
let winnertextbox = document.querySelector('.winnertext');
winnertextbox.textContent = '';
// player name
const plrName = prompt('Wat is uw naam?', '');
// puts the user's name in the textbox using QuarySelector
const userName = document.querySelector('.text-player');
userName.textContent = plrName

// random number for player
  function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
  }

// variables
let plrPoints = randomNumber(1, 10);
let bankPoints = 0;
let GamePoints = 500;

const StarterPoints = document.querySelector('.moneybox');
StarterPoints.textContent = GamePoints

  //button hoger
  const BotButton = document.querySelector(".higher");
  BotButton.addEventListener("click", HigherClicked);
  function HigherClicked() {
    plrPoints = randomNumber(1, 10);
    bankPoints = randomNumber(1, 10);

    //Game Points
let GamePointsBox = document.querySelector('.moneybox');
GamePointsBox.textContent = GamePoints

    //add number to bot article
    const botBox = document.querySelector('.bot-amount');
    botBox.textContent = bankPoints

    // place numbers in player box and an if-statement that determines win conditons
    const playerBox = document.querySelector('.player-amount'); // puts numbers in player-amount box
  playerBox.textContent = plrPoints
    if (plrPoints > bankPoints) {
      winnertextbox.textContent = 'Je hebt gewonnen!';
      GamePointsBox.textContent = GamePoints += 50;

    } else if (plrPoints == bankPoints){
      winnertextbox.textContent = 'gelijk spel!'

    } else {
      winnertextbox.textContent = 'Je hebt verloren!'
      GamePointsBox.textContent = GamePoints -= 50;
    }

    // game over
    if (GamePoints <= 0) {
      alert("Game Over! We zien je volgende keer wanneer je geld heeft!");
      window.location.replace("https://www.google.com/"); // transvers u to google if u lose
    } 
  }

    //button Lower
    const BotButton2 = document.querySelector(".lower");
    BotButton2.addEventListener("click", LowerClicked);
    function LowerClicked() {
      plrPoints = randomNumber(1, 10);
      bankPoints = randomNumber(1, 10);
  
      let GamePointsBoks = document.querySelector('.moneybox');
      GamePointsBoks.textContent = GamePoints
  
 // place numbers in player box and an if-statement that determines win conditons
      const botBox = document.querySelector('.bot-amount');
      botBox.textContent = bankPoints
  
      const playerBox = document.querySelector('.player-amount');
    playerBox.textContent = plrPoints

      if (plrPoints > bankPoints) {
        winnertextbox.textContent = 'Je hebt verloren!'
        GamePointsBoks.textContent = GamePoints -= 50;
      } else if (plrPoints == bankPoints){
        winnertextbox.textContent = 'gelijk spel!'
      } else {
        winnertextbox.textContent = 'Je hebt Gewonnen!'
        GamePointsBoks.textContent = GamePoints += 50;
      }
      // game over
      if (GamePoints <= 0) {
        alert("Game Over! We zien je volgende keer wanneer je geld heeft!");
        window.location.replace("https://www.google.com/"); // transvers u to google if u lose
      } 

    }
  