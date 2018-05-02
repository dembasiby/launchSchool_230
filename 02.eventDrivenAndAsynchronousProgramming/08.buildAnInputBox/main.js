var cursorInterval;

document.addEventListener('DOMContentLoaded', function () {
  var textField = document.querySelector('.text-field');
  var content = document.querySelector('.content');
  
  textField.addEventListener('click', function (e) {
    e.stopPropagation();
    textField.classList.add('focused');

    while (!cursorInterval) {
      cursorInterval = setInterval(function () {
        textField.classList.toggle('cursor');
      }, 500);
    }
  });

  
  document.addEventListener('keydown', function (e) {
    if (textField.classList.contains('focused')) {
      // e.stopImmediatePropagation();
      if (e.key === 'Backspace') {
        content.textContent = content.textContent.slice(0, -1);
      } else {
        content.textContent += e.key;
      }
    }
  });
  
  
});

document.addEventListener('click', function (e) {
  clearInterval(cursorInterval)
  cursorInterval = null;
  var textField = document.querySelector('.text-field');
  textField.classList.remove('focused');
  textField.classList.remove('cursor');
  document.querySelector('.content').textContent = null;
});

