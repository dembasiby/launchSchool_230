var quoteInfo = document.getElementById('quote-template').innerHTML;
var template = Handlebars.compile(quoteInfo);

Handlebars.registerHelper("makeLink", function(text, url) {
  text = Handlebars.Utils.escapeExpression(text);
  url = Handlebars.Utils.escapeExpression(url);

  var theLink = '<a href="' + url + '">' + text + '</a>';

  return new Handlebars.SafeString(theLink);
});

Handlebars.registerHelper("changeColor", function(text, options) {
  text = Handlebars.Utils.escapeExpression(text);

  if (options.hash.color === "red") {
    return new Handlebars.SafeString("<span class='redText'>" + text + "</span>")
  } else if (options.hash.color === "blue") {
    return new Handlebars.SafeString("<span class='blueText'>" + text + "</span>")
  } else {
    return new Handlebars.SafeString("<span class='greenText'>" + text + "</span>")
  }
});

var data = template({
  name: "Yogi Berra",
  quotes: [
    {quote: "If you don't know where you are going, you might wind up someplace else."},
    {quote: "You better cut the pizza in four pieces because I'm not hungry enough to eat six."},
    {quote: "I never said most of the things I said."},
    {quote: "Nobody goes there anymore because it's too crowded."}
  ],
  yogiBio: "<i>Lawrence Peter 'Yogi' Berra (May 12, 1925 - September 22, 2015) was an American professional baseball catcher, manager, and coach who played 19 seasons in Major League Baseball (MLB) (1946 - 63, 1965), all but the last for the New York Yankees. An 18-time All-Star and 10-time World Series champion as a player, Berra had a career batting average of .285, while compiling 358 home runs and 1,430 runs batted in.</i>",
});

document.getElementById("quoteData").innerHTML += data;