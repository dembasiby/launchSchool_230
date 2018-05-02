document.addEventListener('DOMContentLoaded', function () {
  var answer = Math.floor(Math.random() * 100) + 1;
  var input = document.getElementById('guess');
  var form = document.querySelector('form');
  var paragraph = document.querySelector('p');
  var link = document.querySelector('a');
  var subButton = document.querySelector('.subButton');
  var guesses = 0;

  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    subButton.disabled = false;
    paragraph.textContent = 'Guess a number from 1 to 100';
    guesses = 0;
    subButton.classList.remove('guessed');
    subButton.classList.add('active');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var guess = parseInt(input.value, 10);
    var message;
    guesses += 1;
    
    if (guess >= 1 && guess <= 100) {
      if (guess === answer) {
        message = 'You guessed it! It took you ' + guesses + ' guesses.';
        subButton.classList.remove('active');
        subButton.classList.add('guessed');
        subButton.disabled = true;
      } else if (guess < answer) {
        message = 'My number is greater than ' + String(guess);
      } else {
        message = 'My number is lower than ' + String(guess);
      } 
    } else {
      message = 'Please provide a valid number between 1 and 100.';
    }

    paragraph.textContent = message;
  });

  link.addEventListener('click', function (e) {
    e.preventDefault;
    newGame();
  });
});

