// (function ($) {

// 	"use strict";
	
	
// 	$('.owl-carousel').owlCarousel({
// 		loop: true,
// 		margin: 30,
// 		nav: true,
// 		pagination: true,
// 		responsive: {
// 			0: {
// 				items: 1
// 			},
// 			600: {
// 				items: 1
// 			},
// 			1000: {
// 				items: 2
// 			}
// 		}
// 	})




// 	// Scroll animation init
// 	window.sr = new scrollReveal();


// 	// Menu Dropdown Toggle
// 	if ($('.menu-trigger').length) {
// 		$(".menu-trigger").on('click', function () {
// 			$(this).toggleClass('active');
// 			$('.header-area .nav').slideToggle(200);
// 		});
// 	}


// 	// Menu elevator animation
// 	$('a[href*=\\#]:not([href=\\#])').on('click', function () {
// 		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
// 			var targetHash = this.hash;
// 			var target = $(this.hash);
// 			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// 			if (target.length) {
// 				var width = $(window).width();
// 				if (width < 991) {
// 					$('.menu-trigger').removeClass('active');
// 					$('.header-area .nav').slideUp(200);
// 				}
// 				$('html,body').animate({
// 					scrollTop: (target.offset().top)
// 				}, 700, 'swing', function () {
// 					window.location.hash = targetHash;
// 				});
// 				return false;
// 			}
// 		}
// 	});

// 	$(document).ready(function () {
// 		$('a[href^="#welcome"]').addClass('active');

// 		//smoothscroll
// 		$('.menu-item').on('click', function (e) {
// 			e.preventDefault();
// 			var athis = this;
// 			var target = this.hash,
// 				menu = target;
// 			var $target = $(target);

// 			$('html, body').stop().animate({
// 				'scrollTop': $target.offset().top
// 			}, 500, 'swing', function () {
// 				window.location.hash = target;
// 				$('.menu-item').removeClass('active');
// 				$(athis).addClass('active');
// 			});
// 		});

// 		$(window).scroll(function (event) {
// 			var scrollPos = $(document).scrollTop() + 80;

// 			if (scrollPos === 0) {
// 				$('a[href^="#welcome"]').addClass('active');
// 				return;
// 			}
// 			$('.menu-item').not('[href=""]').not('[href="javascript:;"]').each(function () {
// 				var currLink = $(this);
// 				var refElement = $(currLink.attr("href"));
// 				if (refElement && refElement.position()) {
					
					
		
// 					if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
// 						$('.menu-item').removeClass("active");
// 						currLink.addClass("active");
// 					} else {
// 						currLink.removeClass("active");
// 					}
// 				}
// 			});
// 		})
// 	});

// 	const Accordion = {
// 		settings: {
// 			// Expand the first item by default
// 			first_expanded: false,
// 			// Allow items to be toggled independently
// 			toggle: false
// 		},

// 		openAccordion: function (toggle, content) {
// 			if (content.children.length) {
// 				toggle.classList.add("is-open");
// 				let final_height = Math.floor(content.children[0].offsetHeight);
// 				content.style.height = final_height + "px";
// 			}
// 		},

// 		closeAccordion: function (toggle, content) {
// 			toggle.classList.remove("is-open");
// 			content.style.height = 0;
// 		},

// 		init: function (el) {
// 			const _this = this;

// 			// Override default settings with classes
// 			let is_first_expanded = _this.settings.first_expanded;
// 			if (el.classList.contains("is-first-expanded")) is_first_expanded = true;
// 			let is_toggle = _this.settings.toggle;
// 			if (el.classList.contains("is-toggle")) is_toggle = true;

// 			// Loop through the accordion's sections and set up the click behavior
// 			const sections = el.getElementsByClassName("accordion");
// 			const all_toggles = el.getElementsByClassName("accordion-head");
// 			const all_contents = el.getElementsByClassName("accordion-body");
// 			for (let i = 0; i < sections.length; i++) {
// 				const section = sections[i];
// 				const toggle = all_toggles[i];
// 				const content = all_contents[i];

