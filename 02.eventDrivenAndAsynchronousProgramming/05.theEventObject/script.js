document.addEventListener('click', function (event) {
    var element = event.target;
    var p = document.getElementById('message');
    p.textContent = element;
});