/*
* Toggle resume text on the Resume page
*/
var textShowing = false;
var previousText = null;  // prevents the need to click twice to show text
function toggle(text)
{
  if(!(previousText === text))
    textShowing = false;

  previousText = text;
  var paragraphs = document.getElementsByClassName(text);

  if(textShowing === false) // Show text
  { 
    for(var i = 0; i < paragraphs.length; i++)
      paragraphs[i].style.display='block';
    textShowing = true;

  }
  else // Hide text
  {
    for(var i = 0; i < paragraphs.length; i++)
      paragraphs[i].style.display='none';
    textShowing = false; 
  }
}


