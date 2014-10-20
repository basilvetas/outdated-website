/********************************************************************************
* On Document Load
*********************************************************************************/
$(document).ready(function() {

  /*
  * Load blog articles to home page
  */
  if($('div').hasClass("article")) 
  {
    var blogArticles = document.getElementsByClassName("article");
    for(var i = 0; i < blogArticles.length; i++)
    {
      var articleName = blogArticles[i].id;
      $('#' + articleName).load('blog/articles/' + articleName + '-body.html');
      // Update archives menu
      console.log('<option value="blog/' + articleName + '.html">' + articleName + '</option>');
      $("#archives-list").after('<option value="blog/' + articleName + '.html">' + articleName + '</option>');
    }
  }

  /*
  * Load blog articles to individual article pages
  */
  if($('div').hasClass("article-page")) 
  {
    var article = document.getElementsByClassName("article-page");
    var articleName = article[0].id.substring(0, article[0].id.length-5);
    $('#' + article[0].id).load('articles/' + articleName + '-body.html');  
  }

  /*
  * Load nav bar on main pages
  */
  if($('div').hasClass("nav-load"))
  {
    var navPages = document.getElementsByClassName("nav-load");
    for(var i = 0; i < navPages.length; i++)
      $(navPages[i]).load('../html/nav.html');
  }

   /*
  * Load nav bar on article pages
  */
  if($('div').hasClass("nav-load-article"))
  {
    var navPages = document.getElementsByClassName("nav-load-article");
    for(var i = 0; i < navPages.length; i++)
      $(navPages[i]).load('../html/nav-articles.html');
  }

  /*
  * Load footer on main pages
  */
  if($('div').hasClass("footer-load"))
  {
    var footerPages = document.getElementsByClassName("footer-load");
    for(var i = 0; i < footerPages.length; i++)
      $(footerPages[i]).load('../html/footer.html');
  }

  /*
  * Load slideshow on pages
  */
  if($('div').hasClass("slideshow-load"))
  {
    var slideshowPages = document.getElementsByClassName("slideshow-load");
    for(var i = 0; i < slideshowPages.length; i++)
      $(slideshowPages[i]).load('../html/slideshow.html');
  }

  /*
  * Load socialize buttons box
  */
  if($('div').hasClass("socialize-load"))
  {
    var socializePages = document.getElementsByClassName("socialize-load");
    for(var i = 0; i < socializePages.length; i++)
      $(socializePages[i]).load('../html/socialize.html');
  }

  /*
  * Load email subscribe box
  */
  if($('div').hasClass("subscribe-load"))
  {
    var subscribePages = document.getElementsByClassName("subscribe-load");
    for(var i = 0; i < subscribePages.length; i++)
      $(subscribePages[i]).load('../html/subscribe.html');
  }

  /*
  * Load email subscribe box
  */
  if($('div').hasClass("twitter-follow-load"))
  {
    var followPages = document.getElementsByClassName("twitter-follow-load");
    for(var i = 0; i < followPages.length; i++)
      $(followPages[i]).load('../html/twitter-follow.html');
  }

  /*
  * Load social media button javascript 
  */
  if($('div').hasClass("social-script-load"))
  {
    var smPages = document.getElementsByClassName("social-script-load");
    for(var i = 0; i < smPages.length; i++)
      $(smPages[i]).load('../html/social-script.html');
  }

  /*
  * Load about headshot image  
  */
  if($('div').hasClass("about-pic-load"))
  {
    var aboutPicPages = document.getElementsByClassName("about-pic-load");
    for(var i = 0; i < aboutPicPages.length; i++)
      $(aboutPicPages[i]).load('../html/about-pic.html');
  }

}); 
/********************************************************************************
* END On Document Load
*********************************************************************************/
