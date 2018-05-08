

window.onload=function(){  
   // var str = '小猪， <br> 晚上好，';
   // var i = 0;

  function typing(i,str){

     var divTyping = document.getElementById('code');
     
     if (i <= str.length) {
      divTyping.innerHTML = str.slice(0, i++) + '_';
      setTimeout(function(){ typing(i,str)}, 200);//递归调用
     
   }
    else{
     divTyping.innerHTML = str;//结束打字,移除 _ 光标
    }
   }
 

   // typing();


$("#check").click(function(){
  var x = document.querySelector('#pass');
  console.log(x.value);
  if(x.value==1234){
    alert("身份验证完毕，小猪您好");

    document.getElementById( "div2").style.display= "block"; 
    //show the picture
    $("#1").click(function(){
   var str = '小猪， <br> 晚上好呀，今天是我开始做这个网页的第一天，距离我们在一起100天的纪念日还有11天了，不知道送小猪什么礼物。<br>想了好久，决定写个网页送给您。虽然网页比较粗糙，但是希望您能够喜欢。<br>这个网页我以后也会经常更新的，您有空也可以常来看看。<br><br>爱您的<br>小山';
   var i = 0;

  typing(i,str);
});

$("#2").click(function(){
   var str = '小猪， <br> 晚上好呀，今天是我们在一起的第90天。';
   var i = 0;

  typing(i,str);
});

  var txt2=$("<p></p>").text("欢迎我最最最最可爱小猪"); 
 txt2.addClass("c");
  //this class is modified in css
  $(".b").append(txt2);
  // create a p element and append to the first div
  //the first div also contains the three date button

  //to do, this want to append the picture to div2
  var interval;
  $(".container img").click(function cover(){
      $(this).addClass("zoom").fadeOut(700,append);   
      function append(){
      $(this).removeClass("zoom").appendTo(".container").show();
      // var name = $(".container").children("img").first().attr("alt");
      //  $(".name p").text("No "+name);
      } 
    
  })
  
  function auto(){
      var play = $(".container").children("img").first();
      play.addClass("zoom").fadeOut(700,append);    
      function append(){
      $(this).removeClass("zoom").appendTo(".container").show();
      // var name = $(this).parent().children("img").first().attr("alt");
      //  $(".name p").text("No "+name);
      }
      interval = setTimeout(auto,5000);
  }
  
  $(".container img").hover(function(){
      stopPlay();
  },function(){
      interval = setTimeout(auto,5000);
  })
  
  function stopPlay(){
    clearTimeout(interval)
  }
  auto();
  //end

  $("#myform").remove();
  //remove the passward form
  }
  else
    alert("输入错误，请重新输入！");
});

}  
