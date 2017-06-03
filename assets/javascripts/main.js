$(window).load(function() {
    $('#addOptions').modal('show');
});

$(document).ready(function() {

	backToTop(); //BACKTOTOP
	toggleRightSidebarNav(); //Mobilesidebar
	showSubMenuonClick();

	//for enscroll
	if ($(window).width() >= 768) {
		$('.scrollbox').enscroll();
	}

	// for search Typehead
	$('input.typeahead').typeahead({
		name: 'Search',
		local: ['WX09X10003', 'Studio', 'AWX09X10006', 'BWX09X10001', 'CWX09X10006', 'DWX09X10006', 'EWX09X10006']
	});
	
	//for sidebar mobile view

	function toggleRightSidebarNav() {
		if($(window).width() <= 768) {
			$('.cd-nav-trigger').click(function() {
				$(this).addClass('active')
				$('#sticky_item').addClass('open');
			});
			
			$('#sticky_item .close').click(function() {
				$('.cd-nav-trigger').removeClass('active')
				 $('#sticky_item').removeClass('open');
			});
		}
	}

	/** Accordian  **/
	(function($) {
			"use strict"
			// Accordion Toggle Items
			var iconOpen = 'fa fa-angle-down',
			    iconClose = 'fa fa-angle-up';

			$(document).on('show.bs.collapse hide.bs.collapse', '.accordion', function(e) {
				var $target = $(e.target)
				$target.siblings('.accordion-heading').find('em').toggleClass(iconOpen + ' ' + iconClose);
				if (e.type == 'show')
					$target.prev('.accordion-heading').find('.accordion-toggle').addClass('active');
				if (e.type == 'hide')
				$(this).find('.accordion-toggle').not($target).removeClass('active');
			});

	})(jQuery);

	$(".nav-accordian-children").hide();
	$(".nav-accordian-parent").click(function() {
		$(this).next(".nav-accordian-children").slideDown();
		$(this).parent().siblings(".nav-accordian-wraper").children(".nav-accordian-children").slideUp();

		$(this).find(".fa-angle-down").addClass("nav-angle-up");
		$(this).parent().siblings(".nav-accordian-wraper").children(".nav-accordian-parent").find(".fa-angle-down").removeClass("nav-angle-up");

		return false;
	});


	// for multiple select box
	$('.modal-type').multiselect({
		buttonText : function(options, select) {
			return 'Model Type';
		},
		buttonWidth : false,
		buttonTitle : function(options, select) {
			var labels = [];
			options.each(function() {
				labels.push($(this).text());
			});
			return labels.join(' - ');
		}
	});

	$('.room-type').multiselect({
		buttonText : function(options, select) {
			return 'Room Type';
		},
		buttonWidth : false,
		buttonTitle : function(options, select) {
			var labels = [];
			options.each(function() {
				labels.push($(this).text());
			});
			return labels.join(' - ');
		}
	});

	$('.simple-select').select2({
		placeholder : "Select",
		width : '100%',
		minimumResultsForSearch : Infinity
	});

	/** Scroll top **/
	$(window).scroll(function() {
		if ($(window).scrollTop() > 50) {
			$('.backto-top').fadeIn();
			$('[data-scroll="blur"]').css({
				'margin-top' : '-60px'
			});
		} else {
			$('.backto-top').fadeOut();
			$('[data-scroll="blur"]').css({
				'margin-top' : -($(this).scrollTop() / 1) + "px"
			});
		}
	});
	
	function backToTop(){
		$('.backto-top').on('click', function(){
			$('html, body').animate({scrollTop: $('body').offset().top}, 800);
		});
	}
	/** Scroll top **/
	}); 

	(function($) {
		"use strict"
		// Accordion Toggle Items
		var iconOpen = 'fa-angle-up',
		    iconClose = 'fa-angle-down';

		$(document).on('show.bs.collapse hide.bs.collapse', '.accordion', function(e) {
			var $target = $(e.target)
			$target.siblings('.accordion-heading').find('em').toggleClass(iconOpen + ' ' + iconClose);
			if (e.type == 'show')
				$target.prev('.accordion-heading').find('.accordion-toggle').addClass('active');
			if (e.type == 'hide')
				$(this).find('.accordion-toggle').not($target).removeClass('active');
		});

	});

	(function($) {
		$('.jqzoom').jqzoom({
			zoomType : 'standard',
			lens : true,
			preloadImages : false,
			alwaysOn : false,
			zoomWidth : 350,
			zoomHeight : 300,
			xOffset : 0,
			yOffset : 0
		});
	})(jQuery);

	//click on item and show submenu

	function showSubMenuonClick(){

		$('.profile-acc > a').bind('touchstart click', function(event){
			event.preventDefault();
			$(this).parent().toggleClass('selected');
		});	
	}

	$(document).click(function(event){
		if(!$(event.target).is('.has-children > a')) {
			$('.profile-acc').removeClass('selected');
		}
	});