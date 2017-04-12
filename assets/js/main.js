(function($) {
	"use_strict";

	$(document).ready(function(){

		$('.switcher-trigger').click(function(){
			$('.switcher-wrap').toggleClass('active');
		});

		$('.color-switcher ul li').on('click', function () {
			var color = $(this).attr("data-color");
			$('#theme-color').attr("href", "assets/css/" + color + ".css");
			
			$('.color-switcher ul li').removeClass('active');
			$(this).addClass('active');
		});

	})
		
		
}(jQuery));