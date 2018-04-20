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

    if ($('.project-img-1').visible(true)) {
      console.log("blocker");
      $( ".project-img-1" ).addClass( "slideboxinanim" );
    }

    if ($('.project-img-2').visible(true)) {
      console.log("blocker");
      $( ".project-img-2" ).addClass( "slideboxinanim" );
    }

    if ($('.project-img-3').visible(true)) {
      console.log("blocker");
      $( ".project-img-3" ).addClass( "slideboxinanim" );
    }

    if ($('.project-img-4').visible(true)) {
      console.log("blocker");
      $( ".project-img-4" ).addClass( "slideboxinanim" );
    }

    if ($('.about1').visible(true)) {
      console.log("blocker");
      $( ".about1" ).addClass( "animated fadeInUp" );
    }

    if ($('.about2').visible(true)) {
      console.log("blocker");
      $( ".about2" ).addClass( "animated fadeInUp" );
    }

    if ($('.about3').visible(true)) {
      console.log("blocker");
      $( ".about3" ).addClass( "animated fadeInUp" );
    }

    if ($('.project-desc-container-1').visible(true)) {
      console.log("blocker");
      $( ".project-desc-container-1" ).addClass( "animated fadeInUp" );
    }

    if ($('.project-desc-container-2').visible(true)) {
      console.log("blocker");
      $( ".project-desc-container-2" ).addClass( "animated fadeInUp" );
    }

    if ($('.project-desc-container-3').visible(true)) {
      console.log("blocker");
      $( ".project-desc-container-3" ).addClass( "animated fadeInUp" );
    }

    if ($('.project-desc-container-4').visible(true)) {
      console.log("blocker");
      $( ".project-desc-container-4" ).addClass( "animated fadeInUp" );
    }

    if ($('.project-title-h1').visible(true)) {
      console.log("blocker");
      $( ".project-title-h1" ).addClass( "animated fadeInUp" );
    }

  });

});
