$(function () {
    $(".left>li>a").click(function(){
        $(".item").css({"height":"0","overflow":"hidden"});
        $(".left>li>a").find("span:nth-child(3)").css({"transform":"rotate(0deg)"});
        $(".left>li>a").css({"background":" #F3F3F3","color":"#292729"});
        $(".item>li>a").css({"color":"#292729"});
        $(this).find("span:nth-child(3)").css({"transform":"rotate(90deg)"});
        $(this).css({"background":"#F3F3F3","color":"#3D89CB"});
        $(this).parent().find(".item").css({"height":"auto","display":"block","background":"white"});
        $(this).parent().find(".item>li>a").css({"color":"#3D89CB"});
    })
    $(".item>li").click(function () {
        $(".item>li").css({"background":"#ffffff"});
        $(this).css({"background":"#E5E5E5"});
    })
})