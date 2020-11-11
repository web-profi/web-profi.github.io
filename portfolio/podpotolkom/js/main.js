
$(document).ready(function(){
    $('.slider_slick-1').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000, 
    });
    $(".slider_slick-1").on('afterChange', function(event, slick, currentSlide){
        $("#cp").text(currentSlide + 1);
     });
});

$(function($){
    $('[name="phone"]').mask("+38(099) 999-9999");
});
$('.slider').each(function(){
	var $status = $('.slides-num');
	var $slickElement = $(this);
	$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
			    var i = (currentSlide ? currentSlide : 0) + 1;			   
			    $('.slick-nav__wrap .slides-num', slick.$slider.parent()).text(i + '/' + slick.slideCount);
		  });

	$slickElement.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: false
		});

	$slickElement.parent().find('.slick-nav__wrap .arrow-next').click(function(){
			$slickElement.slick('slickNext');			   
		});
	$slickElement.parent().find('.slick-nav__wrap .arrow-prev').click(function(){
			$slickElement.slick('slickPrev');
		});

});
