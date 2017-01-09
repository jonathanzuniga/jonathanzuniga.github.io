jQuery(document).ready(function($) {
// 	$('.layout-aside .tags a').each(function() {
// 		$(this).wrap('<li class="tags-item"/>');
// 	});

	$('.search .search-field').focusin(function() {
		$(this).parent().addClass('focus');
	}).focusout(function() {
		$(this).parent().removeClass('focus');
	});

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

	$('.posts .post-excerpt figure:hidden').remove();

	var configProfile = {
	'domId': 'latest-tweets',
	'enableLinks': true, 
	'lang': 'es',
	'maxTweets': 10,
	'profile': {'screenName': 'jonathan_zuniga'},
	'showImages': false,
	// 'showRetweet': false,
	'showTime': true,
	'showUser': true
};
twitterFetcher.fetch(configProfile);
});
