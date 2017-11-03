$(".guanzhuBtns>li>a").click(function(){
    $(".guanzhuBtns").find(".aa").removeClass("xuanzhong1");
    $(this).parent().find(".aa").addClass("xuanzhong1");
    return false;
})