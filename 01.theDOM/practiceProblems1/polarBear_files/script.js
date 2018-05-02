function walk(node, callback) {
  callback(node);

  var i;
  for (i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}
var images = [];

walk(document, function (node) {
  if (node.nodeName === 'IMG') {
    images.push(node);
  }
});

console.log(images.length);

var pngCount = images.filter(function (img) {
  return img.getAttribute('src').match(/png$/);
}).length;

console.log(pngCount);

walk(document, function (node) {
  if (node.nodeName === 'A') {
    node.style.color = 'red';
  }
});