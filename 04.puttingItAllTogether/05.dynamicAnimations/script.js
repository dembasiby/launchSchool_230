$(function() {
  var chosenShapes = [];
  
  function reset(shape) {
    shape.offset({
      top: $('#startingX').val(), 
      left: $('#startingY').val(),
    });
  }
  
  $('form').on('submit', function(e) {
    e.preventDefault();
  
    // select the checked shape
    // identify it as the shape object in the canvas
    var id = $(':radio:checked').get(0).id + 'Shape';
    var elem = $('#' + id);
    
    // add the starting coordinates to chosen shape
    reset(elem);

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
      reset(shape);
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