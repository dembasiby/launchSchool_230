$(function() {
  $("nav a").on("mouseenter", function() {
    $(this).next("ul").addClass("opened");
  });

  $("nav").on("mouseleave", function() {
    $(this).find("ul ul").removeClass("opened");
  });

  $("main a, ul a, button").on("click", function(e) {
    e.preventDefault();

    var $el = $(e.currentTarget);
    var month = $(this).text();
    var $stone = $("#birthstone");
    var message = "Your birthstone is ";
    var monthsMessage = {
      "January": "garnet",
      "February": "amethyst",
      "March": "bloodstone",
      "April": "diamond",
      "May": "emerald",
      "June": "pearl, moonstone, or alexandrite", 
      "July": "ruby",
      "August": "peridot", 
      "September": "sapphire",
      "October": "opal or tourmaline", 
      "November": "topaz or citrine", 
      "December": "turquoise, zircon, or tanzanite",
    };

    if ($el.hasClass("button") || $el.get(0).localName === "button") {
      $el.addClass("clicked");
    } else if ($el.hasClass("toggle")) {
      $el.next(".accordion").toggleClass("opened");
    } else if ($el.parent().is("li")) {
      $stone.text(message + monthsMessage[month]);
    }
  });

  $("form").on("submit", function(e) {
    e.preventDefault();
    var cc_number = $(this).find("[type=text]").val(),
      total = getLuhnTotal(cc_number),
      is_valid = total % 10 === 0;
      
    $(this).find(".success").toggle(is_valid);
    $(this).find(".error").toggle(!is_valid);
  });

  function getLuhnTotal(total) {
    var cc_number = total.split("").reverse(),
      odd_total = 0,
      even_total = 0;

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
    return odd_total + even_total;
  }
});