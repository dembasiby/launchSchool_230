$(function() {
  var $slideshow = $("#slideshow");
  var $nav = $slideshow.find("ul");
  var $figure = $slideshow.find("figure");

  $nav.on("click", "a", function(e) {
    e.preventDefault();
    var $li = $(e.currentTarget).closest("li");

    $figure.filter(":visible").fadeOut(300);
    $figure.eq($li.index()).delay(300).fadeIn(300);

    $nav.find(".active").removeClass("active"); 
    $li.addClass("active");
  });
});