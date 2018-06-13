
var words = ['apple', 'banana', 'orange','pear'];

function randomWord() {
  var idx = Math.floor(Math.random() * words.length);
  var chosen = words[idx];
  words.splice(idx, 1);
  return chosen;
}


