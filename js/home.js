/** Changing Page Depends on screen width **/
window.onresize = function() {
  var href = window.location.href.split("/");
  var html_location = href[href.length-1];

  if (window.innerWidth < 768 && html_location !== "index2.html") {
    // Refreshing page automatically when viewport size change 
    document.location.reload(true);
    window.location = "index-mobile.html";
  }
}
/* ----------------------------------------------------------------------- */