// 				// Click behavior
// 				toggle.addEventListener("click", function (e) {
// 					if (!is_toggle) {
// 						// Hide all content areas first
// 						for (let a = 0; a < all_contents.length; a++) {
// 							_this.closeAccordion(all_toggles[a], all_contents[a]);
// 						}

// 						// Expand the clicked item
// 						_this.openAccordion(toggle, content);
// 					} else {
// 						// Toggle the clicked item
// 						if (toggle.classList.contains("is-open")) {
// 							_this.closeAccordion(toggle, content);
// 						} else {
// 							_this.openAccordion(toggle, content);
// 						}
// 					}
// 				});

// 				// Expand the first item
// 				if (i === 0 && is_first_expanded) {
// 					_this.openAccordion(toggle, content);
// 				}
// 			}
// 		}
// 	};

// 	(function () {
// 		// Initiate all instances on the page
// 		const accordions = document.getElementsByClassName("accordions");
// 		for (let i = 0; i < accordions.length; i++) {
// 			Accordion.init(accordions[i]);
// 		}
// 	})();




// 	// Home seperator
// 	if ($('.home-seperator').length) {
// 		$('.home-seperator .left-item, .home-seperator .right-item').imgfix();
// 	}


// 	// Home number counterup
// 	if ($('.count-item').length) {
// 		$('.count-item strong').counterUp({
// 			delay: 10,
// 			time: 1000
// 		});
// 	}


// 	// Page loading animation
// 	$(window).on('load', function () {
// 		console.log("hi")

// 		$("#loading").animate({
// 			'opacity': '0'
// 		}, 600, function () {
// 			setTimeout(function () {
// 				$("#loading").css("visibility", "hidden").fadeOut();
// 			}, 300);
// 		});
// 		// var figmaElements = document.querySelectorAll('.figma-container'); // Adjust the selector based on your Figma content

// 		// // Check if there are any Figma elements present
// 		// if (figmaElements.length > 0) {
// 		// 	// Show the loading animation if Figma content is being loaded
// 		// 	$("#loading").css("visibility", "visible").fadeIn();
// 		// } else {
// 		// 	// Hide the loading animation if Figma content has finished loading
// 		// 	$("#loading").fadeOut();
// 		// }
	
	
// 	// // Configure and start the MutationObserver
// 	// var observer = new MutationObserver(checkFigmaLoading);
	
// 	// // Define the configuration options for the observer
// 	// var config = { childList: true, subtree: true };
	
// 	// // Start observing changes in the DOM
// 	// observer.observe(document.body, config);
		
// 	});


// 	// Window Resize Mobile Menu Fix
// 	$(window).on('resize', function () {
// 		mobileNav();
// 	});


// 	// Window Resize Mobile Menu Fix
// 	function mobileNav() {
// 		var width = $(window).width();
// 		$('.submenu').on('click', function () {
// 			if (width < 1200) {
// 				$('.submenu ul').removeClass('active');
// 				$(this).find('ul').toggleClass('active');
// 			}
// 		});
// 	}


// })(window.jQuery);


// (function ($) {
//     "use strict";

//     // Smooth scroll animation for navigation links
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();

//         var target = $(this.hash);
//         if (target.length) {
//             $('html, body').animate({
//                 scrollTop: target.offset().top
//             }, 100, 'swing');
//         }
//     });

//     // Toggle mobile menu
//     $('.menu-trigger').on('click', function () {
//         $(this).toggleClass('active');
//         $('.header-area .nav').slideToggle(200);
//     });

// 	$(window).scroll(function () {
		
// 		var scroll = $(window).scrollTop();
// 		var box = $('.header-text').height();
// 		var header = $('header').height();

