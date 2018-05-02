setTimeout(function () {
  console.log('hello, world!');
}, 3000);

// var id = setInterval(function () { console.log('Hello');}, 1000);
// clearInterval(id);
var counter;

function startCounting() {
  var i = 1;

  counter = setInterval(function () {  
    console.log(i);
    i += 1;
  }, 1000);
}

function stopCount(logger) {
  clearInterval(logger);
}

startCounting();
stopCount(counter);
