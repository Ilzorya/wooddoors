$(function() {

	$(document).ready(function($){

    // accordion

    var panels = $('.accordion > dd').hide();

    $('.accordion > dt').on('click', function(e) {
			e.preventDefault();

      var $this 			= $(this),
			    description = $this.next('dd');

			$this.siblings('dt').next().slideUp();


			if (description.css('display') === 'block') {
				description.slideUp();
				$this.find('.arrow').removeClass('arrow_up');
			} else if (description.css('display') === 'none') {
				description.slideDown();
				$this.find('.arrow').addClass('arrow_up');
			}

			$this.siblings().find('.arrow').removeClass('arrow_up');

      return false;
    });

		//mob menu

		$('.mob_menu_button').on('click', function(){
			$('.head_nav').addClass('menu_show');
			$('.close_icon')
			.addClass('close_icon_show')
			.removeClass('close_icon');
			$('.logo_wrapper').addClass('logo_fixed').removeClass('logo_wrapper');

			$('.close_icon_show').on('click', function(){
				$(this).removeClass('close_icon_show').addClass('close_icon');
				$('.head_nav').removeClass('menu_show');
				$('.logo_fixed').addClass('logo_wrapper').removeClass('logo_fixed');
			});
		});

		//slick-carousel

		$('.slick-slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		});

		//magnific pop up
		$('.btn_cta').magnificPopup({
		  type:'inline',
		  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		});

  });
});
