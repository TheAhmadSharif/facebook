jQuery(document).ready(function() {
	$('.moreBtn').click(function() {
		$('.more-action').toggle(2);
		console.log('Hi')
	});


/*	$('.more-dropdown-content').hide();*/
	$('.moreDropdown').click(function(event) {
			$('.dropdown-content').toggle();
	});
});