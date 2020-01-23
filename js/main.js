$(function() {

	/*
	In this file there are some examples of the implementation
	of the most used scripts in the layout

	- Smooth scroll to anchor
	- Tabs
	- Email Ajax Send
	- Chrome smooth scroll
	- slider (Slick Slider)
	- popups (Magnific popup)
	- mask on input (Maskedinput)

	All information about the developer is contained in the plugin files.
	*/
	
	// Smooth Scroll to anchor
	// var's below clarity. Can be removed
	var $linkToScroll = $(".js-button-scroll"), // element link
			attrLink = 'href', 											// attr where placed id element to scroll
			timeToScroll = 1000; 										// time for which the page will scroll

	$linkToScroll.on("click", function() {
		event.preventDefault();
		let id  = $(this).attr(attrLink),
				anchor = $(id).offset().top;
		$('body,html').animate({scrollTop: anchor}, timeToScroll);
	});


	// simple tabs
	$('.tab').on('click', function() {
		event.preventDefault();
		let target = $(this).attr('href');
		$('.content_active').removeClass('content_active')
		$(target).toggleClass('content_active');
	});

	// E-mail Ajax Send
	// Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	// Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};


	////// PLUGINS //////

	// slick
	$('.slider').slick({
		dots: true,

		slidesToShow: 3,
  	slidesToScroll: 1,

  	autoplay: true,
  	autoplaySpeed: 5000,

  	responsive: [
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 2
      }
    }
  ]
	});

	// magnific popup
	$('.popup-lnk').magnificPopup({
		type: 'inline',
		// animation
		removalDelay: 500,
		mainClass: 'mfp-zoom-in',
		callbacks: {
			// autoclose popup after 3 second, if popup has class popup-with-autoclose
			open: function() {
				if ($.magnificPopup.instance.content.hasClass('popup-with-autoclose')) {
					setTimeout(function(){
						$.magnificPopup.close();
					}, 3000);
				}
			}
		}
	});

	// masked input
	$(".js-mask[type=tel]").mask("+7 (nnn) nnn-nn-nn"); // n - number (0-9)
});