// $(document).ready(function() {
// 	var array_number_words = [];
//   $('.post-reading-time').each(function() {
//     array_number_words.push($(this).attr('data-number-words'));
//   });

//   function percentCalculation(a, b) {
//     var c = parseFloat(b) / parseFloat(a);
//     return c;
//   }

//   var min_number_words = Math.min.apply(null, array_number_words);
//   $('.post-reading-time').each(function() {
//     var percentage_reading_time = percentCalculation($(this).attr('data-number-words'), min_number_words);
//     $(this).css({
//       'opacity' : percentage_reading_time
//     });
//     // console.log(percentage_reading_time);
//   });

//   // Category selected.
//   function remove_classes() {
//     $('.post-header').removeClass('selected');
//     $('#posts').removeClass('selected-category');
//   }

//   $(document).on('click', 'html', function(event) {
//     if (!$(event.target).closest('.posts-monthly').length) {
//       remove_classes();
//     }
//   });

//   $('.post-category').click(function(event) {
//     event.preventDefault();

//     var post_category = $(this).text();

//     remove_classes();

//     $('.post-category').each(function() {
//       if ($(this).text() == post_category) {
//         $(this).closest('.post-header').addClass('selected')
//                .closest('#posts').addClass('selected-category');
//       }
//     });
//   });
// });
