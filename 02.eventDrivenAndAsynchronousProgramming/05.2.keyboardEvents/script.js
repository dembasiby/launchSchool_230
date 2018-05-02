function display(event) {
  var tbody = document.querySelector('table tbody');
  var tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${event.type}</td>
    <td>${event.which}</td>
    <td>${event.key}</td>
    <td>${event.shiftKey}</td>
    <td>${event.altkey}</td>
    <td>${event.ctrlKey}</td>
    <td>${event.metaKey}</td>
  `;

  tbody.appendChild(tr);
  document.body.scrollTop = document.body.scrollHeight;
}

document.addEventListener('keydown', display);
document.addEventListener('keyup', display);
document.addEventListener('keypress', display);

document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('#clear');
  button.addEventListener('click', function () {
    var tbody = document.querySelector('table', 'tbody');
    tbody.innerHTML = '';
  });
});


        