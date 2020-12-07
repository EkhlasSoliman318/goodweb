$(function (){
   "use strict";
    $(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.header').addClass('fixed-menu');
		} else {
			$('.header').removeClass('fixed-menu');
		}
	});
    /******************************show popup*******************/
    $('.show').click(function(){
        $($(this).data('popup')).fadeIn();
    });
    $('.popup').click(function(){
        $(this).fadeOut();
    });
    $('.popup .inner').click(function(e){
        e.stopPropagation();
    });
    $('.popup .close').click(function(e){
        e.preventDefault();
        $(this).parentsUntil('.popup').parent().fadeOut();
    });
    /******************************scroll top ********************************/
    $(window).scroll(function(){
        var toTop = $('.to-top'); 
       if($(window).scrollTop() >= 500){
           if(toTop.is(':hidden')){
               toTop.fadeIn(400);
           }
           
       } else {
           toTop.fadeOut(400);
       }
    });
    $('.to-top').click(function(){
       $('html, body').animate({
           scrollTop:0
       },1000); 
    });
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    
});