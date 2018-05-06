$(function() {
  function closeModal(element) {
    $(element).click(function(e) {
      e.preventDefault();
      $("#team li a ~ div").fadeOut(400);
    });
  }

  $("#team li > a").click(function (e) {
    e.preventDefault();
    var $link = $(this);
    $link.siblings(".modal").css({
      top: $(window).scrollTop() + 30,
    });

    $link.nextAll("div").fadeIn(400);  
  });

  closeModal(".modal_layer");
  closeModal(".close");
});