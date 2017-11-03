$(".title>li").click(function(){
    $(".title").find(".aa").removeClass("xuanzhong");
    $(this).find(".aa").addClass("xuanzhong");
    return false;
})