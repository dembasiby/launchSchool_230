$(function() {
  var chosenShapes = [];

  function resetPosition(shape) {
    $(shape).offset({
      top: shape.startX,
      left: shape.startY,
    });
  }
  
  $('form').on('submit', function(e) {
    e.preventDefault();
  
    // select the checked shape
    // identify it as the shape object in the canvas
    var id = $(':radio:checked').val() + 'Shape';
    var elem = $('#' + id);
    
    // add the starting coordinates to chosen shape
    // add the ending coordinates to chosen shape
    elem.startX = $('#startingX').val(), 
    elem.startY = $('#startingY').val(),
    elem.endX   = $('#endingX').val();
    elem.endY   = $('#endingY').val();
    resetPosition(elem);

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
      }, {
        duration: 1000,
        complete: resetPosition(shape),
      });
    });
  });

  $('#stop').on('click', function(e) {
    e.preventDefault();

    chosenShapes.forEach(function(shape) {
      $(shape).stop();

    });
  });
});