// custom.js
function custom(){
     var vh = $(window).height();
            $("section").height(vh);
            
            $(window).on("resize", function(){
                var vh = $(window).height();
                $("section").height(vh);
            })
            
            $("#play").on("click", function(e){
                e.preventDefault();
                $("video")[0].play();
            });
            $("#pause").on("click", function(e){
                e.preventDefault();
                $("video")[0].pause();
            });
            
            // site_menu 
            $("#site_left").on("click", function(){
                $("#site_right").stop(true).toggleClass("moveBox");
//                .addClass();  클래스속성추가
//                .removeClass();  클래스속성제거
//                $(".box").switchClass("test");
            });
            //login버튼 클릭
            $("#login").on("click", function(){
              var view =  $(this).children("dd").css("display");
                
                if(view == "none"){
                    $(this).children("dd").stop().fadeIn();
                }else{
                    $(this).children("dd").stop().animate({marginLeft:0},500, function(){
                         $(this).fadeOut(0, function(){
                             $(this).css({marginLeft: -410 + "px"});
                         })  
                    });                  
                }
                  
            });
            
            // menu버튼 클릭
            $("#gnb").children("h2").on("click", function(){
                $(this).toggleClass("move", 500);
                $(this).next("ul").toggleClass("move", 500);
            });
          slideBanner();
    
};
