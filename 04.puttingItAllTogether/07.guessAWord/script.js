var $apples = $('#apples');
var $message = $('#message');
var $letters = $('#spaces');
var $guesses = $('#guesses');
    
var randomWord = (function () {
  var words = ['apple', 'banana', 'orange','pear', 'mango'];

  return function () {
    var idx = Math.floor(Math.random() * words.length);
    var chosen = words[idx];
    words.splice(idx, 1);
    return chosen;
  };
}());

function Game() {
  this.incorrect = 0;
  this.letters_guessed = [];
  this.correct_spaces = 0;
  this.word = randomWord();

  if (!this.word) {
    this.displayMessage('Sorry, I\'ve run out of words!');
  }
}

Game.prototype = {
  displayMessage: function(text) {
    $message.text(text);
  }
};






