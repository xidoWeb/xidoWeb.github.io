// temp.js
function rwd(){
    var wbox = parseInt( $(window).width() );
    if(wbox <= 500){
        $("#t_header").css({backgroundColor : "#a0f"});
        $("#t_container").animate({backgroundColor:"#ccc"}, 1000);
    }
}
