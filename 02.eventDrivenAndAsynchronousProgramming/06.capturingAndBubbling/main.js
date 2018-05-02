var elem0 = document.querySelector('#elem0');
var elem1 = document.querySelector('#elem1');
var elem4 = document.querySelector('#elem4');

elem0.addEventListener('click', function(event) {
  alert(event.currentTarget.tagName);
});

elem1.addEventListener('click', function(event) {
  alert(event.currentTarget.tagName);
}, true);

elem4.addEventListener('click', function(event) {
  alert(event.currentTarget.tagName);
});