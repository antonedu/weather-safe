$(document).scroll(function() {
  var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
  if (scrollPercent > 55) {
    $('#box4').addClass("slideInLeft");
    $('#box4').show();
  }
});

$(document).scroll(function() {
  var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
  if (scrollPercent > 70) {
    $('#box5').addClass("slideInRight");
    $('#box5').show();
  }
});

$(document).scroll(function() {
  var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
  if (scrollPercent > 85) {
    $('#box6').addClass("slideInLeft");
    $('#box6').show();
  }
});

$(document).ready(function() {
    $('.animation').addClass("startanimation");
});
