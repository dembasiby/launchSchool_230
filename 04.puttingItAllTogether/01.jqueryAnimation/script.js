$(function () {
  // var frameLength = 13; // delay between each frame in milliseconds
  // var speed = 400;      // duration of animation in milliseconds
  // var steps = Math.round(speed / frameLength);
  // var endTop = 250;
  // var endLeft = 500;
  // var paragraph = document.querySelector('p'); // p has position absolute for this snippet
  // var i = 0;

  // var update = function() {
  //   paragraph.style.top = endTop * (i / steps) + 'px';
  //   paragraph.style.left = endLeft * (i / steps) + 'px';
  //   i += 1;
  //   i < steps && setTimeout(update, frameLength);
  // };

  // update();  // kick off the animation loop

  var $p = $('p');
  // $p.fadeOut();
  // $p.fadeIn();
  // $p.fadeToggle();
  // $p.fade v vTo(400, .5);

  $p.slideToggle({
    duration: '400',
    easing: 'linear',
    complete: function () {
      console.log('Animation complete!');
    }
  }).slideDown(5000);


  // $p.animate({
  //   left: 500,
  //   top: 250,
  // }, {
  //   duration: 1000,
  //   complete: function () {
  //     $(this).text('All done!');
  //   },
  // });

});