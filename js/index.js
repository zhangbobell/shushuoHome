$(document).ready(function() {
	var deck = new $.scrolldeck({
		buttons: '.nav-button',
		slides: '.page',
		duration: 1000,
		easing: 'easeInOutExpo',
		offset: 0
	});
});