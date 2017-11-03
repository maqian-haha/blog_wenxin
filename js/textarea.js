$("textarea").eq(0).focus(function(){
    $(".tijiao").css({display:"block"})
})
$(".btn .del").click(function(){
    $(".tijiao").css({display:"none"})
})
$(".huifudian").click(function(){
    $(this).parent().parent().parent().find(".huifuR").css({display:"block"})
})
$(".submitR").click(function(){
    $(this).parent().parent().parent().css({display:"none"})
})
$(".delR").click(function(){
    $(this).parent().parent().parent().css({display:"none"})
})
