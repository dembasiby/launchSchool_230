function walk(node, callback) {
  callback(node);
  var i;

  for (i = 0; i < node.childNodes.length; i += 1) {
    console.log(node.childNodes[i].nodeName);
    walk(node.childNodes[i], callback);
  }
}

var count = 0;

walk(document.body, function () {
  count += 1;
});

console.log('connected');
