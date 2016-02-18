
var hangman = {
  word: "",
  splitWord: [],
  displayWord: [],
  currentGuess: [],

  getWord: function(){
    this.word = prompt("Enter the word you want the other player to guess").toLowerCase();
    this.splitWord = this.word.split("");
    this.displayProgress();
  },

  displayProgress: function(){
    for (i = 0; i < this.splitWord.length; i++) {
      this.displayWord.push("_");
    }
    this.checkGuess();
  },
  checkGuess: function() {
    guessCounter = 5;
    while (this.displayWord.indexOf("_") >= 0) {
      this.currentGuess = prompt("Enter a letter. You have " + guessCounter + " inccorect guesses left." + '\r' + this.displayWord).toLowerCase();
      if (this.splitWord.indexOf(this.currentGuess) >= 0) {
        for (i = 0; i <= this.splitWord.length; i++) {
          if (this.splitWord[i] == this.currentGuess) {
              this.displayWord[i] = this.currentGuess;
          }
        }
      }
      else {
        guessCounter -= 1;
        alert("That letter not in the secret word. You have " + guessCounter + " guesses left.");
        if (guessCounter === 0) {
          alert("Sorry, you lose!");
          this.playAgain();
        }
      }
    }
    alert("You win!");
    this.playAgain();
  },
    playAgain: function(){
      playMore = prompt("Would you like to play again? Y/N").toUpperCase();
      if (playMore == "Y"){
        this.getWord();
      }
      else {
        alert("Thanks for playing!");
      }
    }
  };

hangman.getWord();
