var wins = 0;
var losses = 0;
var randomNumber = 0;
var yourTotal = 0;
var redGem = 0;
var blueGem = 0;
var whiteGem = 0;
var orangeGem = 0;

//generate the random number

function newGame() {

  randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber)
  $(".random-number").text(randomNumber)

  wins = 0;
  losses = 0;
  yourTotal = 0;
  redGem = 0;
  blueGem = 0;
  whiteGem = 0;
  orangeGem = 0;

}

$("#new-game").on('click', newGame);