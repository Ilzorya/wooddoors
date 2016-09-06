$(function() {

	$(document).ready(function($){

    // Hide all panels to start
    var panels = $('.accordion > dd').hide();

    // Show first panel on load (optional). Remove if you want
    // panels.first().show();

    // On click of panel title
    $('.accordion > dt').on('click', function(e) {
			e.preventDefault();
      var $this = $(this);

      // Slide up all other panels
      // panels.slideUp();
			$this.siblings('dt').next().slideUp();


      //Slide down target panel
      $this.next('dd').slideDown();

			$this.find('.arrow').addClass('arrow-up');
			$this.siblings().find('.arrow').removeClass('arrow-up');

      return false;
    });
  });

});
