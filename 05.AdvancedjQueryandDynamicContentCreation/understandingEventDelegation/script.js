$('#list').on('click', 'a', function(e) {
  var elem = $(this);
  if (elem.is("[href^='http']")) {
    elem.attr("target", "_blank");
  }

});

$('#list').append('<li><a href="http://new-domain.com">Item #5</a></li>')
