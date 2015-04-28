$(function(){
	$('.user-job .list-job > li,.user-type .list-job > li').click(function(){
		$(this).addClass('selector-job').siblings().removeClass('selector-job');
		$('.user-type,.user-obj').show();
	});

	$('.user-obj .list-job > li').click(function(){
		$(this).addClass('selector-job');
	});

});