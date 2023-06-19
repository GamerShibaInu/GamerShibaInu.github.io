// first time visit load data etc.
const newVisit = localStorage.getItem("newVisit");
const visitedPlrOne = window.localStorage.getItem("plrOne");
let plrOneName
let plrTwoName
function askPlr1() {
  plrOneName = prompt("please enter player 1 name", "Player 1");
  return
}
function askPlr2() {
  plrTwoName = prompt("please enter player 2 name", "Player 2");
  return
}
const visitedPlrTwo = window.localStorage.getItem("plrTwo");
if (newVisit == undefined) {
  // new visitor
  localStorage.setItem("newVisit", 1);
  alert("Welcome!");
  askPlr1();
  askPlr2();
  // add player names
  const addPlrName1 = document.querySelector(".plr-one");
  addPlrName1.textContent = plrOneName;

  const addPlrName2 = document.querySelector(".plr-two");
  addPlrName2.textContent = plrTwoName;

  // save player names
  localStorage.setItem("plrOne", plrOneName);
  localStorage.setItem("plrTwo", plrTwoName);
} else { // already visited
  vPlrOne = document.querySelector(".plr-one");
  vPlrOne.textContent = visitedPlrOne;

  vPlrTwo = document.querySelector(".plr-two");
  vPlrTwo.textContent = visitedPlrTwo;

}

//turns
const squares = document.querySelectorAll('.square');
let drawCounter = 0
let plrTurn = "x"
let whosTurn = document.querySelector(".turn-text");
window.localStorage.getItem("plrTwo");
window.localStorage.getItem("plrOne");
plrTwoName = visitedPlrTwo
plrOneName = visitedPlrOne
whosTurn.textContent = "its " + plrOneName + "'s turn!";
for (let index = 0; index < squares.length; index++) {
  const square = squares[index];
  square.addEventListener("click", function () {
    if (square.textContent === "") {
      square.textContent = plrTurn;
      if (plrTurn === "x") {
        whosTurn.textContent = "its " + plrOneName + "'s turn!";
        plrTurn = "o";
        winCheck()
      } else {
        whosTurn.textContent = "its " + plrTwoName + "'s turn!";
        plrTurn = "x";
        winCheck()
      }
    }
  });
}


// square variables
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");

// clear boxes after win
function clearBoxes() {
  box1.textContent = ""
  box2.textContent = ""
  box3.textContent = ""
  box4.textContent = ""
  box5.textContent = ""
  box6.textContent = ""
  box7.textContent = ""
  box8.textContent = ""
  box9.textContent = ""


}
//winning player symbol (X)
function xWon() {
  box1.textContent = "x"
  box2.textContent = "x"
  box3.textContent = "x"
  box4.textContent = "x"
  box5.textContent = "x"
  box6.textContent = "x"
  box7.textContent = "x"
  box8.textContent = "x"
  box9.textContent = "x"
}

//winning player symbol (O)
function oWon() {
  box1.textContent = "o"
  box2.textContent = "o"
  box3.textContent = "o"
  box4.textContent = "o"
  box5.textContent = "o"
  box6.textContent = "o"
  box7.textContent = "o"
  box8.textContent = "o"
  box9.textContent = "o"
}

const resetButton = document.querySelector(".resetBtn");
resetButton.addEventListener("click", clearBoxes)
// X win flash
function xWinner() {
  xWon()
  let blinkTimer = setTimeout(clearBoxes, 1001)
  xWon()
  blinkTimer = setTimeout(clearBoxes, 1002)
}

// O win flash
function oWinner() {
  oWon()
  let blinkTimer = setTimeout(clearBoxes, 1002)
  oWon()
  blinkTimer = setTimeout(clearBoxes, 1002)
}


// leaderboard variables 
const xLeaderboard = document.querySelector(".plr-one-score");
const oLeaderboard = document.querySelector(".plr-two-score");
let xWins = 0
let oWins = 0


// leaderstats functions
function addWinX() {
  xWins = xWins + 1
  xLeaderboard.textContent = plrOneName + " has " + xWins + " wins";
}

function addWinO() {
  oWins = oWins + 1
  oLeaderboard.textContent = plrTwoName + " has " + oWins + " wins";
}

// win conditions X
function winCheck() {
  if (box1.textContent == "x" && box2.textContent == "x" && box3.textContent == "x") {
    whosTurn.textContent = plrOneName + " won!"
    addWinX()
    xWinner()
  } else if (box4.textContent == "x" && box5.textContent == "x" && box6.textContent == "x") {
    addWinX()
    xWinner()
    whosTurn.textContent = plrOneName + " won!"
  } else if (box7.textContent == "x" && box8.textContent == "x" && box9.textContent == "x") {
    addWinX()
    xWinner()
    whosTurn.textContent = plrOneName + " won!"
  } else if (box1.textContent == "x" && box4.textContent == "x" && box7.textContent == "x") {
    addWinX()
    xWinner()
    whosTurn.textContent = plrOneName + " won!"
  }
  else if (box2.textContent == "x" && box5.textContent == "x" && box8.textContent == "x") {
    addWinX()
    xWinner()
    whosTurn.textContent = plrOneName + " won!"
  } else if (box3.textContent == "x" && box6.textContent == "x" && box9.textContent == "x") {
    addWinX()
    xWinner()
    whosTurn.textContent = plrOneName + " won!"
  } else if (box1.textContent == "x" && box5.textContent == "x" && box9.textContent == "x") {
    addWinX()
    xWinner()
    whosTurn.textContent = plrOneName + " won!"
  } else if (box3.textContent == "x" && box5.textContent == "x" && box7.textContent == "x") {
    addWinX()
    xWinner()
    whosTurn.textContent = plrTwoName + " won!"
    // o win conditions
  } else if (box1.textContent == "o" && box2.textContent == "o" && box3.textContent == "o") {
    addWinO()
    oWinner()
    whosTurn.textContent = plrTwoName + " won!"
  } else if (box4.textContent == "o" && box5.textContent == "o" && box6.textContent == "o") {
    addWinO()
    oWinner()
    whosTurn.textContent = plrTwoName + " won!"
  } else if (box7.textContent == "o" && box8.textContent == "o" && box9.textContent == "o") {
    addWinO()
    oWinner()
    whosTurn.textContent = plrTwoName + " won!"
  } else if (box1.textContent == "o" && box4.textContent == "o" && box7.textContent == "o") {
    addWinO()
    oWinner()
    whosTurn.textContent = plrTwoName + " won!"
  } else if (box2.textContent == "o" && box5.textContent == "o" && box8.textContent == "o") {
    addWinO()
    oWinner()
    whosTurn.textContent = plrTwoName + " won!"
  } else if (box3.textContent == "o" && box6.textContent == "o" && box9.textContent == "o") {
    addWinO()
    oWinner()
    whosTurn.textContent = plrTwoName + " won!"
  } else if (box1.textContent == "o" && box5.textContent == "o" && box9.textContent == "o") {
    addWinO()
    oWinner()
    whosTurn.textContent = plrTwoName + " won!"
  } else if (box3.textContent == "o" && box5.textContent == "o" && box7.textContent == "o") {
    addWinO()
    oWinner()
    whosTurn.textContent = plrTwoName + " won!"

  }
}
console.log("JavaSCript loaded successfully.")
