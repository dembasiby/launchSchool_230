$(function () {
  var $blinds = $('[id^=blind]');
  var SPEED = 250;
  var DELAY = 1500;

  $blinds.each(function(i) {
    var $blind = $blinds.eq(i);
    $blind.delay(i * DELAY + SPEED).animate({
      top: '+=' + $blind.height(),
      height: 0,
    }, SPEED);
  });
});