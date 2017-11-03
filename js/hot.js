
$(".sonTitle>li").click(function(){
    $(".sonTitle").find(".aa").removeClass("xuanzhong1");
    $(this).find(".aa").addClass("xuanzhong1");
    return false;
})