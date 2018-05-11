$(function () {
  var frameLength = 13; // delay between each frame in milliseconds
  var speed = 400;      // duration of animation in milliseconds
  var steps = Math.round(speed / frameLength);
  var endTop = 250;
  var endLeft = 500;
  var paragraph = document.querySelector("p"); // p has position absolute for this snippet
  var i = 0;

  var update = function() {
    paragraph.style.top = endTop * (i / steps) + "px";
    paragraph.style.left = endLeft * (i / steps) + "px";
    i += 1;
    i < steps && setTimeout(update, frameLength);
  }

  update();  // kick off the animation loop
});