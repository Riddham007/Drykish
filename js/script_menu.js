$('.menu-btn').on('click', function(e) {
	e.preventDefault;
	$('.menu-btn').toggleClass('menu-btn_active');
	$('.menu-nav').toggleClass('menu-nav_active');
})