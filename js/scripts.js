$(document).foundation();

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