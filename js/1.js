/*
When DOM is ready

  For each "button" element with "class=tri", assign a callback function to
  handle the mouse clicked event.

  Inside the callback function
    - Change the value of attribute "data-state" from 0 to 1, 1 to 2, or
      2 to 0 depending on its current value.
*/


window.onload=function(){
$( '[data-state]').click(function() {

	var mycount=this.getAttribute("data-state");
	console.log(mycount);
	switch (mycount){
	case '0':
    this.setAttribute("data-state","1");
    break;
    case '1':
    this.setAttribute("data-state","2");
    break;
    case '2':
    this.setAttribute("data-state","0");
    break;
}
});
};
