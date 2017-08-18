    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guessCount = 10;
    var userGuess = "";
    var wrongGuesses = "";
    var letter = "";
    var newGuess = true;
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      // Determines which key was pressed.
      for (var i = letters.length - 1; i >= 0; i--) {
        if (event.key === letters[i]) {
          var userGuess = event.key;
        }
      }


      // Randomly chooses a choice from the options array. This is the Computer's guess.
      if (guessCount === 10){
      	letter = letters[Math.floor(Math.random() * letters.length)];
      };

      // Flag to make sure that the guess is not a duplicate of a previous guess.
      for (var i = 0; i < wrongGuesses.length; i++) {
        if ( userGuess === wrongGuesses[i]){
          newGuess = false;
        } 
      }

      // This logic determines the outcome of the game (win/loss), and increments the appropriate number, clears guessed letters, resets guess count.
      if(newGuess) {

        //If the user guesses right, increment wins and reset state of game.
        if (userGuess.toLowerCase() === letter) {
        	wins++;
        	guessCount = 10;
        	wrongGuesses = "";
        	letter = "";
        	userGuess = "";

        } else if (guessCount > 1){

          // If the user guesses wrong and there are guesses left, decrement guesses left and add incorrect guess to guess list.
        	wrongGuesses += userGuess;
        	guessCount--;

        } else {

          // If the user guesses wrong and there are no guesses left, increment losses and reset the state of the game.
        	losses++;
        	guessCount = 10;
        	wrongGuesses = "";
        	userGuess = "";
        	letter = "";
        }
      } else {
        // reset new guess flag.
        newGuess = true;
      }

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<h1>The Psychic Game</h1>" +
          "<p>Guess what letter I'm thinking of</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessCount + "</p>" +
          "<p>Your Guesses so far: " + wrongGuesses + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      
    };