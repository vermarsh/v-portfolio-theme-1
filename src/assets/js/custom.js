/*

Template: Profyl - Personal Vcard Resume HTML Template
Author: iqonicthemes.in
Version: 1.0

*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

1.Page Loader
2.Portfolio isotope
3.NiceScroll
4.Progress Bar
5.Magnific Popup
6.Typer
7.Owl Carousel

------------------------------------------------
Index Of Script
----------------------------------------------*/

$(document).ready(function() {

    /*------------------------
    Page Loader
    --------------------------*/
    jQuery("#load").fadeOut();
    jQuery("#loading").delay(0).fadeOut("slow");

    /*------------------------
    Typer
    --------------------------*/
    var win = $(window),
        foo = $('#typer');
    foo.typer(['<h1><span class="iq-font-purple">Web</span> Developer</h1>', '<h1>Web <span class="iq-font-purple">Designer</span></h1>', '<h1><span class="iq-font-purple">Frontend</span> Developer</h1>']);
    
    $('.navbar-toggler').click(function(){
        $(".collapse").stop().slideToggle(500);
    })

    /*------------------------
    Portfolio isotope
    --------------------------*/
	var $grid = $('.isotope').isotope({
		itemSelector: '.grid-item',
		layoutMode: 'fitRows',
	});
	// filter functions
	var filterFns = {
		// show if number is greater than 50
		numberGreaterThan50: function() {
			var number = $(this).find('.number').text();
			return parseInt(number, 10) > 50;
		},
		// show if name ends with -ium
		ium: function() {
			var name = $(this).find('.name').text();
			return name.match(/ium$/);
		}
	};
	// bind filter button click
	$('.isotope-filters').on('click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[filterValue] || filterValue;
		$grid.isotope({
			filter: filterValue
		});
	});
	// change is-checked class on buttons
	$('.isotope-filters').each(function(i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on('click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$(this).addClass('is-checked');
		});
	});



    /*------------------------
    NiceScroll
    --------------------------*/
    if ($(window).width() < 767) {
        $("#boxscroll").getNiceScroll().hide();
    } else {

        $("#boxscroll").niceScroll();
    }


    /*------------------------
    Progress Bar
    --------------------------*/
    $('.iq-progress-bar > span').each(function() {
        var $this = $(this);
        var width = $(this).data('percent');
        $this.css({
            'transition': 'width 2s'
        });
        setTimeout(function() {
            $this.appear(function() {
                $this.css('width', width + '%');
            });
        }, 100);
    });



    /*------------------------
    Magnific Popup
    --------------------------*/
    $('.popup-gallery').magnificPopup({
        delegate: 'a.popup-img',
        tLoading: 'Loading image #%curr%...',
        type: 'image',
        mainClass: 'mfp-img-mobile',
        gallery: {
            navigateByImgClick: true,
            enabled: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        disableOn: 700,
        mainClass: 'mfp-fade',
        preloader: false,
        removalDelay: 160,
        fixedContentPos: false
    });



    




$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);
});