$(document).ready(function () {
    $("form").validate({
        rules:{
            uname: {
                required: true,
                minlength:2
            },
            upass:{
                required: true,
                minlength:5
            },
            uimagecode:{
                required: true,
            },
        },
        messages:{
            uname: {
                required: "用户名不能为空",
                minlength: "用户名至少两个字符"
            },
            upass: {
                required: "密码不能为空",
                minlength: "密码至少五个字符"
            },
            uimagecode: {
                required: "验证码不能为空",
            }

        }
    })
})


