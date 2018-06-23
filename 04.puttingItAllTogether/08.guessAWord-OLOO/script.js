var $apples = $('#apples');
var $message = $('#message');
var $letters = $('#spaces');
var $guesses = $('#guesses');
var $replay = $('#replay');
    
var randomWord = (function () {
  var words = ['apple', 'banana', 'orange','pear', 'mango'];

  return function () {
    var idx = Math.floor(Math.random() * words.length);
    var chosen = words[idx];
    words.splice(idx, 1);
    return chosen;
  };
}());

var Game = {
  guesses: 6,
  createBlanks: function () {
    var spaces = (new Array(this.word.length + 1)).join('<span></span>');

    $letters.find('span').remove();
    $letters.append(spaces);
    this.$spaces = $('#spaces span');
  },
  displayMessage: function (text) {
    $message.text(text);
  },
  toggleReplayLink: function (which) {
    $replay.toggle(which);
  },
  fillBlanksFor: function (letter) {
    var self = this;

    self.word.forEach(function (l, i) {
      if (letter === l) {
        self.$spaces.eq(i).text(letter);
        self.correct_spaces += 1; 
      }
    });
  },
  duplicateGuess: function (letter) {
    return this.letters_guessed.includes(letter);
  },
  renderIncorrectGuess: function (letter) {
    this.incorrect += 1;
    this.renderGuess(letter);
    this.setClass();
  },
  setClass: function () {
    $apples.removeClass().addClass('guess_' + this.incorrect);
  },
  renderGuess: function (letter) {
    // $guesses.append('<span>' + letter + '</span>'); Alternative solution
    $('<span>', {text: letter}).appendTo($guesses);
  },
  processGuess: function (e) {
    var letter = String.fromCharCode(e.which);

    if (notALetter(e.which)) { return; }
    if (this.duplicateGuess(letter)) { return; }

    if ($.inArray(letter, this.word) !== -1) {
      this.fillBlanksFor(letter);
      this.renderGuess(letter);
      this.letters_guessed.push(letter);

      if (this.correct_spaces === this.$spaces.length) {
        this.result('win', 'You win!');
      }
    } else {
      this.renderIncorrectGuess(letter);
    }
    
    if (this.incorrect === this.guesses) {
      this.result('lose', 'Sorry, you are out of guesses!');
    }
  },
  emptyGuesses: function () {
    $guesses.find('span').remove();
  },
  result: function (status, message) {
    this.unbind();
    this.setBackground(status);
    this.displayMessage(message);
    this.toggleReplayLink(true);
  },
  setBackground: function (status) {
    $('body').removeClass().addClass(status);
  },
  resetBackground: function () {
    $('body').removeClass();
  },
  unbind: function () {
    $(document).off('.game');
  },
  bind: function () {
    $(document).on('keypress.game', this.processGuess.bind(this));
  },
  init: function () {
    this.incorrect = 0;
    this.letters_guessed = [];
    this.correct_spaces = 0;
    this.word = randomWord();

    if (!this.word) {
      this.displayMessage('Sorry, I\'ve run out of words!');
      this.toggleReplayLink(false);
      return this;
    }
  
    this.word = this.word.split('');

    this.resetBackground();
    this.bind();
    this.setClass();
    this.toggleReplayLink(false);
    this.emptyGuesses();
    this.createBlanks();
    this.displayMessage('');
  },
};

function notALetter(code) {
  var a_code = 97;
  var z_code = 122;

  return code < a_code || code > z_code;
}

$replay.on('click', function (e) {
  e.preventDefault();
  Object.create(Game).init();
});

var game = Object.create(Game).init();
game;




