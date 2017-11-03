$(".left-aside>li").click(function () {
    $(".left-aside>li").removeClass("xuanzhong");
    $(this).addClass("xuanzhong");
    return false;
})