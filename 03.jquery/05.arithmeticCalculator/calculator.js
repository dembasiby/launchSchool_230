$(function () {
  $("form").submit(function (e) {
    e.preventDefault();

    var $result = $("h1");
    var numerator = Number($("#numerator").val());
    var denominator = Number($("#denominator").val());
    var operator = $("#operator").val();

    if (operator === "+") {
      $result.text(numerator + denominator);
    } else if (operator === "-") {
      $result.text(numerator - denominator);
    } else if (operator === "*") {
      $result.text(numerator * denominator);
    } else if (operator === "/") {
      $result.text(numerator / denominator);
    }  
  });
});