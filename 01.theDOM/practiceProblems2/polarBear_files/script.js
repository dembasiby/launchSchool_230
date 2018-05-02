function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

var h2 = document.querySelectorAll('h2');
var h2WordCount = [];

for (var i = 0; i < h2.length; i += 1) {
  var h = h2[i];
  h2WordCount.push(h.textContent.split(' ').length);
}

console.log(h2WordCount);

// console.log(h2[0]);

// for (var i = 0; i < h2.length; i += 1) {
//   if (h2[i].textContent === 'Contents') {
//     console.log(h2[i]);
//     break;
//   }
// }
console.log(document.querySelector('#toc'));
console.log(document.getElementById('toc'));
console.log(document.querySelectorAll('.toc')[0]);

var links = document.querySelectorAll('.toc a');
for (let i = 0; i < links.length; i += 1) {
  if (i % 2 !== 0) {
    links[i].style.color = 'green';
  }
}

var captions = document.getElementsByClassName('thumbcaption');
for (let i = 0; i < captions.length; i += 1) {
  if (i % 2 !== 0) {
    console.log(captions[i].textContent.trim());
  }
}


