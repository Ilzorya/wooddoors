$(document).ready(function($){

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
	$('.btn_cta, .btn_cta_content').magnificPopup({
	  type:'inline',
	  midClick: true,
		removalDelay: 100,
		mainClass: 'my-mfp-slide-bottom'
	});

	//E-mail Ajax Send
		//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		jQuery.ajax({
			type: "POST",
			cache: false,
			url: "assets/mail.php", //Change
			data: $(this).serialize()
		}).done(function() {
			// alert("Thank you!");
      $('.order_sent_pop').slideDown('3000');
        window.setTimeout(close, 3000);
      function close() {
        $('.order_sent_pop').slideUp('3000');
      }
		});
		return false;
	});

  // $('.button_default').on('click', function(){
  //   $('.order_sent_pop').slideDown('3000');
  //     window.setTimeout(close, 3000);
  // });
  //
  // function close() {
  //   $('.order_sent_pop').slideUp('3000');
  // }

	//tabs_catalog
	$('.tab_wrapper').click(function(){
		var tab_id = $(this).attr('data-tab');

			$('.tab_wrapper').removeClass('current');
			$('.catalog_gallery').removeClass('gallery_selected');

			$(this).addClass('current');
			$("#"+tab_id).addClass('gallery_selected');
	})
});
