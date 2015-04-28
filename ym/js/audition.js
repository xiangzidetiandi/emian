var _is_pay_up = true;
var _is_range_up = true;
$(function(){
	$('.list-date > li').click(function(){
		if($(this).hasClass('is-false')) return;
		$(this).removeClass('is-true').siblings().addClass('is-true');
		$(this).addClass('selector-date').siblings().removeClass('selector-date');
	});

	$('.pay').click(function(){
		if( _is_pay_up ){
			_is_pay_up = false;
			document.getElementById('pay').style.backgroundImage = "url('./images/down.png')";
		}else{
			_is_pay_up = true;
			document.getElementById('pay').style.backgroundImage = "url('./images/up.png')";
		}
	});

	$('.range').click(function(){
		if( _is_range_up ){
			_is_range_up = false;
			document.getElementById('range').style.backgroundImage = "url('./images/down.png')";
		}else{
			_is_range_up = true;
			document.getElementById('range').style.backgroundImage = "url('./images/up.png')";
		}
	});
});