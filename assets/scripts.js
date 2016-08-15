jQuery(document).ready(function() {
	$('.moreBtn').click(function() {
		$('.more-action').toggle(2);
		console.log('Hi')
	});


/*	$('.more-dropdown-content').hide();*/
	$('.moreDropdown').click(function(event) {
			$('.dropdown-content').toggle();
	});

	$('.commentTrigger a').click(function(event) {
			event.preventDefault();
			$(this).parents('.people-reaction-activity').find('.comment-box').toggle();
			console.log('Hi');
	});
});