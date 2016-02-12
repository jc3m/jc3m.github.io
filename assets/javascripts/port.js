$(document).ready(function() {
  $(".portfolio-item").hover(function() {
    $(".item-in", this).fadeIn({queue: false, duration: 300});
    $("h1", this).animate({
      top: "+=12px"
    }, 320);
    $("a", this).animate({
      top: "-=18px"
    }, 320);
  }, function() {
    $(".item-in", this).fadeOut({queue: false, duration: 300});
    $("h1", this).animate({
      top: "-=12px"
    }, 320);
    $("a", this).animate({
      top: "+=18px"
    }, 320);
  });
});
