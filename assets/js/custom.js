    // preloader
    $(window).on('load', function(){
        $('.pre-loader').fadeOut();
      });

    // For filter
	(function($){
		// init Isotope
		var $grid = $('.grid').isotope({
		// options
		});

		// filter items on button click
		$('.filter-button').on( 'click', 'li', function() {
			var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
		});
	})(jQuery);
    
    // for counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });

    // for menubar
    $(window).scroll(function(){
       if($(window).scrollTop() >= 100) {
           $('.navbar').css('background', '#101636');
       } else {
           $('.navbar').attr('style', '');
       }
    });
    

    // for scrollspy
    $(function() {
      $('.navbar-scroll').smoothScroll({
        duration: 700
      });
    });
    
    // wow js
     new WOW().init();

    $(function(){
	// click to remove and add active
        $('.navbar ul li').click(function(){
            $('.navbar ul li').removeClass('active');
            $(this).addClass('active');
        });
    });