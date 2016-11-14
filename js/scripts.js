jQuery(document).ready(function($) {
	// $('.filter').filterMe({
	// 	desaturate: false, // Value from 0 - 1. 1 equals full desaturation (black & white).
	// 	curves: false, // Object of RGB values in production script, or string name of curves .acv file in development script.
	// 	vignette: false, // 'true' or 'false'. Add a vignette to the image.
	// 	folder: 'acv/', // Development script only. Location of the .acv folder, relative to the current file.
	// 	debug: false // Set to 'true' for script debugging. Logs information along execution in console.
	// });
	// $('.filter').filterMe();

	$('.layout-aside .tags a').each(function() {
		$(this).wrap('<li class="tags-item"/>');
	});

	$('.header-search .header-search-field').focusin(function() {
		$(this).parent().addClass('focus');
	}).focusout(function() {
		$(this).parent().removeClass('focus');
	});

  // $('#search-results:empty').removeClass('archive-columns');
});
