// EVENT: click
// 
// 1. identify the event => click
// 2. 
function moveX(e) {
    var evt = window.event || e;
    var x = document.querySelector('.x');
    x.style.left = evt.clientX + 'px';
    x.style.top = evt.clientY + 'px';
}

function changeColor(e) {
    var evt = window.event || e;
    var horizontal = document.querySelector('.horizontal');
    var vertical = document.querySelector('.vertical');

    if (evt.key === 'b') {
        horizontal.style.background = 'blue';
        vertical.style.background = 'blue';
    } else if (evt.key === 'g') {
        horizontal.style.background = 'green';
        vertical.style.background = 'green';
    } else if (evt.key === 'r') {
        horizontal.style.background = 'red';
        vertical.style.background = 'red';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('mousemove', moveX);
    document.addEventListener('keydown', changeColor);
});