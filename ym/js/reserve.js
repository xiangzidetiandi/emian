var _is_comment = false;
$(function (){
	//tab点击切换
	$(".tab-header ul li").click(function(event) {
		$this = $(this);
		// alert($this.index());
		$this.addClass('curr').siblings().removeClass('curr');
		$( ".tab-content > div" ).eq($this.index()).css("display","block").siblings().css("display","none");
	});
	// 事件预定
	$(".time-block").click(function(event) {
		$this = $(this);
		$('.date-time').find('span').removeClass('time-block-select');
		$this.toggleClass('time-block-select')
	});

	$('.selected').click(function(){
		$('.tab .tab-header ul li').addClass("yd");
		$(".tab-header ul li").eq(2).click();
	});

	$('.all-users-comment-btn').click(function(){
		if(_is_comment){
			_is_comment = false;
			$('.comment-list').hide();
			$('.all-users-comment-btn').css('background-image',"url(./images/chat-up.png)");
		}else{
			_is_comment = true;
			$('.comment-list').show();
			$('.all-users-comment-btn').css('background-image',"url(./images/chat-down.png)");
		}
		
	});
});