$(document).ready(function() {
  $(".portfolio-item").hover(function() {
    $("this").clearQueue();
    $(".item-in", this).stop(true);
    $("h1", this).stop(true);
    $("a", this).stop(true);
    $(".item-in", this).fadeTo(300, 1.0);
    $("h1", this).animate({
      top: "18px"
    }, 320);
    $("a", this).animate({
      top: "32px"
    }, 320);
  }, function() {
    $("this").clearQueue();
    $(".item-in", this).stop(true);
    $("h1", this).stop(true);
    $("a", this).stop(true);
    $(".item-in", this).fadeTo(300, 0);
    $("h1", this).animate({
      top: "10px"
    }, 320);
    $("a", this).animate({
      top: "48px"
    }, 320);
  });
});
