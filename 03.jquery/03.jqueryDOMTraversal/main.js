$(function () {
  var $p = $("p");
  $p.parent(".highlight").css("color", "blue");
  // $p.closest(".highlight").css("color", "red");

  $("#javascript").closest("ul").addClass("categories");
  $("#javascript").closest("ul").css("background-color", "green");
});