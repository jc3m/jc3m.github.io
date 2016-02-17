function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

var birth = new Date();
birth.setMonth(7);
birth.setDate(15);
birth.setYear(1997);
var a = calculateAge(birth);

var age = document.getElementById('age');
age.innerHTML = a + " years";

var time = 250;

$(document).ready(function() {
  $(".nav a").each(function() {
    $(this).css("opacity", 0);
  });
  $("header").css("display", "none");

  setTimeout(function() {
    fadeIn();
  }, 250);
});

function fadeIn() {
  $(".nav a").each(function() {
    var $link = $(this);

    setTimeout(function() {
      $link.fadeTo(400, 1.0);
    }, time);
    time += 125;
  });

  setTimeout(function() {
    $("header").animate({
      top: "0"
    }, {
      queue: false,
      duration: 700
    });
    $("header").fadeTo(900, 1.0);
  }, 1400);
}
