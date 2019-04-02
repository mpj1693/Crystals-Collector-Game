$(document).ready(function () {

  var randomNumber = Math.floor(Math.random() * 100) + 10;
  $(".random-number").text(randomNumber)

  var redGem = Math.floor(Math.random() * 10) + 1;
  var blueGem = Math.floor(Math.random() * 10) + 1;
  var whiteGem = Math.floor(Math.random() * 10) + 1;
  var orangeGem = Math.floor(Math.random() * 10) + 1;

  var yourTotal = 0;
  var wins = 0;
  var losses = 0;
  $(".your-total").text(yourTotal)
  $(".wins").text(wins)
  $(".losses").text(losses)

  function reset() {
    randomNumber = Math.floor(Math.random() * 100) + 10;
    $(".random-number").text(randomNumber)

    redGem = Math.floor(Math.random() * 10) + 1;
    blueGem = Math.floor(Math.random() * 10) + 1;
    whiteGem = Math.floor(Math.random() * 10) + 1;
    orangeGem = Math.floor(Math.random() * 10) + 1;

    yourTotal = 0;
    $(".your-total").text(yourTotal)
    console.log(
      "Random Number in reset " + randomNumber +
      "   your total in reset " + yourTotal
    )
   
  }

  function youWon() {
    alert("You Won.");
    wins++;
    $(".wins").text(wins);
    reset();
  }

  function youLose() {
    alert("You Lose.");
    losses++;
    $(".losses").text(losses);
    reset();
  }

  $(".red-gem").on('click', function () {
    yourTotal += redGem;
    $(".your-total").text(yourTotal)

    if (yourTotal == randomNumber) {
      youWon();
    } else if (yourTotal > randomNumber) {
      youLose();
    }
    console.log(
      "Random Number in gem " + randomNumber +
      "   your total in gem " + yourTotal + 
      "   Red Gem " + redGem +
      "   Blue Gem " + blueGem +
      "   White Gem " + whiteGem + 
      "   Orange Gem " + orangeGem
    )
  })

  $(".blue-gem").on('click', function () {
    yourTotal += blueGem;
    $(".your-total").text(yourTotal)

    if (yourTotal == randomNumber) {
      youWon();
    } else if (yourTotal > randomNumber) {
      youLose();
    }
    console.log(
      "Random Number in gem " + randomNumber +
      "   your total in gem " + yourTotal + 
      "   Red Gem " + redGem +
      "   Blue Gem " + blueGem +
      "   White Gem " + whiteGem + 
      "   Orange Gem " + orangeGem
    )
  })

  $(".white-gem").on('click', function () {
    yourTotal += whiteGem;
    $(".your-total").text(yourTotal)

    if (yourTotal == randomNumber) {
      youWon();
    } else if (yourTotal > randomNumber) {
      youLose();
    }
    console.log(
      "Random Number in gem " + randomNumber +
      "   your total in gem " + yourTotal + 
      "   Red Gem " + redGem +
      "   Blue Gem " + blueGem +
      "   White Gem " + whiteGem + 
      "   Orange Gem " + orangeGem
    )
  })

  $(".orange-gem").on('click', function () {
    yourTotal += orangeGem;
    $(".your-total").text(yourTotal)

    if (yourTotal == randomNumber) {
      youWon();
    } else if (yourTotal > randomNumber) {
      youLose();
    }

    console.log(
      "Random Number in gem " + randomNumber +
      "   your total in gem " + yourTotal + 
      "   Red Gem " + redGem +
      "   Blue Gem " + blueGem +
      "   White Gem " + whiteGem + 
      "   Orange Gem " + orangeGem
    )
  })

})