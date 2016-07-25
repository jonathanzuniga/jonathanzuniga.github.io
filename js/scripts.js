jQuery(document).ready(function($) {
	// $('.filter').filterMe({
	// 	desaturate: false, // Value from 0 - 1. 1 equals full desaturation (black & white).
	// 	curves: false, // Object of RGB values in production script, or string name of curves .acv file in development script.
	// 	vignette: false, // 'true' or 'false'. Add a vignette to the image.
	// 	folder: 'acv/', // Development script only. Location of the .acv folder, relative to the current file.
	// 	debug: false // Set to 'true' for script debugging. Logs information along execution in console.
	// });

	$('.header-menu ul li a').on('mouseover touchstart', function() {
		var link_title = $(this).attr('title');
		var alphabet = '!~@#$%^&*(+=_jonathanzúñiga'
		$('.menu-item-description')
			.cypher('decode', {
				alphabet: alphabet,
				// animate: 'random',
				digits: '',
				endText: link_title,
				scheme: 'offset',
				speed: 10
			}
		);
	});
	$('.header-menu ul li a').on('mouseleave touchend', function() {
		$('.menu-item-description').text('Bienvenido');
	});
});