// 		if (scroll >= box - header) {
// 			$("header").addClass("background-header");
// 			$("header nav ul").addClass("nav-fix-margin-top");
// 		} else {
// 			$("header").removeClass("background-header");
// 			$("header nav ul").removeClass("nav-fix-margin-top");
// 		}
// 	});

// 	// Window Resize Mobile Menu Fix
// 	mobileNav();


//     // Add active class to menu item based on scroll position
//     $(window).on('scroll', function () {
//         var scrollPos = $(window).scrollTop() + 80;

//         $('.menu-item').each(function () {
//             var currLink = $(this);
//             var refElement = $(currLink.attr("href"));
//             if (refElement.length) {
//                 var refElementTop = refElement.offset().top;
//                 if (refElementTop <= scrollPos && refElementTop + refElement.height() > scrollPos) {
//                     $('.menu-item').removeClass("active");
//                     currLink.addClass("active");
//                 }
//             }
//         });
//     });

//     // Home number counterup
//     if ($('.count-item').length) {
//         $('.count-item strong').counterUp({
//             delay: 10,
//             time: 1000
//         });
//     }

//     // Page loading animation
//     $(window).on('load', function () {
//         $("#loading").animate({
//             'opacity': '0'
//         }, 600, function () {
//             setTimeout(function () {
//                 $("#loading").css("visibility", "hidden").fadeOut();
//             }, 300);
//         });
//     });

//     // Window Resize Mobile Menu Fix
//     $(window).on('resize', function () {
//         mobileNav();
//     });

//     // Window Resize Mobile Menu Fix
//     function mobileNav() {
//         var width = $(window).width();
//         $('.submenu').on('click', function () {
//             if (width < 1200) {
//                 $('.submenu ul').removeClass('active');
//                 $(this).find('ul').toggleClass('active');
//             }
//         });
//     }
// })(window.jQuery);


// ^^^^^^^^^^^^^^



(function ($) {
    "use strict";

    // Smooth scroll animation for navigation links
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 700, 'swing');
        }
    });

    // Toggle mobile menu
    $('.menu-trigger').on('click', function () {
        $(this).toggleClass('active');
        $('.header-area .nav').slideToggle(200);
    });

    // Add or remove class to header based on scroll position
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var box = $('.header-text').height();
        var header = $('header');

        if (scroll >= box) {
            header.addClass("background-header");
            $("header nav ul").addClass("nav-fix-margin-top");
        } else {
            header.removeClass("background-header");
            $("header nav ul").removeClass("nav-fix-margin-top");
        }

        // Show or hide the menu trigger based on scroll position
        if (scroll > 100) {
            $('.menu-trigger').fadeIn();
        } else {
            $('.menu-trigger').fadeOut();
        }
    });

    // Window Resize Mobile Menu Fix
    mobileNav();

    // Add active class to menu item based on scroll position
    $(window).on('scroll', function () {
        var scrollPos = $(window).scrollTop() + 80;

        $('.menu-item').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.length) {
                var refElementTop = refElement.offset().top;
                if (refElementTop <= scrollPos && refElementTop + refElement.height() > scrollPos) {
                    $('.menu-item').removeClass("active");
                    currLink.addClass("active");
                }
            }
        });
    });

    // Home number counterup
    if ($('.count-item').length) {
        $('.count-item strong').counterUp({
            delay: 10,
            time: 1000
        });
    }

    // Page loading animation
    $(window).on('load', function () {
        $("#loading").animate({
            'opacity': '0'
        }, 600, function () {
            setTimeout(function () {
                $("#loading").css("visibility", "hidden").fadeOut();
            }, 300);
        });
    });

    // Window Resize Mobile Menu Fix
    $(window).on('resize', function () {
        mobileNav();
    });

    // Window Resize Mobile Menu Fix
    function mobileNav() {
        var width = $(window).width();
        $('.submenu').on('click', function () {
            if (width < 1200) {
                $('.submenu ul').removeClass('active');
                $(this).find('ul').toggleClass('active');
            }
        });
    }
})(window.jQuery);
