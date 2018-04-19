// A $( document ).ready() block.
$( document ).ready(function() {
    $("#thisdiv").niceScroll({cursorcolor:"#00F"});
  $("body").niceScroll();

  $(".blocker").inViewport(function(px){
      if(px) $(this).addClass("slideboxinanim") ;
  });

});
