/*
When DOM is ready

  For each "button" element with "class=tri", assign a callback function to
  handle the mouse clicked event.

  Inside the callback function
    - Change the value of attribute "data-state" from 0 to 1, 1 to 2, or
      2 to 0 depending on its current value.
*/

 


window.onload=function(){  
   var str = '小猪， <br> 晚上好，';
   var i = 0;

   function typing(){

     var divTyping = document.getElementById('code');
     if (i <= str.length) {
      

      divTyping.innerHTML = str.slice(0, i++) + '_';
      setTimeout(function(){ typing()}, 200);//递归调用
     
   }
    else{
     divTyping.innerHTML = str;//结束打字,移除 _ 光标
    }
   }

   typing();
   

}  
