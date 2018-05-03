$(function () {
  var $main = $("main");
  var $header = $("body > header");
  $("header").insertBefore($main);
  $("main h1").insertBefore("nav");
  $("header").first().insertBefore("main article p");
  $("figure").last().insertBefore($("figure").first());
  $("figcaption").last().appendTo($("figure").first());
  $("figcaption").first().appendTo($("figure").last());
});