

window.onload=function(){  


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
 
   //this var is to control the typing process
   var typ=0; //havent succeed
   var col=new Array("r","g","b","y","bl");
   //this col variable save the color class of the font

//following is to check the passward and display the key elements
$("#check").click(function(){
  var x = document.querySelector('#pass');
  console.log(x.value);
  if(x.value==1234){
    alert("身份验证完毕，小猪您好");  
    document.getElementById( "button").style.display= "block"; 
    //show the button
    $("#1").click(function(){
      //console.log(typ);
      var str = '小猪， <br> 晚上好呀，今天是我开始做这个网页的第一天，距离我们在一起100天的纪念日还有11天了，不知道送小猪什么礼物。<br>想了好久，决定写个网页送给您。虽然网页比较粗糙，但是希望您能够喜欢。<br>这个网页我以后也会经常更新的，您有空也可以常来看看。<br><br>爱您的<br>小山';
      var i = 0;
      //console.log(typ);
      typing(i,str);
      
    });

    $("#2").click(function(){
      var str = '小猪， <br> 今天是我们在一起的第90天。小山今天继续做页面，新建了几个页面，将一些特性隐藏了起来嘻嘻，假装是彩蛋<br>今天依然喜欢你<br><br>爱您的<br>小山';
      var i = 0;
      typing(i,str);
    });
    //following is to show the welcome word
    var txt2=$("<p></p>").text("欢迎我最最最最可爱小猪"); 



    txt2.addClass("c r");

    //this class is modified in css
    $(".b").append(txt2);
    $(".c").append($(".p"));
    var t=1;
    //the following is to change the color of the title when the mouse move over
    $(".c").hover(
      function(){
        // console.log(t);
        // console.log(col);
        $(this).removeClass("r");
        $(this).addClass(col[t]);
        if(t!=4)
          t=t+1;
        else
          t=1;
      },
      function(){
        var x=$(this).attr("class");

        $(this).removeClass(x);
        $(this).addClass("r c");
      }
      );

    $("#myform").remove();
    //remove the passward form
    }
  else
    alert("密码错误，请重新输入！");
});
  //this variable is to control the picture process
  
      var pic=0;
      //the following function is to press the picture button
      $("#4").click(function(){
      if(pic==0){
      pic=1;
      //the following is to show and run the picture
      $("#4").text("隐藏图片");
      document.getElementById( "div2").style.display= "block"; 
      //show the picture
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
    }
    else{
      document.getElementById("div2").style.display= "none";
      $("#4").text("显示图片");
      pic=0; 
    //end
    }

  });

  

}  
