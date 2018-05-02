function walk(node, callback) {
  callback(node);

  var i;
  for (i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

var html;
var body;
var h1;
var words = [];
var count = 0;
var first = true;

// Starting with the document node, use the lastChild and childNodes
// properties to change the text color to red on the 'On the River' 
// heading and set its font size 48 pixels.

// var html = document.lastChild;
// var body = html.childNodes[2];
// var h1 = body.childNodes[3];
html = document.childNodes[1];
body = html.lastChild;
h1 = body.childNodes[1];
h1.style.color = 'red';
h1.style.fontSize = '48px';

body.childNodes.forEach(function (node) {
  if (node.nodeName === 'P') {
    count += 1;
  }
});

console.log(count);

function firstWord(node) {
  if (node.nodeName === 'P') {
    var p = node.textContent.trim();
    words.push(p.split(' ')[0]);
    // words.push(String(p.match(/\b\w+\b/)));
  }
}

walk(body, firstWord);
console.log(words);

function addClass(node) {
  if (node.nodeName === 'P') {
    if (first) {
      first = false;
    } else {
      node.classList.add('stanza');
    }
  }
}

walk(body, addClass);
