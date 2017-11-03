$(document).ready(function () {
    $("form").validate({
        rules:{
            aname: {
                required: true,
                minlength:2
            },
            apass:{
                required: true,
                minlength:5
            },
        },
        messages:{
            aname: {
                required: "用户名不能为空",
                minlength: "用户名至少两个字符"
            },
            apass: {
                required: "密码不能为空",
                minlength: "密码至少五个字符"
            }

        }
    })
    $(".sendbtn").click(function(){
        var phone=$("input[name=aphone]").val();
        $.ajax({
            url:"index.php?m=admin&f=login&a=sendCode",
            type:"post",
            data:{phone},
            success:function (e) {
                if(e){
                    $(".sendbtn").html("发送成功");
                }
            }
        })
    })
})


