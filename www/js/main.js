$( document ).ready(function(){


// Bind the swipeHandler callback function to the swipe event on div.box
$( document ).on( "swiperight", swipeOpen );
$( document ).on( "swipeleft", swipeClose );
// Callback function references the event target and adds the 'swipe' class to it
function swipeOpen( event ){   $( "#panel" ).panel( "open" );}
function swipeClose( event ){   $( "#panel" ).panel( "close" );}


});
