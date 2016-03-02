$(function () {
	$("div#side-nav").affix({
		offset: {
		    top: 480,
		    bottom: 20, 
		}
	});

	$("button#offcanvas-nav-menu-btn").click(function (event) {
		event.preventDefault();
		event.stopPropagation();
		$("div#side-nav").animate({left: '0px'}, 1500);

		$(document).one('click', function (event) {
			$("div#side-nav").animate({left: '-300px'}, 1500);			
		});
	});

});
