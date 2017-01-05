jQuery(function($){

	/* ==========================================================================
		Pre Loader
		========================================================================== */
		
	$(window).load(function() {
		$(".plain-preloader-inner").fadeOut();
		$(".plain-preloader").delay(1000).fadeOut("slow");
	})

	
	/* ==========================================================================
	   WP blog fix
	   ========================================================================== */
	
	$('.entry-content table').addClass('table table-bordered table-striped');
	$('.widget select').addClass('form-control');
	$('.widget_calendar table').addClass('table table-bordered');


	/**
	 * WooComerce Fix
	 */
	
	$('#billing_phone, #order_comments').addClass('form-control');


	/* ==========================================================================
	   Post gallery owl carousel support
	   ========================================================================== */
	
	$(".wpb_theme_post_gallery").owlCarousel({
		items:1,
	    autoPlay:true,
	    slideSpeed:1000,
	    navigation:true,
	    navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	    stopOnHover:true,
	    pagination:false,
	    autoHeight:true,

	});


	/* ==========================================================================
	   Footer widget wow attr add
	   ========================================================================== */
	
	$('.footer-widget:nth-child(2)').attr('data-wow-delay', '.2s');
	$('.footer-widget:nth-child(3)').attr('data-wow-delay', '.5s');
	$('.footer-widget:nth-child(4)').attr('data-wow-delay', '.8s');


	/* ==========================================================================
	   Roof Social Icons Tooltip
	   ========================================================================== */

	$('.social-link').tooltip();


	/* ==========================================================================
	   Search Toggle
	   ========================================================================== */

	var openSearch = $('.open-search'),
	SearchForm = $('.full-search'),
	closeSearch = $('.close-search');

	openSearch.on('click', function(event){
		event.preventDefault();
		if (!SearchForm.hasClass('active')) {
			SearchForm.fadeIn(300, function(){
				SearchForm.addClass('active');
			});
		}
	});

	closeSearch.on('click', function(event){
		event.preventDefault();

		SearchForm.fadeOut(300, function(){
			SearchForm.removeClass('active');
			$(this).find('input').val('');
		});
	});


	/* ==========================================================================
	   WOW Scroll Spy
	   ========================================================================== */
	
	var wow = new WOW({
		//disabled for mobile
		mobile: false
	});
	wow.init();


	/* ==========================================================================
	   Owl Carousel for client logo slider
	   ========================================================================== */
	
	$('.clients-scroller').owlCarousel({
	    items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		itemsTablet : [768,2],
		itemsMobile : [479,2],
	    margin:90,
	    stagePadding:90,
	    smartSpeed:450,
	    slideSpeed: 1000,
		paginationSpeed: 1000,
	    autoPlay: 2500,
		stopOnHover: true,
	});


	/* ==========================================================================
	   Bootsrap slider carousel customize
	   ========================================================================== */
	
	$('#carousel-slider').carousel();

	$('a[data-slide="prev"]').click(function () {
		$('#carousel-slider').carousel('prev');
	});

	$('a[data-slide="next"]').click(function () {
	    $('#carousel-slider').carousel('next');
	});

	/* ==========================================================================
	   MixitUp trigger for portfolio
	   ========================================================================== */
	
	$('#portfolio-items').mixItUp();


	/* ==========================================================================
	   Bootstrap carousel customize for Testimonial slider
	   ========================================================================== */
	
	$('testimonial-carousel').carousel();
	$('a[data-slide="prev"]').click(function () {
		$('#testimonial-carousel').carousel('prev');
	});

	$('a[data-slide="next"]').click(function () {
		$('#testimonial-carousel').carousel('next');
	});


	/* ==========================================================================
	   run Placeholdem on all elements with placeholders
	   ========================================================================== */
	
	Placeholdem( document.querySelectorAll( '[placeholder]' ) );


	/* ==========================================================================
	   CounterUp trigger for conunter
	   ========================================================================== */
	
    $('.counter').counterUp({
        delay: 1,
        time: 400
    });


	/* ==========================================================================
	   Bootstrap Dropdown Menus on mouse hover
	   ========================================================================== */
	
	$(".dropdown").hover(
		function () {
			$(this).addClass('open');
		}, 
		function () {
			$(this).removeClass('open');
		}
	);


	/* ==========================================================================
	   Toggle plain-nav-fixed class to nav menu on scroll ( Only for 1200px )
	   ========================================================================== */

	$(window).on('scroll', function(){
		if( $(window).scrollTop()>400 ){
			$('.navbar-plain').addClass('plain-nav-fixed');
		} 
		else {
			$('.navbar-plain').removeClass('plain-nav-fixed');
		}
	});


	/* ==========================================================================
	   Testimonial
	   ========================================================================== */
	
	$('carousel-about-us').carousel();
	$('a[data-slide="prev"]').click(function () {
	    $('#carousel-about-us').carousel('prev');
	});

	$('a[data-slide="next"]').click(function () {
	    $('#carousel-about-us').carousel('next');
	});


	/* ==========================================================================
	   Accordion js
	   ========================================================================== */
	
	$(".plain_accordion .panel-group").each( function () {
	    var accordion_id = $(this).attr("id");
	    $(this).find('.panel-title a').attr( 'data-parent','#'+accordion_id);
	});


	/* ==========================================================================
	   Same height process for element
	   ========================================================================== */
	
	plainEqualHeight = function(container){

		var currentTallest = 0,
		currentRowStart = 0,
		rowDivs = new Array(),
		$el,
		topPosition = 0;
		$(container).each(function() {

			$el = $(this);
			$($el).height('auto')
			topPostion = $el.position().top;

			if (currentRowStart != topPostion) {
				for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
				rowDivs.length = 0; // empty the array
				currentRowStart = topPostion;
				currentTallest = $el.height();
				rowDivs.push($el);
			} else {
				rowDivs.push($el);
				currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
			}
			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
		});
	}


	/* ==========================================================================
	   Same height for footer widgets
	   ========================================================================== */
	
	$(window).load(function() {
		plainEqualHeight('#footer-wrapper .footer-widget');
	});

	$(window).resize(function(){
		plainEqualHeight('#footer-wrapper .footer-widget');
	});
	

	/* ==========================================================================
	   Same height for counter
	   ========================================================================== */
	
	$(window).load(function() {
		plainEqualHeight('.vc_row .fact-block');
	});

	$(window).resize(function(){
		plainEqualHeight('.vc_row .fact-block');
	});


	/* ==========================================================================
	   Same height for why choose us item
	   ========================================================================== */
	
	$(window).load(function() {
		plainEqualHeight('.vc_row .why-choos-item');
	});

	$(window).resize(function(){
		plainEqualHeight('.vc_row .why-choos-item');
	});


	/* ==========================================================================
	   Same height for plain service item
	   ========================================================================== */
	
	$(window).load(function() {
		plainEqualHeight('.vc_row .service-style-1, .vc_row .service-style-2, .vc_row .other-service-item, .vc_row .service-style-3');
	});

	$(window).resize(function(){
		plainEqualHeight('.vc_row .service-style-1, .vc_row .service-style-2, .vc_row .other-service-item, .vc_row .service-style-3');
	});
	


	/* ==========================================================================
	   Magnific Popup for flicker gallery
	   ========================================================================== */
				
    $('.plain-flicker-gallery').each(function() {
	    $(this).magnificPopup({
	        delegate 	: 'a',
	        type 		: 'image',
	        gallery 	: {
	          enabled 	: true
	        },
	        mainClass 	: 'mfp-with-zoom',
			zoom: {
				enabled 	: true,
				duration 	: 300,
				easing 		: 'ease-in-out',
				opener 		: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
    	});
	});

	

	/* ==========================================================================
	   Scroll To Top
	   ========================================================================== */
	
	/* Check to see if the window is top if not then display button */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 1000) {
			$('.wpb_scroll_top').fadeIn();
		} else {
			$('.wpb_scroll_top').fadeOut();
		}
	});
	
	/* Click event to scroll to top */
	$('.wpb_scroll_top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});


	/* ==========================================================================
	   Remove empty p tag form visual composer
	   ========================================================================== */
	
	
	$('.site-row > p').each(function() {
	    var $this = $(this);
	    if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
	        $this.remove();
	});


}); // Non conflict