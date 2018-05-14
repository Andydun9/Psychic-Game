var game = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w","x", "y", "z"]
    
    var wins= 0;
    var losses= 0;
    var guessesLeft= 10;
    var guesses= " ";
    var userGuess = [];
    var guessList=[]
    
    
    
   
   var randomItem = game[Math.floor(Math.random() * game.length)];
   console.log (randomItem);



     document.onkeyup = function (event) {    
           userGuess = event.key; console.log(userGuess)
           guessList.push(userGuess); 
           document.getElementById("guess-so-far").innerHTML= guessList;
     
    
          if (userGuess == randomItem) {
     wins++
     document.getElementById("winss").innerHTML=wins;
    
        }
    else{
        
            guessesLeft--;
        document.getElementById("guess-left").innerHTML= guessesLeft;

         if(guessesLeft ===0){
    alert("You loose!")
    }
    if(guessesLeft < 1){
            losses++;
                document.getElementById("lose").innerHTML=losses;
               
        }
       
}
     }
function restart() {
    location.reload();
}