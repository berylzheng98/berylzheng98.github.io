

	$(function(){
		
		$('.box').height($('.box').width())
		var x = $('.box').width()/2*0.9
		$('.img').css('margin-top',-x)


		$('.mod').mouseover(function(){
			$('.list').css('display','block')
		})
		$('.list').mouseover(function(){
			$('.list').css('display','block')
		})
		$('.list').mouseout(function(){
			$('.list').css('display','none')
		})
		$('.mod').mouseout(function(){
			$('.list').css('display','none')
		})

		var i = 0;
		var x=1;
		var he = $('#1').outerHeight();
		var he1 = he + $('#2').outerHeight(true);
		var he2 = he1 + $('#3').outerHeight(true);
		var he3 = he2 + $('#4').outerHeight(true);
		var he4 = he3 + $('#5').outerHeight(true);
		var he5 = he4 + $('#6').outerHeight(true);
		var he6 = he5 + $('#7').outerHeight(true);


		$(window).scroll(function(){
			if($(document).scrollTop() > he){
				$('.img img').css('transform','rotate('+ 360 +'deg)')
			}else{
				$('.img img').css('transform','rotate('+ 0 +'deg)')
			}

			if($(document).scrollTop() > he1){
				$('.img img').css('transform','rotate('+ 360*2 +'deg)')
			}

			if($(document).scrollTop() > he2){
				$('.img img').css('transform','rotate('+ 360*3 +'deg)')
			}

			if($(document).scrollTop() > he3){
				$('.img img').css('transform','rotate('+ 360*4 +'deg)')
			}

			if($(document).scrollTop() > he4){
				$('.img img').css('transform','rotate('+ 360*5 +'deg)')
			}

			if($(document).scrollTop() > he5){
				$('.img img').css('transform','rotate('+ 360*6 +'deg)')
			}

			if($(document).scrollTop() > he6){
				$('.img img').css('transform','rotate('+ 360*7 +'deg)')
			}
		})

	})

