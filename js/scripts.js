jQuery(document).ready(function($) {
	// Sidebar fijo.

	function ActivateScripts() {
		if ($(this).width() > 767) {
			$('#sidebar__content--fixed').stick_in_parent({
				parent: 'body',
				offset_top: 20
			});

			gumshoe.init();
		} else {
			$('#sidebar__content--fixed').trigger('sticky_kit:detach');
			gumshoe.destroy();
		}
	}
	ActivateScripts();

	$(window).resize(function() {
		ActivateScripts();
	});

	// No permitir buscar si el input esta vacio.

	$('#search__form').submit(function() {
		var is_form_valid = true;

		if ($.trim($('#search__input').val()).length == 0)
			is_form_valid = false;

		return is_form_valid;
	});

	navbarMenuToggle();

	$('#search__input, #search__btn-submit').on('focus', function() {
		$(this).parent().addClass('focus');
	}).blur(function() {
		$(this).parent().removeClass('focus');
	});

	// // Convertir las fechas al calendario fijo internacional.

	// $('.post__date time').each(function() {
	// 	var post_date_to_string = $(this).data('post-date-to-string');
	// 	var post_date = new Date(post_date_to_string);
	// 	var IFCdate = new IFCDate(post_date);

	// 	IFCdate.setMonthsList('cotsworth_es');
	// 	IFCdate.setDaysList('iso-8601-es');

	// 	$(this).html('').append(IFCdate.toDateString() + '.');
	// });

	// $('.lst-recent-posts').scrollspy();

	// var header = $('.header');
 //    $(window).scroll(function() {    
 //        var scroll = $(window).scrollTop();
    
 //        if (scroll > 0) {
 //            header.addClass('shadow');
 //        } else {
 //            header.removeClass('shadow');
 //        }
 //    });



// 	$('.layout-aside .tags a').each(function() {
// 		$(this).wrap('<li class="tags-item"/>');
// 	});

	// var posts = [
	// 	['1', 'title 1', 'images/test.gif']
	// ];

	// var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
	// var month = 11;
	// var year = 2017;
	// var first_day = getFirstDayOfMonth(year, month);
	// var month_days = getMonthDays(year, month);

	// // Append the first empty days in the calendar.
	// if (first_day == 0)
	// 	first_day = 7;
	// for(i = 0; i < first_day - 1; i++) {
	// 	$('.calendar-days').append('<div class="emptyDay day-' + days[i + 1] + '"><div class="inner"><img class="emptyDay-image" src="images/empty-day.png"><div class="day-number">—</div></div></div>');
	// }

	// // Append all the month days.
	// for(i = 0; i < month_days; i++) {
	// 	var d = i;
	// 	d = d + 1;
	// 	$('.calendar-days').append('<div class="day-' + d +' day-' + getDayName(year, month, d) + '" data-post-date-day="' + d + '"><div class="inner"><img class="emptyDay-image" src="images/empty-day.png"><div class="day-number">' + d + '</div></div></div>');
	// }

	// // Append the posts.
	// var length = posts.length;
	// for(i = 0; i < length; i++) {
	// 	// console.log(posts[i][0]);
	// 	// $('div[data-post-date-day="' + posts[i][0] + '"]').append('<div class="post-title">' + posts[i][1] + '</div><img class="post-cover" src="' + posts[i][2] + '">');
	// 	$('.day-' + posts[i][0]).children('.inner').prepend('<img class="post-cover" src="' + posts[i][2] + '">').find('.emptyDay-image').remove();
	// }

	// Get the first day name of the month.
	// function getFirstDayNameOfMonth(year, month) {
	// 	var days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
	// 	var firstOfMonth = new Date(year, month, 1);
	// 	return days[firstOfMonth.getDay()];
	// }

	// // Get the first day (number) of the month.
	// function getFirstDayOfMonth(year, month) {
	// 	var firstOfMonth = new Date(year, month, 1);
	// 	return firstOfMonth.getDay();
	// }

	// // Note that month is 0-based, like in the Date object. Adjust if necessary.
	// function getMonthDays(year, month) {
	// 	var isLeap = ((year % 4) == 0 && ((year % 100) != 0 || (year % 400) == 0));
	// 	return [31, (isLeap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
	// }

	// // Get the day name of the month day.
	// function getDayName(year, month, day) {
	// 	var date = new Date(year, month, day);
	// 	return days[date.getDay()];
	// }

	// $('.search').stick_in_parent({
	// 	parent: 'body',
	// 	offset_top: 50
	// });

	// $('.navbar__item-search').click(function() {
	// 	$('.navbar').toggleClass('navbar_search-active');
	// 	$('.navbar__search').toggleClass('navbar__search_visible');
	// 	$('.navbar__search .search__box').focus();

	// 	if ($('.navbar').hasClass('navbar_search-active')) {
	// 		var left = $('.navbar_search-active .navbar__item-search').offset().left;  // Get the calculated left position.
	// 		$('.navbar_search-active .navbar__item-search').css({left: left})  // Set the left to its calculated position.
	// 			.animate({'left' : '0'}, 300);
	// 	} else {
	// 		$('.navbar').hide().fadeIn('fast');
	// 	}
	// });

	// $('#sidebar__search-box').val($('#search__box').val());

	// $('#search__input').focusin(function() {
	// 	$(this).parent().addClass('is-focused');
	// }).focusout(function() {
	// 	$(this).parent().removeClass('is-focused');
	// });

	// var post_category = $('.post-categoryLink').text().trim();
	// $('.body-post').find('.subbar-categoryLink:contains(' + post_category + ')').addClass('selected');

	// $('.featuredGrid-post').each(function() {
	// 	if ($(this).hasClass('category-diseno')) {
	// 		$(this).css({
	// 			'background-blend-mode': 'lighten, normal',
	// 			'background-image': 
	// 				'linear-gradient(to bottom, rgba(0, 112, 224, 0.3) 0%, rgba(0, 112, 224, 0.3) 100%), \
	// 				 url(' + $(this).data('post-cover') + ')'
	// 		});
	// 	}
	// });

	// $('.post-categoryLink').each(function() {
	// 	var postCategory = $(this).data('post-category');
	// 	var menuCategory = $('.category-link').data('menu-category');

	// 	console.log('postCategory: ' + postCategory + ', menuCategory: ' + menuCategory);

	// 	if (postCategory == menuCategory)
	// 		$('.category-link[data-menu-category="' + postCategory + '"]').addClass('category-active');
	// });

// 	$('.aside-entries-post .teaser-aside-entries:last-child').hide();
// 	$('.aside-entries-post .teaser-aside-entries:visible:last').css('border-bottom', 'none');

// 	var teaser_title_featured = $('.teaser-title-featured').text().trim();
// 	var content_title = $('.layout-content-entry').find('.content-title').text().trim();
// 	$('.teaser-title:not(.teaser-title-featured)').each(function() {
// 		if ($(this).text().trim() == teaser_title_featured) {
// 			$(this).closest('.teaser').remove();
// 		} else if ($(this).text().trim() == content_title) {
// 			$(this).closest('.teaser').remove();
// 			$('.aside-entries-post .teaser-aside-entries:visible:last').removeAttr('style');
// 			$('.aside-entries-post').find('.teaser-aside-entries:last-child').show();
// 		}
// 	});

	// $('.posts .post-excerpt figure:hidden').remove();

	// var configProfile = {
	// 	'domId': 'latest-tweets',
	// 	'enableLinks': true, 
	// 	'lang': 'es',
	// 	'maxTweets': 10,
	// 	'profile': {'screenName': 'jonathan_zuniga'},
	// 	'showImages': false,
	// 	// 'showRetweet': false,
	// 	'showTime': true,
	// 	'showUser': true
	// };
	// twitterFetcher.fetch(configProfile);

	// $('.social-feed-container').socialfeed({
 //    // TWITTER
 //    twitter:{
 //        accounts: ['@jonathan_zuniga'],                      //Array: Specify a list of accounts from which to pull tweets
 //        limit: 10,                                   //Integer: max number of tweets to load
 //        consumer_key: 'EMTdI9qBiWfj0qqvL0SzCgrG1',          //String: consumer key. make sure to have your app read-only
 //        consumer_secret: 'UHMvETMhXBYoxYEmVQlw9gn7uOHhHtCRh0naV0lpb0xrv3DV9L' //String: consumer secret key. make sure to have your app read-only
 //     },
 //     rss:{
 //        urls: ['http://jonathanzuniga.github.io/feed'], //Array: Specifiy a list of rss feed from which to pull posts
 //        limit: 2                                      //Integer: max number of posts to load for each url
 //    },

 //            // GENERAL SETTINGS
 //            length: 300                                      //Integer: For posts with text longer than this length, show an ellipsis.
 //        });
});

function navbarMenuToggle() {
	$('#open-menu').click(function() {
		if (!$('.navbar__collapse').hasClass('open')) {
			$('.navbar__collapse').addClass('open').removeClass('close');
			$(this).text('Cerrar');
		}
		else {
			navbarMenuClose();
		}
	});
}

function navbarMenuClose() {
	$('.navbar__collapse').addClass('close').removeClass('open');
	$('.navbar__toggler').text('Menú');
}
