// Event: click
// Element that receives the event: button
// Function: trigger an alert message
function displayAlert() {
    var message = document.getElementById('message').value;
    alert(message);
}
// Register the function as event listener
document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('alert');
    // button.addEventListener('click', displayAlert);
    button.onclick = displayAlert;
});


// var button = document.getElementById('alert');

// document.addEventListener('DOMContentLoaded', function () {
//     button.addEventListener('click', function () {
//         var message = document.getElementById('message').value;
//         alert(message);
//     });
// });