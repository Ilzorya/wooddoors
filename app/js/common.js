$(function() {

	$(document).ready(function($){

    // Hide all panels to start
    var panels = $('.accordion > dd').hide();

    // Show first panel on load (optional). Remove if you want
    // panels.first().show();

    // On click of panel title
    $('.accordion > dt > a').click(function() {
      var $this = $(this);

      // Slide up all other panels
      panels.slideUp();

      //Slide down target panel
      $this.parent().next().slideDown();

      return false;
    });
  });

});
