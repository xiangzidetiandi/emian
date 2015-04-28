$(function(){
	var _user_country_option = "";
	var _is_address = false;
	$("#choose-country").click(function(){
		$(".alert-window").show();
	});

	$(".county-options .option").click(function(){
		$this = $(this);
		$this.addClass('choose').siblings().removeClass('choose');
		_user_country_option = $this.html();
		$(".alert-window").hide();
		$('#choose-country').html(_user_country_option);
	});

	$(".alert-window").click(function() {
        if ($(".alert-window").css('display') != "none") {
            $(".alert-window").hide();
        }
    });

	$('#user-address-input').focus(function(){
		_is_address = true;
		$('.address-options').show();
	});

	$(".address-options > div").click(function(){
		$this = $(this);
		var _user_address_option = $this.html();
		$(".address-options").hide();
		$('#user-address-input').val(_user_address_option);
	});

	$('.address-title,.list-item,.history-address,p,section').click(function(){
		$(".address-options").hide();
	});
		
});