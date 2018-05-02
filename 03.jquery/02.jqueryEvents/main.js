$(function () {
  var $p = $("p");
  var OUTPUT = "Your favorite fruit is ";

  $("a").click(function (e) {
    e.preventDefault();
    // $("p").text("My favorite fruits are " + $(e.target).text() + ".");
    var $anchor = $(this);
    $p.text(OUTPUT + $anchor.text());
  }); 

  $("form").submit(function (e) {
    e.preventDefault();
    var $text = $(e.target).find("input[type=text]");
    $p.text(OUTPUT + $text.val());
  });
});