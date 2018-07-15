jQuery( document ).ready( function ( $ ) {

	$( '#header__search-form' ).submit( function () {

		var is_form_valid = true;

		// No permitir buscar si el input esta vacio.
		
		if ( $.trim( $( '#header__search-input' ).val() ).length == 0 )
			is_form_valid = false;

		return is_form_valid;

	} );

	$( '#header__search-btn' ).click( function () {

		let _this = $( this );

		$( '#header__search-input' ).val( '' );

		if ( ! $( '.navbar' ).hasClass( 'active-search' ) ) {

			_this.closest( '.navbar' ).removeClass( 'inactive-search' ).addClass( 'active-search' );

			$( '#header__search-input' ).focus();

			$( '.header__search-btn' ).html( '<small>Cancel</small>' );

		} else {

			_this.closest( '.navbar' ).removeClass( 'active-search' ).addClass( 'inactive-search' );

			$( '#header__search-input' ).blur();

			$( '.header__search-btn' ).html( 'Search' );

		}

	} );

	// iscroll

	$( '#sidebar, #col-3th' ).css( {
		'overflow-y': 'hidden'
	} );

	iScrollOptions = {
		click: true,
		fadeScrollbars: true,
		interactiveScrollbars: true,
		mouseWheel: true,
		probeType: 2,
		scrollbars: false
	};

	var myScroll1 = new IScroll( '#sidebar', iScrollOptions );
	var myScroll2 = new IScroll( '#col-3th', iScrollOptions );


	// $('#search__input, #search__btn-submit').on('focus', function() {
	// 	$(this).parent().addClass('focus');
	// }).blur(function() {
	// 	$(this).parent().removeClass('focus');
	// });

	// var parent   = document.getElementById('sidebar__body');
	// var child    = document.getElementById('sidebar__body-content');
	// var sb_width = child.offsetWidth - child.clientWidth;
	// child.style.width = 'calc(100% + ' + sb_width + 'px)';
	// $(window).resize(function() {
	// 	sb_width = child.offsetWidth - child.clientWidth;
	// 	child.style.width = 'calc(100% + ' + sb_width + 'px)';
	// });

	// Drawer.

	// $('#close-right-drawer').click(function() {
	// 	$('.drawer--right').removeClass('open');
	// 	$('body').removeClass('drawer-is-open');
	// });

	// $('#open-right-drawer').click(function() {
	// 	$('.drawer--right').addClass('open');
	// 	$('body').addClass('drawer-is-open');
	// });

	// switchNightMode();


	// // Mobile nav.

	// var mobile_nav_height = 126;
	// if ($(window).width() > 768)
	// 	mobile_nav_height = 78;

	// $('body').prepend(`
	// 	<div id="mobile-nav" class="mobile-nav pos-absolute md-hide">
	// 		<div class="container">
	// 			<ul class="mobile-nav__menu ls-unstyled xs-grid-1 sm-grid-6 txt-center grid-gap-0 ac-txtc">
	// `);

	// $('#mobile-nav').css('transform', 'matrix(1, 0, 0, 1, 0, -' + mobile_nav_height + ')');
	// $('.body-content').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');

	// $(window).resize(function() {
	// 	mobile_nav_height = 126;
	// 	if ($(this).width() > 768)
	// 		mobile_nav_height = 78;

	// 	$('#mobile-nav').css('transform', 'matrix(1, 0, 0, 1, 0, -' + mobile_nav_height + ')');
	// 	$('.body-content').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');

	// 	$('#mobile-nav').removeClass('open');

	// 	$('#mobile-nav ul li').css({
	// 		'opacity'   : 0,
	// 		'visibility': 'hidden'
	// 	});
	// });

	// $($('.navbar__collapse').get().reverse()).each(function() {
	// 	$($(this).find('.navbar__item')).each(function() {
	// 		var navbar_item_link = $(this).children('a').prop('href');
	// 		var navbar_item_text = $(this).text();
	// 		var navbar_item_active = '';
	// 		if ($(this).hasClass('active'))
	// 			navbar_item_active = 'active';

	// 		$('#mobile-nav ul')
	// 			.append(`
	// 				<li class="mobile-nav__item bd-top txt-uc ` + navbar_item_active + `">
	// 					<a class="mobile-nav__link d-block p-x-4 p-y-2" href="` + navbar_item_link + `">` + 
	// 						navbar_item_text + `
	// 					</a>
	// 				</li>`)
	// 			.children()
	// 			.css({
	// 				'opacity'   : 0,
	// 				'visibility': 'hidden'
	// 			});
	// 	});
	// });

	// $('.navbar__toggler').click(function() {
	// 	if (!$('#mobile-nav').hasClass('open')) {
	// 		$('#mobile-nav').addClass('open');

	// 		AnimateDirectionY('#mobile-nav', -mobile_nav_height, 0);
	// 		AnimateDirectionY('.body-content', 0, mobile_nav_height);

	// 		$('#mobile-nav ul li').each(function(index) {
	// 			$(this).css('visibility', 'visible');
	// 			$(this).delay(100 * index).animate({
	// 				'opacity': 1
	// 			}, 100);
	// 		});
	// 	} else {
	// 		AnimateDirectionY('#mobile-nav', 0, -mobile_nav_height);
	// 		AnimateDirectionY('.body-content', mobile_nav_height, 0);

	// 		$($('#mobile-nav ul li').get().reverse()).each(function(index) {
	// 			$(this).delay(100 * index).animate({
	// 				'opacity' : 0,
	// 				'duration': 100,
	// 				'complete': function() {
	// 					$(this).css('visibility', 'hidden');
	// 				}
	// 			});
	// 		});

	// 		$('#mobile-nav').removeClass('open');
	// 	}
	// });

} );

function switchNightMode() {
	if (!('localStorage' in window)) return;

	var nightMode = localStorage.getItem('nightMode');
	if (nightMode) {
		$('#switch-night-mode').prop('checked', true);
		$('#icon-night-mode').removeClass('ion-ios-moon-outline').addClass('ion-ios-moon');
	}

	switchNightModeStart('#switch-night-mode');
	$('#switch-night-mode').change(function() {
		switchNightModeStart($(this));
	});
}

function switchNightModeStart(element) {
	if ($(element).is(':checked')) {
		$('html').addClass('night txt-smooth');
		$('#icon-night-mode').removeClass('ion-ios-moon-outline').addClass('ion-ios-moon');
		localStorage.setItem('nightMode', true);
	}
	else {
		$('html').removeClass('night txt-smooth');
		$('#icon-night-mode').removeClass('ion-ios-moon').addClass('ion-ios-moon-outline');
		localStorage.removeItem('nightMode');
	}
}

// function AnimateDirectionY(element, position_start, position_end) {
// 	// Caching the object for performance reasons.
// 	var $elem = $(element);

// 	// We use a pseudo object for the animation
// 	// (starts from `distance_start` to `distance_end`), you can name it as you want
// 	$({pos: position_start}).animate({pos: position_end}, {
// 		duration: 25,
// 		step: function(now) {
// 			// in the step-callback (that is fired each step of the animation),
// 			// you can use the `now` parameter which contains the current
// 			// animation-position (`distance_start` up to `distance_end`).
// 			$elem.css({
// 				'transform': 'matrix(1, 0, 0, 1, 0, ' + now + ')'
// 			});
// 		}
// 	});
// }
