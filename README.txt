Author: Basil Vetas
Date: 10/14/2014

Notes on website structure: 

The website consists of primary pages seen in the nav bar as well as pages for each blog article. The folder titles pages contains the main pages, and the folder titled blog contains the blog article pages.  The actual body content of the article pages is contained in blog -> articles and is dynamically loaded into the articles pages and into the home page with javascript.  Other html 'objects' that are dynamically loaded into pages are contained in the html folder. For example, the nav bar for the primary pages and the nav bar for the home pages is dynmically loaded. Also the slideshow can be easily added to any page dynamically, as well as other side-bar elements such as socialize.html, twitter-follow.html, and about-pic.html etc. The load.js file contains the code for loading different html elements onto the appropriate pages, the home.js file applies to either the home page or document-wide, and scriptsheet.js currently only has code that applies to the resume page. 

The gome page does not dynamically load in different elements because it is in a different file directory and causes problems.


