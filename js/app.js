var common = {
	init: function() {
		common.main();
		common.owl();
	},
	main: function(){

		$('.nav-trigger').click(function(event){
			event.preventDefault();
			$('header').addClass('open');
		});

		$('.close-nav').click(function(event){
			event.preventDefault();
			$('header').removeClass('open');
		});

		$('.discuss').click(function(event){
			event.preventDefault();
			$('header').removeClass('open');
			$('#discussPopup').addClass('active');
		});

		$('.question-list li').click(function(){
			$(this).toggleClass('active');
		});

		$('.popup-close').click(function(){
			$('.popup-wrapper').removeClass('active');
		});
		
		$(window).scroll(function(){
			if($(window).scrollTop() > 0) {
				$('header').addClass('scrolled');
			}else {
				$('header').removeClass('scrolled');
			}
		});

		$('.phone-mask').mask("+380(99) 999-99-99");

		$('.anchor').click(function(event){
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1000);
			$('header').removeClass('open');
		});

	},
	owl: function(){
		var bannerSlider = $('.banner-slider').owlCarousel({
			nav:true,
			dots: true,
			loop: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeInRight',
			smartSpeed: 1000,
			margin: 30,
			items: 1
		});

		bannerSlider.trigger("to.owl.carousel", [1, 2])
		
		var reviewsSlider = $('.reviews-slider').owlCarousel({
			nav:true,
			dots: true,
			loop: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeInRight',
			smartSpeed: 1000,
			margin: 30,
			items: 1
		});

	}

};

(function() {
	common.init();
}());
