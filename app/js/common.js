$(function() {

	$(document).ready(function($){

    // Hide all panels to start
    var panels = $('.accordion > dd').hide();

    // Show first panel on load (optional). Remove if you want
    // panels.first().show();

    // On click of panel title
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
  });

});
