
var can, ctx, step = 50, steps = 255, delay = 20, rgbstep = 20;
function init() {
  can = document.getElementById("MyCanvas");
  ctx= can.getContext("2d");
  ctx.fillStyle = "orange";
  ctx.font = "30pt tahoma";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  Textfadeup();        
}
 
function Textfadeup() {
  rgbstep++;
  ctx.clearRect(0, 0, can.width, can.height);
  ctx.fillStyle = "rgb(" + rgbstep + "," + rgbstep + "," + rgbstep + ")"
    ctx.fillText("欢迎我最最最最可爱小猪", 230, 30);
  if (rgbstep < 255)
    var t = setTimeout('Textfadeup()', 10);
  if (rgbstep == 255) {
    Textfadedown();
  }
}
 
function Textfadedown() {
  rgbstep=rgbstep-1;
  ctx.clearRect(0, 0, can.width, can.height);
  ctx.fillStyle = "rgb(" + rgbstep + "," + rgbstep + "," + rgbstep + ")"
    ctx.fillText("欢迎我最最最最可爱小猪", 230, 30);
  if (rgbstep > 20)
    var t = setTimeout('Textfadedown()', 10);
  if (rgbstep == 20) {
    Textfadeup();
  }
}  

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


    //this function used to counting the date
   function tb(){
      var myDate=new Date();//获取当前时间
      var begtime=new Date("2018,2,8");//获取结束时间
      //换算成秒 小数点向下舍入取整
      var ltime=Math.floor((myDate.getTime()-begtime.getTime())/1000);
      //console.log(ltime)
      //换算成天 小数点向下舍入取整
      var d=Math.floor(ltime/(24*60*60));
      //换算成小时取去掉天数的余数（也就是小时） 小数点向下舍入取整
      var h=Math.floor(ltime/(60*60)%24);
      //换算成分钟取去掉小时的余数（也就是分钟） 小数点向下舍入取整
      var m=Math.floor(ltime/60%60);
      //换算成分钟取去掉分钟的余数（也就是秒） 小数点向下舍入取整
      var s=Math.floor(ltime%60);
      document.getElementById("day").innerHTML="距我们在一起已经:"+d+"天"+h+"小时"+m+"分钟"+s+"秒";
      if(ltime<=0){
        document.getElementById("day").innerHTML="元旦快乐！";
        clearTimeout(tb);
      }
      setTimeout(tb,1000);
    }



//following is to check the passward and display the key elements
$("#check").click(function(){
  var x = document.querySelector('#pass');
  console.log(x.value);
  if(x.value==1234){
    alert("身份验证完毕，小猪您好");  
    document.getElementById( "button").style.display= "block"; 
     document.getElementById("welc").style.display= "block";
     document.getElementById("4").style.display= "block"
    //show the button
    $("#1").click(function(){
      //console.log(typ);
      var str = '小猪， <br> 晚上好呀，今天是我开始做这个网页的第一天，距离我们在一起100天的纪念日还有11天了，不知道送小猪什么礼物。<br>想了好久，决定写个网页送给您。虽然网页比较粗糙，但是希望您能够喜欢。<br><br>爱您的<br>小山';
      var i = 0;
      //console.log(typ);
      typing(i,str);
      
    });

      $("#2").click(function(){
        var str = '小猪， <br> 今天是我们在一起的第90天。小山今天继续做页面，新建了几个页面，加了一些功能，让它看起来更动态了一点<br>今天依然喜欢你<br><br>爱您的<br>小山';
        var i = 0;
        typing(i,str);
      });

      $("#3").click(function(){
        var str = '小猪， <br> 时间过的好快，离分别的时间也越来越近了...emmm最近的没有时间来做这个网页吧，再过三天我这个礼物就要送出去了<br>期间您一直问我送什么礼物，我猜您会喜欢比较实用的吧，但是说不准也会喜欢像这个网页一样用心的礼物，于是就送您两份礼物好了<br>☆(－ｏ⌒) <br>爱您的<br>小山';
        var i = 0;
        typing(i,str);
      });

        tb();
    //show the counting date


        init();

        $("#test").fragmentFly({
              image_url:"img/dg.png",    //背景图路径，当前目录为元素所在的html目录
              cut_dir:"x",    //可选"x"或"y"，默认均分x方向
              ave_part:12,    //均分cut_dir方向，默认切割成12份
              rm_part:[2,3]   //非cut_dir方向上随机切割，默认最小2份，最多3份
               },
              {
                anime_dir:"left",   //切割子元素动画运行方向，可选"up","down","left","right"，默认为down
                path:[500,800],     //切割子元素动画路长，默认路径最短500px，最长800px
                time:[1000,1300],   //切割子元素动画时长，默认时长最短1000ms，最长1300ms
                opacity:[1,1]       //切割子元素透明度变化，默认初始为1，结束为1(即无渐变)
            });



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
                  }     
              })
    
            function auto(){
                    var play = $(".container").children("img").first();
                    play.addClass("zoom").fadeOut(700,append); 
                       $(".container").children("img").second().show();
                    function append(){
                    $(this).removeClass("zoom").appendTo(".container").show();
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
