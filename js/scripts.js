$(document).foundation();

$(function(){
    $('#center').css({'height':(($(document).height())-162)+'px'});

    $(window).resize(function(){
    $('#center').css({'height':(($(document).height())-162)+'px'});
    });
});

$(document).foundation({
  orbit: {
      animation: 'fade', // Sets the type of animation used for transitioning between slides, can also be 'fade'
      navigation_arrows: false,
      slide_number: false,
      bullets: false, // Does the slider have bullets visible?
      timer: false, // Does the slider have a timer active? Setting to false disables the timer.
      variable_height: true, // Does the slider have variable height content?
  }
});

/*Menu Scroll*/
var scrollspeed = 1000;

$("#aboutb").click(function()
{
    scrollTo($("#about"), scrollspeed)
});

$("#resumeb").click(function()
{
	scrollTo($("#resume"), scrollspeed)
});

$("#galleryb").click(function()
{
	scrollTo($("#index"), scrollspeed)
});

/*Show Gallery*/
$("#galleryb").click(function(){
	$("#top").toggleClass("move");

});

/*Functions*/
function scrollTo(selector, speed, easing, offset) {

    if ($(selector)) {
        offset = (offset) ? offset : 0;
        speed = (speed) ? speed : 400;
        easing = (easing) ? easing : "swing";
        var ypos = $(selector).offset().top - offset;
 
        $('html, body').stop().animate({ scrollTop: ypos }, speed, easing);
    }
}