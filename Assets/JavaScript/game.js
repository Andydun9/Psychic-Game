var game = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = " ";
var userGuess = [];
var guessList = []
var games = []



//Chooses random letter

var randomItem = game[Math.floor(Math.random() * game.length)];
console.log(randomItem);

//pushes random letter to guesses so far
document.onkeyup = function (event) {
    userGuess = event.key; console.log(userGuess)
    guessList.push(userGuess);
    document.getElementById("guess-so-far").innerHTML = guessList;

    //win coding
    if (userGuess == randomItem) {
        wins++
        alert("You win!!!!");
        guessList.length = 0;
        guessesLeft = 10;

        document.getElementById("winss").innerHTML = wins;


    }
    else {
        //loss coding
        guessesLeft--;
        document.getElementById("guess-left").innerHTML = guessesLeft;

        if (guessesLeft === 0) {
            alert("You loose!");
        }
        if (guessesLeft < 1) {

            losses++;
            guessList.length = 0;
            guessesLeft = 10;

            document.getElementById("lose").innerHTML = losses;

        }


    }
}

// onkeydown.call= games
// if(guessesLeft===0){
// games.call
// };

function restart() {
    location.reload();
};