// A $( document ).ready() block.
$( document ).ready(function() {
  //enabling niceScroll plugin
    $("#thisdiv").niceScroll({cursorcolor:"#00F"});
  $("body").niceScroll();

  console.log("js is on");

//triggers when window is scrolled
  $(window).bind('scroll', function(){
    console.log("scroll!");
    //if any part of the skills block is visible then start entrance anim
    if ($('.blocker').visible(true)) {
      console.log("blocker");
      $( ".blocker" ).addClass( "slideboxinanim" );
    }

  });

});
