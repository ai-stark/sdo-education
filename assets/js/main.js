$(window).on('load', function(){


//controls the arrows and the nav expansion
//using the arrow button should not change the content being viewed only expand and collapse nav
//click on chapter title to change content
	$('.toggle-switch').on('click', function(event){
		event.preventDefault();
		if ($(this).hasClass('arrow-img-right')){
			$(this).removeClass('arrow-img-right');
			$(this).addClass('arrow-img-down');
			$(this).next().removeClass('subnav-expanded');
		}else if ($(this).hasClass('arrow-img-down')){
			$(this).removeClass('arrow-img-down');
			$(this).addClass('arrow-img-up');
			$(this).next().addClass('subnav-expanded');
		}else{
			$(this).removeClass('arrow-img-up');
			$(this).addClass('arrow-img-down');
			$(this).next().removeClass('subnav-expanded');
		}

	});


	var sidebar = $('.sidebar');
	var overlay = $('.overlay');
	$('.btn-touch').on('click', function(){
		if (sidebar.hasClass('closed')){ 
			sidebar.removeClass('closed');
			sidebar.addClass('open');
			overlay.addClass('on');


		}else{
			sidebar.removeClass('open');
			sidebar.addClass('closed');
			overlay.removeClass('on');
		}
	});


		
	var subnavs = $('.subnav li');
	$(subnavs).on('click', function(){
		if ($('.mobile-menu').is(':visible')) {
			if (sidebar.hasClass('closed')){ 
				sidebar.removeClass('closed');
				sidebar.addClass('open');
				overlay.addClass('on');


			}else{
				sidebar.removeClass('open');
				sidebar.addClass('closed');
				overlay.removeClass('on');
			}
		}
	});

cycleSlider();



	
});


var slides = $('.standards-slides-container .slide');
var slideLoc = $('.slide-location li');
var items = slides.length;
var index = 0;

function cycleSlider(){
	var current = $('.standards-slides-container .slide').eq(index);
	var loc = $('.slide-location li').eq(index);
	loc.children().addClass('active-slide');
	slides.addClass('slide-hidden');
	current.addClass('slide-visible');
	current.attr('aria-hidden', "false");
	if (index == 0){
		$('.btn-previous').css('display', 'none');
	}else{
		$('.btn-previous').css('display', 'block');
	}

	if (index == items-1){
		$('.btn-next').css('display', 'none');
	}else{
		$('.btn-next').css('display', 'block');
	}
}


function clearActiveSlide(index){
	slides.eq(index).removeClass('slide-visible');
	slides.eq(index).attr('aria-hidden', 'true')
	slideLoc.eq(index).children().removeClass('active-slide');

}


$('.btn-next').click(function(event){
	event.preventDefault();
	//slides.eq(index).removeClass('slide-visible');
	//slideLoc.eq(index).children().removeClass('active-slide');
	clearActiveSlide(index);
	index += 1;
	if (index > items - 1){
		index = 0;
	}
	cycleSlider();
});


$('.btn-previous').click(function(){
	event.preventDefault();
	//slides.eq(index).removeClass('slide-visible');
	//slideLoc.eq(index).children().removeClass('active-slide');
	clearActiveSlide(index);

	index -= 1;
	if (index < 0){
		index = items-1;
	}
	cycleSlider();
});



$('.slide-location a').click(function(event){
	event.preventDefault();
	slideLoc.children().removeClass('active-slide');
	$(this).addClass('active-slide');
	var temp = index;
	index = parseInt($(this).text())-1;
	//slides.eq(temp).removeClass('slide-visible');
	//slideLoc.eq(temp).children().removeClass('active-slide');
	clearActiveSlide(temp);
	cycleSlider();
	
});


function submitSearch(){
    q = document.getElementById("query").value;
    document.getElementById("siteSearchUrl").value='https://search.usa.gov/search/docs&q=' + q; 
    return true;
}