$(function () {
  var $grocery_list = $("#grocery_list");

  $("form").submit(function (e) {
    e.preventDefault();
    
    var $form = $("form");
    var items = $form.find("#items").val();
    var quantity = $form.find("#quantity").val();
    if (!quantity) { quantity = "1"; }
    var listItem = quantity + " " + items;

    $("<li>" + listItem +"</li>").appendTo($grocery_list);
    $form[0].reset();
  });
});