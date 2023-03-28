/* Modified from: https://codepen.io/Nuke66/pen/LgzRLW */
$(".readmore-link").on( 'click', function(e) {
  // record if our text is expanded
  var isExpanded = $(e.target).hasClass("expand");
  
  //close all open paragraphs
  $(".readmore.expand").removeClass("expand");
  $(".readmore-link.expand").removeClass("expand");
  
  // if target wasn't expand, then expand it
  var text = $(e.target).prev();
  if (!isExpanded){
    text.addClass("expand")
    $(e.target).addClass("expand");  
  } 
});
