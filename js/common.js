$(document).ready(function(){
	$(".slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
	   	prevArrow: '<i class="control-prev fa fa-chevron-left"></i>',
        nextArrow: '<i class="control-next fa fa-chevron-right"></i>',
        variableWidth: true
	});
});
