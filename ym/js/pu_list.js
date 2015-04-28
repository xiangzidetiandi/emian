var seconds = 9;
var i = 1;   
var pageCount = 2; 
$(function() {
    countDown();
    $('.content-wrapper').click(function(event) {
        $('.introduction').hide();
    });
    $(window).bind('scroll', onScroll);
});

function countDown() {
    seconds--;
    if (seconds == 6) {
        $('.intro-1').hide(400);
        $('.intro-2').show(300);
    } else if (seconds == 3) {
        $('.intro-2').hide(400);
        $('.intro-3').show(300);
    } else if (seconds == 0) {
        $('.introduction').hide();
    }
    setTimeout(countDown, 1000);
}

function onScroll() {
    // 如果窗口底部小于100像素，就执行加载事件  
    var winHeight = window.innerHeight ? window.innerHeight : $(window).height(), // iphone fix  
        closeToBottom = ($(window).scrollTop() + winHeight > $(document).height() - 100);
    if (closeToBottom) {
        if (i >= pageCount) {
            return false;
        } else {
            i++;
            $(".list").append($(".list").html());
            // applyLayout(); 这里是调用下面加载数据的函数
        }
    }
}

//异步加载数据
function applyLayout() {  
    $.ajax({  
        type: "post",  
        url: "",  //接口的链接
        dataType: "json",  
        async: true, //true 异步  false为同步请求  
        data: {},    //定义要传的参数
        success: function (msg) {  
            //这里对返回的数据处理一下，然后添加到原来的数据后面
            if (msg != null) {  
                $(".list").append(msg);
            }  
        }  
    });  
}