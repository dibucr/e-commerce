$(function() {
	// Product View image click
	$('.side-image').click(function() {
		var $imageLink = $(this).find('img').data('src');
		$('.main-image').find('img').attr('src', $imageLink);
	});

	// Add new Product
	$('.add-new-product').click(function() {
		// Get root template template
		var $template = $('.root-template').html();
		var $element = '<div>' + $template + '</div>';
		$('.additional').append($element);
	});
});