const iterateAndLog = function (array) {
  array.forEach(function (item) {
    console.log(item);
  });
};

const recurseAndLog = function (array) {
  console.log(array);
  if (array.length > 0) {
    console.log(array[0]);
    recurseAndLog(array.slice(1));
  }
}

var letters = ['h', 'e', 'l', 'l', 'o'];

// iterateAndLog(letters);
recurseAndLog(letters);

console.log('------------------------');

// const walk = function (node) {
//   console.log(node.nodeName);
//   var i;
//   for (i = 0; i < node.childNodes.length; i += 1) {
//     walk(node.childNodes[i]);
//   }
// };

// walk(document.body);

function walk(node, callback) {
  callback(node);
  var i;
  for (i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

function logNode(node) {
  console.log(node.nodeName);
}

walk(document.body, logNode);

