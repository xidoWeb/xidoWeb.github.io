//slide_banner.js
function slideBanner(){    
$(".left_btn>a").on("click", function(e){
      e.preventDefault();
    var liWidth =   $(".banner_box").children("li");
    $(".banner_box").find("li").first().stop().animate({marginLeft: liWidth.width()},500,function(){
       liWidth.css({marginLeft:0})
       liWidth.last().prependTo(".banner_box")
//       무엇을.prependTo(어디에)  앞에,담겠다
    });
}); // .left_btn.on("click") 
    
$(".right_btn>a").on("click", function(e){
    e.preventDefault();
    var liWidth =   $(".banner_box").children("li");
    $(".banner_box").children("li").first().stop().animate({marginLeft: -liWidth.width()},500,function(){
       liWidth.css({marginLeft:0});
       liWidth.first().appendTo(".banner_box");
//       무엇을.prependTo(어디에)  앞에,담겠다
    });
 return false;
}); // .right_btn.on("click") 
}










