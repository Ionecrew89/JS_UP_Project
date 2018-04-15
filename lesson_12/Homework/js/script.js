$(document).ready(function() {
	
    $('[class^="main_bt"]').on('click', function () {
		$('.overlay').fadeIn(900);
		$('.modal').slideDown(500);
	});
	$('nav li:eq(1)').on('click', function () {
		$('.overlay').fadeIn(900);
		$('.modal').slideDown(500);
	});
	$('.close').on('click', function () {
		$('.overlay').fadeOut(900);
		$('.modal').slideUp(500);
	})


// $('.main_btn')
// $('.main_btna')
// $('[href="#tour"]')
// $('[href="#sheldure"]')

	// $('.main_btna').on('click', function() {

	// 	let modal = $('.modal'),
	// 		overlay = $('.overlay')		

	// 	modal.css('margin-top', '-600px');
	// 	modal.fadeIn();
	// 	overlay.fadeIn(3000);
	    
	// 	modal.animate(
	// 		{
	// 			'margin-top': '5rem'

	// 		}, 2500
	// 	);

	// 	$('.close').click(function() {

	// 		overlay.fadeOut(3000);
	// 		modal.animate(
	// 			{
	// 				'margin-top': '-600px'

	// 			}, 2500
	// 		);
	// 		modal.fadeOut();
	// 	});
	// });
});