var last = document.body.lastChild;

var text = document.createTextNode('This is a test.');
var paragraph = document.createElement('p');
paragraph.appendChild(text);
document.body.insertBefore(paragraph, last);

console.log(paragraph);
console.log(last);
var paragraph2 = paragraph.cloneNode(true);
document.body.insertBefore(paragraph2, last);
// document.body.appendChild(paragraph2);

// ANOTHER OPTION
// var paragraph = document.createElement('p');
// paragraph.textContent = 'This is a test.';
// document.body.appendChild(paragraph);

paragraph.remove();
paragraph2.remove();
