$(function() {
  $("nav a").on("mouseenter", function() {
    $(this).next("ul").css({
      display: "block"
    });
  });

  $("nav").on("mouseleave", function() {
    $(this).find("ul ul").css({
      display: "none"
    });
  });

  $(".button").on("click", function(e) {
    e.preventDefault();

    $(this).addClass("clicked");
  });

  $("button").on("click", function() {
    $(this).addClass("clicked");
  });

  $(".toggle").on("click", function(e) {
    e.preventDefault();

    if ($(this).next(".accordion").hasClass("opened")) {
      $(this).next(".accordion").removeClass("opened");
    }
    else {
      $(this).next(".accordion").addClass("opened");
    }
  });

  $("form").on("submit", function(e) {
    e.preventDefault();
    var cc_number = $(this).find("[type=text]").val(),
        odd_total = 0,
        even_total = 0;

    cc_number = cc_number.split("").reverse();
    for (var i = 0, len = cc_number.length; i < len; i++) {
      if (i % 2 == 1) {
        cc_number[i] = (+cc_number[i] * 2) + "";
        if (cc_number[i].length > 1) {
          cc_number[i] = +cc_number[i][0] + +cc_number[i][1];
        }
        else {
          cc_number[i] = +cc_number[i];
        }
        odd_total += cc_number[i];
      }
      else {
        even_total += +cc_number[i];
      }
    }
    if ((odd_total + even_total) % 10 == 0) {
      $(this).find(".success").show();
      $(this).find(".error").hide();
    }
    else {
      $(this).find(".error").show();
      $(this).find(".success").hide();
    }
  });

  $("ul a").on("click", function(e) {
    e.preventDefault();

    var month = $(this).text(),
        $stone = $("#birthstone");

    switch (month) {
      case "January":
        $stone.text("Your birthstone is garnet");
        break;
      case "February":
        $stone.text("Your birthstone is amethyst");
        break;
      case "March":
        $stone.text("Your birthstone is aquamarine or bloodstone");
        break;
      case "April":
        $stone.text("Your birthstone is diamond");
        break;
      case "May":
        $stone.text("Your birthstone is emerald");
        break;
      case "June":
        $stone.text("Your birthstone is pearl, moonstone, or alexandrite");
        break;
      case "July":
        $stone.text("Your birthstone is ruby");
        break;
      case "August":
        $stone.text("Your birthstone is peridot");
        break;
      case "September":
        $stone.text("Your birthstone is sapphire");
        break;
      case "October":
        $stone.text("Your birthstone is opal or tourmaline");
        break;
      case "November":
        $stone.text("Your birthstone is topaz or citrine");
        break;
      case "December":
        $stone.text("Your birthstone is turquoise, zircon, or tanzanite");
        break;
    }
  });
});
