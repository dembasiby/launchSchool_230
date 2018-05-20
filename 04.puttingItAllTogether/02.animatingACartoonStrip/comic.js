$(function () {
  var $blinds = $('[id^=blind]');
  var SPEED = 250;
  var DELAY = 1500;

  $blinds.each(function(i) {
    var $blind = $blinds.eq(i);
    $blind.delay(i * DELAY).animate({
      top: $(this).css('height').match(/[0-9]/)[0] + top,
      height: 0
    }, {
      duration: SPEED,
    });
  });
});