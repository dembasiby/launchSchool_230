$(function() {
  function highlight(e) {
    $(this).toggleClass("highlight");
  }

  function displayParentChildRelationship(e) {
    $(e.currentTarget).addClass("child");
    $(e.delegateTarget).addClass("parent");
  }

  // Basic event binding
  var $simple = $(".simple");

  $simple.on("click", highlight);

  $simple.filter(".clone").clone().appendTo($("#clone"));

  // Delegated event binding
  var $delegated = $("#delegated");

  $delegated.on("click", "a", highlight);

  $delegated.find("a").clone().appendTo($("#delegate_clone"));

  // Passing false as callback to cancel event
  $(document).on("click", "a", false);

  // Namespacing events
  $("#namespaced").on("click.alert", function(e) {
    alert("Now removing only the alert event");
    $(this).off("click.alert");
  });

  // Multiple events bound with options object
  $("#text").on({
    focus: function() { $(this).addClass("focused"); },
    keyup: function(e) {
      $("#which b").text(e.which);
      $(this).val("");
    },
    blur: function() { $(this).removeClass("focused"); }
  });

  // Create a new event object and use it to trigger an event with properties pre-set
  $("#trigger_k").on("click", function(e) {
    e.preventDefault();

    var keyup_event = $.Event({
      type: "keyup"
    });

    keyup_event.which = 75;

    $("#text").trigger(keyup_event);
  });

  // Use which within a mouse event to determine which mouse button pressed
  $("#check_mouse_button").on("mousedown", function(e) {
    e.preventDefault();
    $(this).find("b").text(e.which);
  });

  // currentTarget and delegateTarget DOM elements
  $("#parent").on("click", "p", displayParentChildRelationship.bind(window));

  // Position and offset
  $("#pinboard p").on("click", function() {
    var $p = $(this),
        position = $p.position(),
        offset = $p.offset();

    $("#position").html("Left: " + position.left + "<br />Top: " + position.top);
    $("#offset").html("Left: " + offset.left + "<br />Top: " + offset.top);
  });
});
