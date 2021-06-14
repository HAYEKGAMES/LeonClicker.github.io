$(window).ready(function() {
	var clicks = 0;
	var wallet = 0;
	var multiple_by = 1;
	var upgrade_price = 10;
	var goal = 100;
	var level = 1;
	$('#cash').html(wallet + '$');
	$('#upgrade_price').html(upgrade_price + '$');
	$('.button_text').html(multiple_by + 'x');
	$('.player_clicks').html(clicks);
	$('.player_goal').html(goal);
	$('.player_level').html(level);

	//Count and increase cash by clicking
	$('#leon-clicker').on('click', function() {
		wallet += multiple_by
		$('#cash').html(wallet + '$');

		clicks += 1
		$('.player_clicks').html(clicks);
		var relX = event.pageX - $("body").offset().left;
		var relY = event.pageY - $("body").offset().top;
		$(".clicks_price_text").css({'left': relX});
		$(".clicks_price_text").css({'top': relY+10});
		$(".clicks_price_text").append('<p class="counters">'+multiple_by+'</p>');
		$(".counters").animate({
			top: relY-100,
			opacity: 0
		}, 1000, function() {
			$(this).remove();
		});

		if (clicks >= goal){
			//All goal scores
			if (goal == 100){
				goal = 1500
				$('.player_goal').html(goal);
			} else if(goal == 1500){
				goal = 3000
				$('.player_goal').html(goal);
			} else if(goal == 3000){
				goal = 5000
				$('.player_goal').html(goal);
			} else if(goal == 5000){
				goal = 7500
				$('.player_goal').html(goal);
			} else if(goal == 7500){
				goal = 10000
				$('.player_goal').html(goal);
			}
			else if(goal == 10000){
				goal = 12500
				$('.player_goal').html(goal);
			}
			else if(goal == 12500){
				goal = 15000
				$('.player_goal').html(goal);
			}
			else if(goal == 15000){
				goal = 20000
				$('.player_goal').html(goal);
			} else if(goal == 20000){
				goal = 'FINISHED'
				$('.player_goal').html(goal);
			}

			level += 1
			$('.player_level').html(level);
			$('#leon-clicker').attr('src', 'images/'+level+'lvl.png');
		}

		//
	});

	//Clicking animation
	$('#leon-clicker').mousedown(function() {
		$(this).css({'transform': 'translate(-40%, -50%) scale(0.4)'});
		$(this).css({'left': '40%'});
		$(this).css({'top': '50%'});
	});

	$('#leon-clicker').mouseup(function() {
		$(this).css({'left': '40%'});
		$(this).css({'top': '50%'});
		$(this).css({'transform': 'translate(-40%, -50%) scale(0.3)'});
	});

	$('#upgrade_btn').on('click', function() {
		if (wallet >= upgrade_price){
			//buy upgrade
			wallet -= upgrade_price
			$('#cash').html(wallet + '$');

			//increasing price
			upgrade_price *= 10
			$('#upgrade_price').html(upgrade_price + '$');

			//increasing price per click
			multiple_by *= 2
			$('.button_text').html(multiple_by + 'x');
		}
	});
})