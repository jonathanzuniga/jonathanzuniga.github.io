
jQuery( document ).ready( function ( $ ) {

	$( '#header__search-form' ).submit( function () {

		let is_form_valid = true;

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

		} else {

			_this.closest( '.navbar' ).removeClass( 'active-search' ).addClass( 'inactive-search' );

			$( '#header__search-input' ).blur();

		}

	} );

	// iscroll

	iScrollOptions = {
		click: true,
		fadeScrollbars: true,
		interactiveScrollbars: true,
		mouseWheel: true,
		probeType: 2,
		scrollbars: false
	};

	let myScroll1 = null;
	let myScroll2 = null;

	function startIScroll() {

		if ( $( window ).width() < 1024 ) {

			$( '#sidebar' ).css( 'overflow-y', '' );

			if ( myScroll1 != null ) {

				myScroll1.destroy();
				myScroll1 = null;

			}

			$( '#third-col' ).css( 'overflow-y', '' );

			if ( myScroll2 != null ) {

				myScroll2.scrollTo( 0, 0 );
				myScroll2.destroy();
				myScroll2 = null;

			}

		} else {

			if ( myScroll1 == null ) {

				myScroll1 = new IScroll( '#sidebar', iScrollOptions );

				$( '#sidebar' ).css( 'overflow-y', 'hidden' );

			}

			if ( myScroll2 == null ) {

				myScroll2 = new IScroll( '#third-col', iScrollOptions );

				$( '#third-col' ).css( 'overflow-y', 'hidden' );

			}

		}

	};

	startIScroll();

	$( window ).resize( startIScroll );

	// Show/hide navbar menu when scroll.

	let lastScroll = 0;

	// $( '.header' ).addClass( 'header--full' );

	$( window ).scroll( function () {

		setTimeout( function () {

			let scroll = $( window ).scrollTop();

			if ( scroll > lastScroll ) {

				$( '.header' ).addClass( 'header--collapsed' );
				// $( '.header' ).addClass( 'header--shadow' );

			} else if ( scroll < lastScroll - 8 ) {

				$( '.header' ).removeClass( 'header--collapsed' );

			}

			// if ( scroll == 0 )
			// 	$( '.header' ).removeClass( 'header--shadow' );

			lastScroll = scroll;

		}, 0 );

	} );

	// Night mode.

	function nightMode() {

		if ( ! ( 'localStorage' in window ) ) return;

		let nightMode = localStorage.getItem( 'nightMode' );

		if ( nightMode ) {

			$( '#header__night-mode-btn' ).addClass( 'active' );

		}

		$( '#header__night-mode-btn' ).click( function () {

			toggleNightMode( $( this ) );

		} );

	}

	function toggleNightMode( el ) {

		if ( $( el ).hasClass( 'active' ) ) {

			localStorage.removeItem( 'nightMode' );

			$( 'html' ).removeClass( 'night fsmooth' );

			$( el ).removeClass( 'active' );

		} else {

			localStorage.setItem( 'nightMode', true );

			$( 'html' ).addClass( 'night fsmooth' );

			$( el ).addClass( 'active' );

		}

	}

	nightMode();

} );
