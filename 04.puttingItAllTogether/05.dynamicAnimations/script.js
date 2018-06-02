$(function() {
  var chosenShapes = [];
  
  $('form').on('submit', function(e) {
    e.preventDefault();
  
    // select the checked shape
    // identify it as the shape object in the canvas
    var id = $(':radio:checked').get(0).id + 'Shape';
    var elem = $('#' + id);
    
    // add the starting coordinates to chosen shape
    elem.offset({
      top: $('#startingX').val(), 
      left: $('#startingY').val(),
    });

    // add the ending coordinates to chosen shape
    elem.endX = $('#endingX').val();
    elem.endY = $('#endingY').val();

    // display the chosen shape
    elem.css('display', 'inline-block');

    // add the chosen shape in the chosenShapes array
    chosenShapes.push(elem);
  });

  $('#start').on('click', function(e) {
    e.preventDefault();

    chosenShapes.forEach(function(shape) {
      $(shape).animate({
        top: shape.endX,
        left: shape.endY,
      }, 1000);
    });
  });

  $('#stop').on('click', function(e) {
    e.preventDefault();

    chosenShapes.forEach(function(shape) {
      $(shape).stop();
    });
  });
});