$(function () {
  var $header = $("body > header");
  $header.prependTo("body");
  $("main > h1").prependTo($header);
  var chinImage = $("main img").eq(1).remove();
  var babyImage = $("main img").eq(0);
  babyImage.prependTo($("figure:nth-of-type(2)"));
  chinImage.prependTo($("figure:first-of-type"));
  $("figure").appendTo("article");
});