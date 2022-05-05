/** Changing Page Depends on screen width **/
window.onresize = function() {
  var href = window.location.href.split("/");
  var html_location = href[href.length-1];
  
  if (window.innerWidth >= 767 && html_location !== "index.html") {
    // Refreshing page automatically when viewport size change
    document.location.reload(true);
    window.location = "index.html";
  }
}
/* ----------------------------------------------------------------------- */