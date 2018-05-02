var a = 38;
a += 4;
// console.log(a);

// Define a function logger that logs its parameter
function logger(object) {
  console.log(object);
}

var numbers = [3, 7, 25, 39];
// numbers.forEach(logger);
// console.log(numbers.length);

// Asynchronous code
// console.log('=> Asynchronous code: ');
// setTimeout(function () {
//   console.log('=> Asynchronous code: ');
// }, 1000);

// setTimeout(function () {
//   console.log('!');
// }, 4000);

// setTimeout(function () {
//   console.log('world');
// }, 3000);

// setTimeout(function () {
//   console.log('hello');
// }, 2000);

// console.log('hello')
function delayCode() {
  for (var i = 1; i <= 10; i += 1) {
    (function () {
      var j = i;
      setTimeout(function () {
        console.log(j);
      }, i * 1000);
    }()); 
  }
}


// delayCode();
console.log('delayCode 2 starting');

function delayCode2() {
  for (var i = 1; i <= 5; i += 1) {
    setTimeout((function (e) {
      return function () {
        console.log(e);
      };
    })(i), i * 1000);
  }
}

delayCode2();

function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}

afterNSeconds(function () {
  console.log('hello, world !');
}, 10);