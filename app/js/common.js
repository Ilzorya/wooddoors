$(function() {

	$(document).ready(function($){

    // accordion
    var panels = $('.accordion > dd').hide();

    $('.accordion > dt').on('click', function(e) {
			e.preventDefault();

      var $this 			= $(this),
			    description = $this.next('dd');

      // Slide up all other panels
			$this.siblings('dt').next().slideUp();


      //Slide down target panel
			if (description.css('display') === 'block') {
				description.slideUp();
				$this.find('.arrow').removeClass('arrow-up');
			} else if (description.css('display') === 'none') {
				description.slideDown();
				$this.find('.arrow').addClass('arrow-up');
			}

			$this.siblings().find('.arrow').removeClass('arrow-up');

      return false;
    });

		$('.mob_menu_button').on('click', function(){
			$('nav').addClass('menu_show');
			$('.close_icon')
			.addClass('close_icon_show')
			.removeClass('close_icon');
		});

		$('.close_icon_show').on('click', function(){
			$('nav').removeClass('menu_show');
		});

  });
});
