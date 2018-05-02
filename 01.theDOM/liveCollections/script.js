var list = document.querySelector('#list');
var listItems = document.getElementsByClassName('list-item');

console.log(listItems.length);

var newItem = document.createElement('p');
newItem.className = 'list-item';
list.appendChild(newItem);

console.log(listItems.length);