// A $( document ).ready() block.
$( document ).ready(function() {




  /*
  Start of starfield gen----------------------------------
  */
  var width = $( window ).width();
  var height = $( window ).height() + 18;


  // Returns width of browser viewport
  $( window ).width();
   console.log("vp "+$( window ).width());
  // Returns width of HTML document
  $( document ).width();
  console.log("html "+$( window ).height());

  var newField = '<canvas id="starfield" width="'+width+'" height="'+height+'"></canvas>'

  $( "#galaxy" ).html(newField);


  var newField2 = '<canvas id="grad" width="'+width+'" height="'+height+'"></canvas>'

  $( "#gradient" ).html(newField2);


  var canvas2 = document.getElementById("grad");
  var context2 = canvas2.getContext("2d");

  gr = context2.createLinearGradient(0, 0, 0, height/2);
  gr.addColorStop(1,"#121b24");
  gr.addColorStop(0,"black");
  context2.fillStyle = gr;
  context2.fillRect(0, 0, width, height);


  function getRandom(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  var canvas = document.getElementById("starfield"),
  context = canvas.getContext("2d"),
  stars = 200 * (width / 1000),
  colorrange = [0,60,240];
  for (var i = 0; i < stars; i++) {
      var x = Math.random() * canvas.offsetWidth;
      y = Math.random() * canvas.offsetHeight,
      radius = Math.random() * 3.3,
      hue = colorrange[getRandom(0,colorrange.length - 1)],
      sat = getRandom(50,100);
      context.beginPath();
      //context.arc(x, y, radius, 0, 360);
      context.rect(x,y,radius,radius);
      context.fillStyle = "hsl(" + hue + ", " + sat + "%, 100%)";
      context.fill();
  }

$( window ).resize(function() {

    var width = $( window ).width();
    var height = $( window ).height() + 18;


    // Returns width of browser viewport
    $( window ).width();
     console.log("vp "+$( window ).width());
    // Returns width of HTML document
    $( document ).width();
    console.log("html "+$( window ).height());

    var newField = '<canvas id="starfield" width="'+width+'" height="'+height+'"></canvas>'

    $( "#galaxy" ).html(newField);


    var newField2 = '<canvas id="grad" width="'+width+'" height="'+height+'"></canvas>'

    $( "#gradient" ).html(newField2);


    var canvas2 = document.getElementById("grad");
    var context2 = canvas2.getContext("2d");

    gr = context2.createLinearGradient(0, 0, 0, height/2);
    gr.addColorStop(1,"#121b24");
    gr.addColorStop(0,"black");
    context2.fillStyle = gr;
    context2.fillRect(0, 0, width, height);


    function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    var canvas = document.getElementById("starfield"),
    context = canvas.getContext("2d"),
    stars = 200 * (width / 1000),
    colorrange = [0,60,240];
    for (var i = 0; i < stars; i++) {
        var x = Math.random() * canvas.offsetWidth;
        y = Math.random() * canvas.offsetHeight,
        radius = Math.random() * 3.3,
        hue = colorrange[getRandom(0,colorrange.length - 1)],
        sat = getRandom(50,100);
        context.beginPath();
        //context.arc(x, y, radius, 0, 360);
        context.rect(x,y,radius,radius);
        context.fillStyle = "hsl(" + hue + ", " + sat + "%, 100%)";
        context.fill();
    }

  });
    /*
    End of starfield gen-----------------------------------
    */




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
      $( ".about1" ).addClass( "animated fadeInUp visible" );
    }

    if ($('.about2').visible(true)) {
      console.log("blocker");
      $( ".about2" ).addClass( "animated fadeInUp visible" );
    }

    if ($('.about3').visible(true)) {
      console.log("blocker");
      $( ".about3" ).addClass( "animated fadeInUp visible" );
    }

    if ($('.project-desc-container-1').visible(true)) {
      console.log("blocker");
      $( ".project-desc-container-1" ).addClass( "animated fadeInUp visible" );
    }

    if ($('.project-desc-container-2').visible(true)) {
      console.log("blocker");
      $( ".project-desc-container-2" ).addClass( "animated fadeInUp visible" );
    }

    if ($('.project-desc-container-3').visible(true)) {
      console.log("blocker");
      $( ".project-desc-container-3" ).addClass( "animated fadeInUp visible" );
    }

    if ($('.project-desc-container-4').visible(true)) {
      console.log("blocker");
      $( ".project-desc-container-4" ).addClass( "animated fadeInUp visible" );
    }

    if ($('.project-title-h1').visible(true)) {
      console.log("blocker");
      $( ".project-title-h1" ).addClass( "animated fadeInUp visible" );
    }

    if ($('.proof1').visible(true)) {
      console.log("blocker");
      $( ".proof1" ).addClass( "animated fadeInUp visible" );
    }

    if ($('.proof2').visible(true)) {
      console.log("blocker");
      $( ".proof2" ).addClass( "animated fadeInUp visible" );
    }

  });

//Scroll to events for navbar

$('.nav-about').on('click', function(event) {
  $('html, body').animate({
    scrollTop: $("#about").offset().top
}, 1000);
});

$('.nav-projects').on('click', function(event) {
  $('html, body').animate({
    scrollTop: $(".project-title-h1").offset().top
}, 1000);
});

$('.nav-contact').on('click', function(event) {
  $('html, body').animate({
    scrollTop: $(".email1").offset().top
}, 1000);
});


});
