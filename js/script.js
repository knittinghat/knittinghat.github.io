$(document).ready(function(){
  $('.banner__wrapper').slick({
   infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
  });
  $('.slider__wrapper').slick({
    dots: true,
    dotsClass: '.slider__marker-wrap',
    arrows: false,
  });
});