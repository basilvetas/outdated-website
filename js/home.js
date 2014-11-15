/********************************************************************************
* On Document Load
*********************************************************************************/
$(document).ready(function() {

  /*
  * Make nav responsive
  * Credit to: bit.ly/1p4PPXb 
  */
  $("#nav").addClass("hide");
  $("#nav-title").before('<div id="menu"><a href="#">☰</a></div>');
  
  $("#menu").click(function()
  {
    $("#nav").toggle();
  });

  $(window).resize(function()
  {
    if(window.innerWidth > 768) {
      $("#nav").removeAttr("style");
  }
  });

  /*
  * Updates footer date (year)
  * Note: this script must come after the script that loads the footer
  */
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  document.getElementById("current-date").innerHTML = year;

  /*
  * Creates homepage image slider
  * Credit to: bit.ly/1nWtDz8 
  */
  $("#slideshow div:gt(0)").hide();
  setInterval(function() { 
    $('#slideshow div:first')
      .fadeOut(1500)
      .next()
      .fadeIn(1500)
      .end()
      .appendTo('#slideshow');
  },  4000);

  /*
  * This code takes a user to the corresponding page of the archives menu when clicked
  */
  document.getElementById("archives").onchange = function() 
  {
    if (this.selectedIndex!==0) 
      window.location.href = this.value;
  };
        
}); 
/********************************************************************************
* END On Document Load
*********************************************************************************/
