function walk(node, callback) {
  callback(node);

  var i;
  for (i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

function getElementsByTagName(tagName) {
  var elements = [];

  walk(document.body, function (node) {
    if (node.nodeName.toLowerCase() === tagName) {
      elements.push(node);
    }
  });

  return elements;
}

// function addClassToElement(tagName, className) {
//   var elements = Array.prototype.slice.call(
//     document.body
//     .getElementsByTagName(tagName)
//   );

//   elements.forEach(function (p) {
//     p.classList.add(className);
//   });
// }

// addClassToElement('p', 'article-text');

// var introDivs = document.getElementsByClassName('intro');

// for (var i = 0; i < introDivs.length; i += 1) {
//   walk(introDivs[i], function (node) {
//     if (node.nodeName === 'P') {
//       node.classList.add('article-text');
//       node.style.color = 'red';
//     }
//   });
// }

// for (var i = 0; i < introDivs.length; i += 1) {
//   var ps = introDivs[i].getElementsByTagName('p');
//   for (var j = 0; j < ps.length; j += 1) {
//     ps[j].classList.add('article-text');
//   }
// }

var paragraphs = document.querySelectorAll('.intro p');

for (var i = 0; i < paragraphs.length; i += 1) {
  paragraphs[i].classList.add('article-text');
}


