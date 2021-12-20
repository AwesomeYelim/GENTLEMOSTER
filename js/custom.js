$(function(){
    $("body,html").stop().animate({"scrollTop":0},1500 ,"swing");

    // 스크롤컨트롤러 
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();

        for(i=0;i<5;i++){
            $("section article").eq(i).css({"transform":"translateZ("+parseInt((-5000*i)+scroll)+"px)"});
            if(scroll >= i * 5000 && scroll< (i+1) * 5000){
                $("article").removeClass();
                $("article").eq(i).addClass("on");
                $(".menu li").removeClass();
                $(".menu li").eq(i).addClass("on");
                
            };
        };
    });

    //메뉴클릭시 화면이동
    $(".menu li").click(function(){
        $(".menu li").removeClass();
        var a = $(this).index();
        $("body,html").stop().animate({"scrollTop": a * 5000},1500, "swing");
    });

    //구름 움직임
    $("body").on("mousemove",function(e){

        var posX = e.pageX/100;
        var posY = e.pageY/150;

        $(".obj11").css({"left":-270-posX,"bottom":-100-posY});
        $(".obj12").css({"right":-593+posX,"top":-85-posY});
        $(".obj13").css({"left":100+posX,"bottom":-130-posY});

        $(".obj21").css({"right":-710+posX,"bottom":-420+posY});
        $(".obj22").css({"right":-50+posX,"bottom":-100+posY});

        $(".obj31").css({"right":110+posX,"bottom":70+posY});
        $(".obj32").css({"left":100+posX,"bottom":-130+posY});

        $(".obj41").css({"left":350+posX,"bottom":-150+posY});
        $(".obj42").css({"right":167+posX,"top":-255+posY});
        $(".obj43").css({"right":-100+posX,"bottom":-120+posY});
        
        $(".obj51").css({"left":-100+posX,"bottom":-290+posY});
        $(".obj52").css({"right":30+posX,"top":170+posY});
        $(".obj53").css({"left":-30+posX,"bottom":-130+posY});
        


    });
    
    // 타이핑효과
    var typingBool = false; 
    var typingIdx = 0; 
    var liIndex = 0;
    var a = $(this).index();
    var typingTxt = $(".typing.txt1").text(); // 타이핑될 텍스트를 가져온다
     
    typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
    if(typingBool == false){ // 타이핑이 진행되지 않았다면 
       typingBool = true; 
       var tyInt = setInterval(typing,100); // 반복동작 
     } 
     function typing(){ 
      $(".t_space").removeClass("on");
      $(".t_space").eq(liIndex).addClass("on");
      
       if(typingIdx < typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
         $(".t_space.t_1").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
         typingIdx++; 
       } else{ 
         clearInterval(tyInt); //끝나면 반복종료 
       } 
     } 
     
 


});